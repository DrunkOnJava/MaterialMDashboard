#!/bin/bash

# Script to install git hooks

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Make the hook files executable
chmod +x .github/hooks/pre-commit

# Create symlinks to the git hooks directory
ln -sf ../../.github/hooks/pre-commit .git/hooks/pre-commit

echo "Git hooks installed successfully!"