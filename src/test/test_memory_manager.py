"""
Tests for the memory_manager module.

This module provides comprehensive tests for the memory management and streaming
file processing functionalities in the memory_manager module.
"""

import os
import sys
import tempfile
import unittest
import psutil
import time
import gc
import io
import pytest
from typing import List, Dict, Any, Tuple, Optional
from unittest.mock import patch, MagicMock, PropertyMock

# Add the project root to Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from memory_manager import (
    MemoryStats, MemoryManager, StreamingContext, 
    AdaptiveBufferManager, InsufficientMemoryError, StreamingIOError,
    StreamProcessingError, MemoryError, StreamingError
)


class TestMemoryStats:
    """Tests for the MemoryStats class."""
    
    def test_memory_stats_properties(self):
        """Test property methods of MemoryStats."""
        stats = MemoryStats(
            total=16 * 1024**3,       # 16 GB
            available=8 * 1024**3,     # 8 GB
            used=8 * 1024**3,          # 8 GB
            percent=50.0,              # 50%
            process_used=200 * 1024**2  # 200 MB
        )
        
        # Test the property getters
        assert stats.total_gb == 16.0
        assert stats.available_gb == 8.0
        assert stats.used_gb == 8.0
        assert stats.process_used_mb == 200.0
        
        # Test string representation
        expected_str = "Memory Stats: 50.0% used | Available: 8.00 GB | Process using: 200.00 MB"
        assert str(stats) == expected_str


class TestMemoryManager:
    """Tests for the MemoryManager class."""
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_init_and_defaults(self, mock_process, mock_virtual_memory):
        """Test initialization and default values."""
        # Mock memory information
        mock_memory = MagicMock()
        mock_memory.total = 16 * 1024**3  # 16 GB
        mock_memory.available = 8 * 1024**3  # 8 GB
        mock_memory.used = 8 * 1024**3  # 8 GB
        mock_memory.percent = 50.0
        mock_virtual_memory.return_value = mock_memory
        
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Create memory manager with defaults
        manager = MemoryManager()
        
        # Verify defaults
        assert manager.system_memory_threshold == MemoryManager.DEFAULT_SYSTEM_MEMORY_THRESHOLD
        assert manager.critical_memory_threshold == MemoryManager.DEFAULT_CRITICAL_MEMORY_THRESHOLD
        assert manager.target_batch_size_bytes == MemoryManager.DEFAULT_TARGET_BATCH_SIZE_BYTES
        assert manager.max_batch_size_bytes == MemoryManager.DEFAULT_MAX_BATCH_SIZE_BYTES
        assert manager.min_batch_size_bytes == MemoryManager.DEFAULT_MIN_BATCH_SIZE_BYTES
        assert manager.enable_auto_gc is True
        
        # Verify stats were initialized
        assert manager.stats.total == 16 * 1024**3
        assert manager.stats.available == 8 * 1024**3
        assert manager.stats.used == 8 * 1024**3
        assert manager.stats.percent == 50.0
        assert manager.stats.process_used == 200 * 1024**2
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_refresh_stats(self, mock_process, mock_virtual_memory):
        """Test refreshing memory statistics."""
        # Mock initial memory state
        mock_memory_initial = MagicMock()
        mock_memory_initial.total = 16 * 1024**3  # 16 GB
        mock_memory_initial.available = 8 * 1024**3  # 8 GB
        mock_memory_initial.used = 8 * 1024**3  # 8 GB
        mock_memory_initial.percent = 50.0
        
        # Mock updated memory state
        mock_memory_updated = MagicMock()
        mock_memory_updated.total = 16 * 1024**3  # 16 GB
        mock_memory_updated.available = 6 * 1024**3  # 6 GB (less available)
        mock_memory_updated.used = 10 * 1024**3  # 10 GB (more used)
        mock_memory_updated.percent = 62.5  # Higher percent used
        
        # Set up the mock to return different values on consecutive calls
        mock_virtual_memory.side_effect = [mock_memory_initial, mock_memory_updated]
        
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Create memory manager
        manager = MemoryManager()
        
        # First stats should match initial mock
        assert manager.stats.available == 8 * 1024**3
        assert manager.stats.percent == 50.0
        
        # Refresh stats and verify updated values
        updated_stats = manager.refresh_stats()
        assert updated_stats.available == 6 * 1024**3
        assert updated_stats.percent == 62.5
        
        # Verify the internal stats were updated
        assert manager.stats.available == 6 * 1024**3
        assert manager.stats.percent == 62.5
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_is_memory_high(self, mock_process, mock_virtual_memory):
        """Test memory threshold detection."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Create manager with 80% system threshold
        manager = MemoryManager(system_memory_threshold=0.8)
        
        # Test case: memory below threshold (70%)
        mock_memory_below = MagicMock()
        mock_memory_below.total = 16 * 1024**3
        mock_memory_below.available = 4.8 * 1024**3
        mock_memory_below.used = 11.2 * 1024**3
        mock_memory_below.percent = 70.0
        mock_virtual_memory.return_value = mock_memory_below
        
        assert not manager.is_memory_high()
        
        # Test case: memory at threshold (80%)
        mock_memory_at = MagicMock()
        mock_memory_at.total = 16 * 1024**3
        mock_memory_at.available = 3.2 * 1024**3
        mock_memory_at.used = 12.8 * 1024**3
        mock_memory_at.percent = 80.0
        mock_virtual_memory.return_value = mock_memory_at
        
        assert manager.is_memory_high()
        
        # Test case: memory above threshold (90%)
        mock_memory_above = MagicMock()
        mock_memory_above.total = 16 * 1024**3
        mock_memory_above.available = 1.6 * 1024**3
        mock_memory_above.used = 14.4 * 1024**3
        mock_memory_above.percent = 90.0
        mock_virtual_memory.return_value = mock_memory_above
        
        assert manager.is_memory_high()
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_is_memory_critical(self, mock_process, mock_virtual_memory):
        """Test critical memory threshold detection."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Create manager with 90% critical threshold
        manager = MemoryManager(critical_memory_threshold=0.9)
        
        # Test case: memory below threshold (85%)
        mock_memory_below = MagicMock()
        mock_memory_below.total = 16 * 1024**3
        mock_memory_below.available = 2.4 * 1024**3
        mock_memory_below.used = 13.6 * 1024**3
        mock_memory_below.percent = 85.0
        mock_virtual_memory.return_value = mock_memory_below
        
        assert not manager.is_memory_critical()
        
        # Test case: memory at threshold (90%)
        mock_memory_at = MagicMock()
        mock_memory_at.total = 16 * 1024**3
        mock_memory_at.available = 1.6 * 1024**3
        mock_memory_at.used = 14.4 * 1024**3
        mock_memory_at.percent = 90.0
        mock_virtual_memory.return_value = mock_memory_at
        
        assert manager.is_memory_critical()
        
        # Test case: memory above threshold (95%)
        mock_memory_above = MagicMock()
        mock_memory_above.total = 16 * 1024**3
        mock_memory_above.available = 0.8 * 1024**3
        mock_memory_above.used = 15.2 * 1024**3
        mock_memory_above.percent = 95.0
        mock_virtual_memory.return_value = mock_memory_above
        
        assert manager.is_memory_critical()
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_check_available_memory(self, mock_process, mock_virtual_memory):
        """Test checking if there's enough available memory."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Mock memory information with 4 GB available
        mock_memory = MagicMock()
        mock_memory.total = 16 * 1024**3  # 16 GB
        mock_memory.available = 4 * 1024**3  # 4 GB
        mock_memory.used = 12 * 1024**3  # 12 GB
        mock_memory.percent = 75.0
        mock_virtual_memory.return_value = mock_memory
        
        manager = MemoryManager()
        
        # Memory amount well within available (with safety factor)
        assert manager.check_available_memory(1 * 1024**3)  # 1 GB
        
        # Memory amount at the limit (with safety factor)
        # 4 GB / 1.2 ~= 3.33 GB
        assert manager.check_available_memory(3.3 * 1024**3)
        
        # Memory amount exceeding available (with safety factor)
        assert not manager.check_available_memory(3.5 * 1024**3)
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_ensure_available_memory_success(self, mock_process, mock_virtual_memory):
        """Test ensuring available memory when enough is available."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Mock memory information with 4 GB available
        mock_memory = MagicMock()
        mock_memory.total = 16 * 1024**3  # 16 GB
        mock_memory.available = 4 * 1024**3  # 4 GB
        mock_memory.used = 12 * 1024**3  # 12 GB
        mock_memory.percent = 75.0
        mock_virtual_memory.return_value = mock_memory
        
        manager = MemoryManager()
        
        # Should not raise exception for memory amount within available
        try:
            manager.ensure_available_memory(3 * 1024**3)  # 3 GB
        except InsufficientMemoryError:
            pytest.fail("ensure_available_memory raised InsufficientMemoryError unexpectedly")
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    @patch('gc.collect')
    def test_ensure_available_memory_with_gc(self, mock_gc_collect, mock_process, mock_virtual_memory):
        """Test ensuring available memory with garbage collection."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # First check: not enough memory
        mock_memory_before_gc = MagicMock()
        mock_memory_before_gc.total = 16 * 1024**3  # 16 GB
        mock_memory_before_gc.available = 2 * 1024**3  # 2 GB
        mock_memory_before_gc.used = 14 * 1024**3  # 14 GB
        mock_memory_before_gc.percent = 87.5
        
        # After GC: enough memory
        mock_memory_after_gc = MagicMock()
        mock_memory_after_gc.total = 16 * 1024**3  # 16 GB
        mock_memory_after_gc.available = 3.5 * 1024**3  # 3.5 GB (increased)
        mock_memory_after_gc.used = 12.5 * 1024**3  # 12.5 GB (decreased)
        mock_memory_after_gc.percent = 78.125
        
        # Set up to return different values on consecutive calls
        mock_virtual_memory.side_effect = [
            mock_memory_before_gc,  # Initial check
            mock_memory_before_gc,  # For _run_gc before
            mock_memory_after_gc,   # For _run_gc after
            mock_memory_after_gc    # Final check
        ]
        
        manager = MemoryManager(enable_auto_gc=True)
        
        # Should not raise exception because GC freed enough memory
        try:
            manager.ensure_available_memory(2.8 * 1024**3)  # 2.8 GB (fits after GC)
            assert mock_gc_collect.called  # Verify GC was called
        except InsufficientMemoryError:
            pytest.fail("ensure_available_memory raised InsufficientMemoryError unexpectedly")
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    @patch('gc.collect')
    def test_ensure_available_memory_insufficient(self, mock_gc_collect, mock_process, mock_virtual_memory):
        """Test ensuring available memory when not enough is available even after GC."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # First check: not enough memory
        mock_memory_before_gc = MagicMock()
        mock_memory_before_gc.total = 16 * 1024**3  # 16 GB
        mock_memory_before_gc.available = 2 * 1024**3  # 2 GB
        mock_memory_before_gc.used = 14 * 1024**3  # 14 GB
        mock_memory_before_gc.percent = 87.5
        
        # After GC: still not enough memory
        mock_memory_after_gc = MagicMock()
        mock_memory_after_gc.total = 16 * 1024**3  # 16 GB
        mock_memory_after_gc.available = 2.2 * 1024**3  # 2.2 GB (slightly increased)
        mock_memory_after_gc.used = 13.8 * 1024**3  # 13.8 GB (slightly decreased)
        mock_memory_after_gc.percent = 86.25
        
        # Set up to return different values on consecutive calls
        mock_virtual_memory.side_effect = [
            mock_memory_before_gc,  # Initial check
            mock_memory_before_gc,  # For _run_gc before
            mock_memory_after_gc,   # For _run_gc after
            mock_memory_after_gc    # Final check
        ]
        
        manager = MemoryManager(enable_auto_gc=True)
        
        # Should raise exception because not enough memory even after GC
        with pytest.raises(InsufficientMemoryError):
            manager.ensure_available_memory(3 * 1024**3)  # 3 GB (doesn't fit even after GC)
        
        # Verify GC was called
        assert mock_gc_collect.called
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_calculate_batch_size(self, mock_process, mock_virtual_memory):
        """Test batch size calculation based on item size and available memory."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Mock memory with 4 GB available
        mock_memory = MagicMock()
        mock_memory.total = 16 * 1024**3  # 16 GB
        mock_memory.available = 4 * 1024**3  # 4 GB
        mock_memory.used = 12 * 1024**3  # 12 GB
        mock_memory.percent = 75.0
        mock_virtual_memory.return_value = mock_memory
        
        manager = MemoryManager(
            max_batch_size_bytes=1 * 1024**3,  # 1 GB max
            min_batch_size_bytes=1 * 1024**2   # 1 MB min
        )
        
        # Test with small item size: 1 KB per item
        # Available memory for batch: 4 GB * 0.5 = 2 GB (but max is 1 GB)
        # So usable memory is 1 GB
        # Batch size: 1 GB / 1 KB = 1,048,576 items
        assert manager.calculate_batch_size(1 * 1024) == 1048576
        
        # Test with medium item size: 100 KB per item
        # Batch size: 1 GB / 100 KB = 10,485 items
        assert manager.calculate_batch_size(100 * 1024) == 10485
        
        # Test with large item size: 10 MB per item
        # Batch size: 1 GB / 10 MB = 104 items
        assert manager.calculate_batch_size(10 * 1024 * 1024) == 104
        
        # Test with very large item size: 2 GB per item (larger than max batch)
        # Should always return at least 1 item
        assert manager.calculate_batch_size(2 * 1024**3) == 1
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    def test_adaptive_batch_size(self, mock_process, mock_virtual_memory):
        """Test adaptive batch size adjustment based on processing time and memory."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Create manager
        manager = MemoryManager()
        
        # Test 1: Memory not high, processing faster than target
        # Mock memory with 50% free
        mock_memory_normal = MagicMock()
        mock_memory_normal.total = 16 * 1024**3  # 16 GB
        mock_memory_normal.available = 8 * 1024**3  # 8 GB (50% free)
        mock_memory_normal.used = 8 * 1024**3  # 8 GB
        mock_memory_normal.percent = 50.0
        mock_virtual_memory.return_value = mock_memory_normal
        
        # Current: 1000 items, processing time: 1s (faster than target of 5s)
        # Memory used: 100MB
        new_batch_size = manager.adaptive_batch_size(1000, 1.0, 100 * 1024**2)
        
        # Should increase batch size (target time / actual time * current batch)
        # 5.0 / 1.0 * 1000 = 5000, then * 1.2 memory factor = 6000
        # But limited to double the current batch size (1000 * 2 = 2000)
        assert new_batch_size == 2000
        
        # Test 2: Memory high, processing faster than target
        # Mock memory with 85% used
        mock_memory_high = MagicMock()
        mock_memory_high.total = 16 * 1024**3  # 16 GB
        mock_memory_high.available = 2.4 * 1024**3  # 2.4 GB (15% free)
        mock_memory_high.used = 13.6 * 1024**3  # 13.6 GB
        mock_memory_high.percent = 85.0
        mock_virtual_memory.return_value = mock_memory_high
        
        # Current: 1000 items, processing time: 1s (faster than target of 5s)
        # But memory is high
        new_batch_size = manager.adaptive_batch_size(1000, 1.0, 100 * 1024**2)
        
        # Should increase but reduce due to high memory:
        # 5.0 / 1.0 * 1000 = 5000, then * 0.7 memory factor = 3500
        # But limited to double the current batch size (1000 * 2 = 2000)
        assert new_batch_size == 2000
        
        # Test 3: Memory normal, processing slower than target
        # Mock memory with 50% free again
        mock_virtual_memory.return_value = mock_memory_normal
        
        # Current: 1000 items, processing time: 10s (slower than target of 5s)
        new_batch_size = manager.adaptive_batch_size(1000, 10.0, 100 * 1024**2)
        
        # Should decrease batch size:
        # 5.0 / 10.0 * 1000 = 500, then * 1.2 memory factor = 600
        assert new_batch_size == 600
        
        # Test 4: Zero processing time (avoid division by zero)
        new_batch_size = manager.adaptive_batch_size(1000, 0.0, 100 * 1024**2)
        
        # Should return current batch size unchanged
        assert new_batch_size == 1000
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    @patch('gc.collect')
    def test_run_gc(self, mock_gc_collect, mock_process, mock_virtual_memory):
        """Test the garbage collection method."""
        # Mock process information
        mock_process_instance = MagicMock()
        mock_process_instance.memory_info().rss = 200 * 1024**2  # 200 MB
        mock_process.return_value = mock_process_instance
        
        # Mock memory before GC
        mock_memory_before = MagicMock()
        mock_memory_before.total = 16 * 1024**3  # 16 GB
        mock_memory_before.available = 4 * 1024**3  # 4 GB
        mock_memory_before.used = 12 * 1024**3  # 12 GB
        mock_memory_before.percent = 75.0
        
        # Mock memory after GC with more available memory
        mock_memory_after = MagicMock()
        mock_memory_after.total = 16 * 1024**3  # 16 GB
        mock_memory_after.available = 5 * 1024**3  # 5 GB (1 GB more)
        mock_memory_after.used = 11 * 1024**3  # 11 GB (1 GB less)
        mock_memory_after.percent = 68.75
        
        # Set up consecutive calls
        mock_virtual_memory.side_effect = [mock_memory_before, mock_memory_after]
        
        manager = MemoryManager()
        
        # Run the internal GC method
        manager._run_gc()
        
        # Verify GC was called
        assert mock_gc_collect.called
        
        # Test case where GC doesn't free memory
        mock_virtual_memory.side_effect = [mock_memory_before, mock_memory_before]
        
        manager._run_gc()
        
        # GC should still be called
        assert mock_gc_collect.call_count == 2
    
    @patch('psutil.virtual_memory')
    @patch('psutil.Process')
    @patch('gc.collect')
    @patch('time.time')
    def test_monitor_memory_usage(self, mock_time, mock_gc_collect, mock_process, mock_virtual_memory):
        """Test the memory usage monitoring context manager."""
        # Mock time
        mock_time.side_effect = [100.0, 105.0]  # 5 seconds elapsed
        
        # Mock process information
        mock_process_instance = MagicMock()
        process_mem_before = MagicMock()
        process_mem_before.rss = 200 * 1024**2  # 200 MB
        
        process_mem_after = MagicMock()
        process_mem_after.rss = 250 * 1024**2  # 250 MB
        
        mock_process_instance.memory_info.side_effect = [process_mem_before, process_mem_after]
        mock_process.return_value = mock_process_instance
        
        # Mock memory
        mock_memory_before = MagicMock()
        mock_memory_before.total = 16 * 1024**3  # 16 GB
        mock_memory_before.available = 8 * 1024**3  # 8 GB
        mock_memory_before.used = 8 * 1024**3  # 8 GB
        mock_memory_before.percent = 50.0
        
        mock_memory_after = MagicMock()
        mock_memory_after.total = 16 * 1024**3  # 16 GB
        mock_memory_after.available = 7.5 * 1024**3  # 7.5 GB
        mock_memory_after.used = 8.5 * 1024**3  # 8.5 GB
        mock_memory_after.percent = 53.125
        
        # Set up consecutive calls
        mock_virtual_memory.side_effect = [mock_memory_before, mock_memory_after]
        
        manager = MemoryManager()
        
        # Use the context manager
        with manager.monitor_memory_usage("Test operation"):
            # Do something that increases memory usage
            pass
        
        # Verify stats were checked before and after
        assert mock_virtual_memory.call_count == 2
        assert mock_process_instance.memory_info.call_count == 2
        
        # Test with required_bytes that fits
        mock_virtual_memory.side_effect = [mock_memory_before, mock_memory_after]
        
        with manager.monitor_memory_usage("Test operation with memory check", 1 * 1024**3):
            # Do something requiring 1 GB memory
            pass
        
        # Test with required_bytes that doesn't fit
        mock_virtual_memory.side_effect = [
            # Initial check for ensure_available_memory
            MagicMock(
                total=16 * 1024**3,
                available=1 * 1024**3,  # Only 1 GB available
                used=15 * 1024**3,
                percent=93.75
            )
        ]
        
        with pytest.raises(InsufficientMemoryError):
            with manager.monitor_memory_usage("Test operation with insufficient memory", 2 * 1024**3):
                # Try something requiring 2 GB memory
                pass
        
        # Test auto GC when memory is high
        mock_virtual_memory.side_effect = [
            # Before
            mock_memory_before,
            # After - high memory
            MagicMock(
                total=16 * 1024**3,
                available=1 * 1024**3,
                used=15 * 1024**3,
                percent=93.75
            ),
            # For is_memory_high check
            MagicMock(
                total=16 * 1024**3,
                available=1 * 1024**3,
                used=15 * 1024**3,
                percent=93.75
            ),
            # For _run_gc before
            MagicMock(
                total=16 * 1024**3,
                available=1 * 1024**3,
                used=15 * 1024**3,
                percent=93.75
            ),
            # For _run_gc after
            MagicMock(
                total=16 * 1024**3,
                available=2 * 1024**3,
                used=14 * 1024**3,
                percent=87.5
            )
        ]
        
        # Reset mock calls
        mock_gc_collect.reset_mock()
        
        with manager.monitor_memory_usage("Test operation with auto GC"):
            # Do something that increases memory usage significantly
            pass
        
        # Verify GC was called due to high memory
        assert mock_gc_collect.called


class TestStreamingContext:
    """Tests for the StreamingContext class."""
    
    def test_init_with_defaults(self):
        """Test initialization with default values."""
        context = StreamingContext()
        
        # Verify defaults
        assert isinstance(context.memory_manager, MemoryManager)
        assert context.chunk_size == StreamingContext.DEFAULT_CHUNK_SIZE
        assert context.line_buffer_size == StreamingContext.DEFAULT_LINE_BUFFER
        assert context._open_files == []
    
    @patch.object(MemoryManager, 'refresh_stats')
    def test_adapt_chunk_size(self, mock_refresh_stats):
        """Test adaptation of chunk size based on available memory."""
        # Create a mock memory manager
        memory_manager = MagicMock()
        memory_manager.min_batch_size_bytes = 1 * 1024**2  # 1 MB
        memory_manager.max_batch_size_bytes = 100 * 1024**2  # 100 MB
        
        # Mock the stats
        mock_stats = MagicMock()
        mock_stats.available = 1 * 1024**3  # 1 GB available
        memory_manager.refresh_stats.return_value = mock_stats
        memory_manager.stats = mock_stats
        
        context = StreamingContext(memory_manager=memory_manager)
        
        # Expected: 5% of available memory, capped by max_batch_size
        # 1 GB * 0.05 = 50 MB, which is less than the max 100 MB
        expected_chunk_size = 50 * 1024**2  # 50 MB
        assert context._adapt_chunk_size() == expected_chunk_size
        
        # Test with very little available memory
        mock_stats.available = 10 * 1024**2  # 10 MB available
        
        # Expected: 5% of available memory, but at least min_batch_size
        # 10 MB * 0.05 = 0.5 MB, but min is 1 MB
        expected_chunk_size = 1 * 1024**2  # 1 MB (minimum)
        assert context._adapt_chunk_size() == expected_chunk_size
        
        # Test with lots of available memory
        mock_stats.available = 10 * 1024**3  # 10 GB available
        
        # Expected: 5% of available memory, but at most max_batch_size
        # 10 GB * 0.05 = 500 MB, capped to 100 MB
        expected_chunk_size = 100 * 1024**2  # 100 MB (maximum)
        assert context._adapt_chunk_size() == expected_chunk_size
    
    def test_open_and_close_file(self):
        """Test opening and closing files."""
        context = StreamingContext()
        
        # Create a temporary file for testing
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
            temp_file.write("test content")
            temp_path = temp_file.name
        
        try:
            # Open the file through the context
            file_obj = context.open_file(temp_path, 'r')
            
            # Verify file is registered and readable
            assert file_obj in context._open_files
            assert file_obj.read() == "test content"
            
            # Test that rewind works
            file_obj.seek(0)
            assert file_obj.read() == "test content"
            
            # Close all files
            context.close_all()
            
            # Verify file was closed
            assert file_obj.closed
            assert context._open_files == []
            
            # Test binary mode
            file_obj = context.open_file(temp_path, 'rb')
            assert file_obj in context._open_files
            assert file_obj.read() == b"test content"
            
            # Close again
            context.close_all()
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    def test_open_nonexistent_file(self):
        """Test opening a file that doesn't exist."""
        context = StreamingContext()
        
        with pytest.raises(StreamingIOError):
            context.open_file("/path/to/nonexistent/file.txt")
    
    def test_context_manager(self):
        """Test using StreamingContext as a context manager."""
        # Create a temporary file for testing
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
            temp_file.write("test content")
            temp_path = temp_file.name
        
        try:
            # Use context manager
            with StreamingContext() as context:
                file_obj = context.open_file(temp_path, 'r')
                assert not file_obj.closed
            
            # After exiting context, file should be closed
            assert file_obj.closed
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    def test_stream_binary(self):
        """Test streaming a binary file in chunks."""
        # Create a fake file with repeated data
        test_data = b"0123456789" * 1000  # 10,000 bytes
        
        with tempfile.NamedTemporaryFile(mode='wb', delete=False) as temp_file:
            temp_file.write(test_data)
            temp_path = temp_file.name
        
        try:
            # Define a simple chunk processor
            def chunk_processor(chunk, chunk_num):
                return len(chunk)
            
            # Stream with fixed chunk size of 1000 bytes
            context = StreamingContext(chunk_size=1000)
            
            # Collect results
            results = []
            for chunk, size, chunk_num in context.stream_binary(
                temp_path, chunk_processor, adaptive_chunks=False
            ):
                results.append((len(chunk), size, chunk_num))
            
            # Should get 10 chunks of 1000 bytes each
            assert len(results) == 10
            for i, (chunk_size, reported_size, chunk_num) in enumerate(results):
                assert chunk_size == 1000
                assert reported_size == 1000
                assert chunk_num == i
            
            # Test with smaller chunk size
            context = StreamingContext(chunk_size=500)
            
            # Collect results
            results = []
            for chunk, size, chunk_num in context.stream_binary(
                temp_path, chunk_processor, adaptive_chunks=False
            ):
                results.append((len(chunk), size, chunk_num))
            
            # Should get 20 chunks of 500 bytes each
            assert len(results) == 20
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    def test_stream_binary_error_handling(self):
        """Test error handling in binary streaming."""
        # Create a test file
        test_data = b"0123456789" * 1000  # 10,000 bytes
        
        with tempfile.NamedTemporaryFile(mode='wb', delete=False) as temp_file:
            temp_file.write(test_data)
            temp_path = temp_file.name
        
        try:
            # Define a processor that raises an exception
            def faulty_processor(chunk, chunk_num):
                if chunk_num == 2:
                    raise ValueError("Test exception")
                return len(chunk)
            
            context = StreamingContext(chunk_size=1000)
            
            # Stream should raise an exception on the third chunk
            with pytest.raises(StreamProcessingError):
                for _ in context.stream_binary(temp_path, faulty_processor, adaptive_chunks=False):
                    pass
            
            # Test with invalid mode
            with pytest.raises(ValueError):
                for _ in context.stream_binary(temp_path, faulty_processor, mode='r'):
                    pass
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    def test_stream_text(self):
        """Test streaming a text file in batches of lines."""
        # Create a text file with line numbers
        lines = [f"Line {i}\n" for i in range(1, 101)]  # 100 lines
        
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
            temp_file.writelines(lines)
            temp_path = temp_file.name
        
        try:
            # Define a simple line processor
            def line_processor(lines_batch, batch_num):
                return len(lines_batch)
            
            # Stream with fixed buffer size of 10 lines
            context = StreamingContext(line_buffer_size=10)
            
            # Collect results
            results = []
            for lines_batch, count, batch_num in context.stream_text(
                temp_path, line_processor, adaptive_buffer=False
            ):
                results.append((len(lines_batch), count, batch_num))
            
            # Should get 10 batches of 10 lines each
            assert len(results) == 10
            for i, (batch_size, reported_count, batch_num) in enumerate(results):
                assert batch_size == 10
                assert reported_count == 10
                assert batch_num == i
            
            # Test with smaller buffer size
            context = StreamingContext(line_buffer_size=5)
            
            # Collect results
            results = []
            for lines_batch, count, batch_num in context.stream_text(
                temp_path, line_processor, adaptive_buffer=False
            ):
                results.append((len(lines_batch), count, batch_num))
            
            # Should get 20 batches of 5 lines each
            assert len(results) == 20
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    def test_stream_text_error_handling(self):
        """Test error handling in text streaming."""
        # Create a test file
        lines = [f"Line {i}\n" for i in range(1, 101)]  # 100 lines
        
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
            temp_file.writelines(lines)
            temp_path = temp_file.name
        
        try:
            # Define a processor that raises an exception
            def faulty_processor(lines_batch, batch_num):
                if batch_num == 2:
                    raise ValueError("Test exception")
                return len(lines_batch)
            
            context = StreamingContext(line_buffer_size=10)
            
            # Stream should raise an exception on the third batch
            with pytest.raises(StreamProcessingError):
                for _ in context.stream_text(temp_path, faulty_processor, adaptive_buffer=False):
                    pass
            
            # Test with invalid mode
            with pytest.raises(ValueError):
                for _ in context.stream_text(temp_path, faulty_processor, mode='rb'):
                    pass
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass
    
    @patch.object(MemoryManager, 'refresh_stats')
    def test_adapt_buffer_size(self, mock_refresh_stats):
        """Test adaptation of line buffer size based on available memory."""
        # Create a mock memory manager
        memory_manager = MagicMock()
        
        # Mock the stats
        mock_stats = MagicMock()
        mock_stats.available = 4 * 1024**3  # 4 GB available
        mock_stats.total = 16 * 1024**3  # 16 GB total
        memory_manager.refresh_stats.return_value = mock_stats
        memory_manager.stats = mock_stats
        
        context = StreamingContext(memory_manager=memory_manager, line_buffer_size=1000)
        
        # Expected memory factor: min(1.0, 4GB / (16GB * 0.2)) = min(1.0, 1.25) = 1.0
        # Expected buffer size: 1000 * 1.0 = 1000
        assert context._adapt_buffer_size() == 1000
        
        # Test with less available memory
        mock_stats.available = 1 * 1024**3  # 1 GB available
        
        # Expected memory factor: min(1.0, 1GB / (16GB * 0.2)) = min(1.0, 0.3125) = 0.3125
        # Expected buffer size: 1000 * 0.3125 = 312.5 rounded to 312
        # But minimum buffer size is 100
        expected_buffer_size = 312
        assert context._adapt_buffer_size() == expected_buffer_size
        
        # Test with very little available memory
        mock_stats.available = 0.1 * 1024**3  # 100 MB available
        
        # Expected memory factor: very small
        # But minimum buffer size is 100
        assert context._adapt_buffer_size() == 100  # Minimum buffer size
    
    def test_iterate_collection(self):
        """Test processing a collection in memory-aware batches."""
        # Create a test collection
        collection = list(range(100))
        
        # Define a simple item processor
        def item_processor(batch, batch_num):
            return sum(batch)
        
        # Create a context with controlled batch size
        memory_manager = MagicMock()
        memory_manager.calculate_batch_size.return_value = 10  # Fixed batch size of 10
        memory_manager.adaptive_batch_size.return_value = 10  # Keep same batch size
        
        context = StreamingContext(memory_manager=memory_manager)
        
        # Process the collection
        results = []
        for batch, sum_value, batch_num in context.iterate_collection(
            collection, item_processor, item_size_estimate=8  # 8 bytes per int
        ):
            results.append((len(batch), sum_value, batch_num))
        
        # Should get 10 batches of 10 items each
        assert len(results) == 10
        
        # Check each batch
        for i, (batch_size, sum_value, batch_num) in enumerate(results):
            assert batch_size == 10
            assert batch_num == i
            
            # Calculate expected sum: sum of 10 consecutive numbers starting at i*10
            expected_sum = sum(range(i*10, (i+1)*10))
            assert sum_value == expected_sum
    
    def test_iterate_collection_with_adaptive_batching(self):
        """Test collection iteration with adaptive batch sizing."""
        # Create a test collection
        collection = list(range(1000))
        
        # Define a simple item processor
        def item_processor(batch, batch_num):
            return sum(batch)
        
        # Create a mock memory manager with changing batch sizes
        memory_manager = MagicMock()
        
        # Initial batch size of 100, then increase to 200, then decrease to 50
        memory_manager.calculate_batch_size.return_value = 100
        
        # Change batch size based on batch number
        def adaptive_batch_size(current, time, memory):
            if current == 100:
                return 200  # Double batch size for second batch
            elif current == 200:
                return 50   # Reduce batch size for third batch
            return current  # Keep same size for subsequent batches
        
        memory_manager.adaptive_batch_size.side_effect = adaptive_batch_size
        
        context = StreamingContext(memory_manager=memory_manager)
        
        # Process the collection
        results = []
        for batch, sum_value, batch_num in context.iterate_collection(
            collection, item_processor
        ):
            results.append((len(batch), sum_value, batch_num))
        
        # Verify changing batch sizes
        assert len(results) > 3
        assert results[0][0] == 100  # First batch: 100 items
        assert results[1][0] == 200  # Second batch: 200 items
        assert results[2][0] == 50   # Third batch: 50 items
    
    def test_iterate_collection_error_handling(self):
        """Test error handling in collection iteration."""
        # Create a test collection
        collection = list(range(100))
        
        # Define a processor that raises an exception
        def faulty_processor(batch, batch_num):
            if batch_num == 2:
                raise ValueError("Test exception")
            return sum(batch)
        
        # Create a context with fixed batch size
        memory_manager = MagicMock()
        memory_manager.calculate_batch_size.return_value = 10
        memory_manager.adaptive_batch_size.return_value = 10
        
        context = StreamingContext(memory_manager=memory_manager)
        
        # Iteration should raise an exception on the third batch
        with pytest.raises(StreamProcessingError):
            for _ in context.iterate_collection(collection, faulty_processor):
                pass
        
        # Test with empty collection
        results = list(context.iterate_collection([], faulty_processor))
        assert results == []  # Should return empty generator


class TestIntegration:
    """Integration tests for memory management and streaming."""
    
    def test_simple_end_to_end(self):
        """Test simple end-to-end flow with actual files."""
        # Create a test file
        lines = [f"Line {i}\n" for i in range(1, 1001)]  # 1000 lines
        
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
            temp_file.writelines(lines)
            temp_path = temp_file.name
        
        try:
            # Create memory manager and streaming context
            memory_manager = MemoryManager(
                system_memory_threshold=0.9,
                critical_memory_threshold=0.95,
                target_batch_size_bytes=1 * 1024 * 1024,  # 1 MB
                enable_auto_gc=True
            )
            
            context = StreamingContext(
                memory_manager=memory_manager,
                chunk_size=100 * 1024,  # 100 KB
                line_buffer_size=100    # 100 lines
            )
            
            # Process text file
            line_count = 0
            for batch, count, batch_num in context.stream_text(
                temp_path, 
                lambda lines, batch: len(lines),
                adaptive_buffer=True
            ):
                line_count += count
            
            assert line_count == 1000
            
            # Process a collection with memory awareness
            items = list(range(10000))
            
            total = 0
            for batch, batch_sum, batch_num in context.iterate_collection(
                items,
                lambda batch, batch_num: sum(batch)
            ):
                total += batch_sum
            
            assert total == sum(items)
            
        finally:
            # Clean up
            try:
                os.unlink(temp_path)
            except:
                pass


if __name__ == "__main__":
    pytest.main(["-xvs", __file__])