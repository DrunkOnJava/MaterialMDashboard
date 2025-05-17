// Import vi for auto-completion in tests
import { vi, expect, afterEach } from 'vitest';
// Import testing-library
import { cleanup } from '@testing-library/react';
// Import jest-dom matchers
import '@testing-library/jest-dom/vitest';
// Make expect available globally
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
// Import MSW for API mocking
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

// Use `afterEach` to run cleanup after each test
// This prevents tests from affecting each other through leaking state
afterEach(() => {
  cleanup();
});

// Setup basic mock handlers for auth-related endpoints (used by many components)
export const mockHandlers = [
  http.post('/api/auth/login', () => {
    return HttpResponse.json({
      user: {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        roles: ['user'],
      },
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      expiresAt: Date.now() + 15 * 60 * 1000,
    });
  }),

  // Add more mock API handlers as needed
];

// Create an MSW server with the handlers
export const server = setupServer(...mockHandlers);

// Start the server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (important for test isolation)
afterEach(() => server.resetHandlers());

// Close server after all tests
afterAll(() => server.close());

// Export globals for test files to use
export { vi, expect };
