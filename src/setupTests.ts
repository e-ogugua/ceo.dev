import '@testing-library/jest-dom'

// Basic setup for testing environment
// Next.js specific mocks will be added to individual test files as needed

// Mock environment variables for testing
process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
