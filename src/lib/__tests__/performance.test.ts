import { reportWebVitals, initializeWebVitals, measurePerformance, logBundleSize } from '../performance'
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals'

// Mock web-vitals
jest.mock('web-vitals', () => ({
  onCLS: jest.fn(),
  onFCP: jest.fn(),
  onLCP: jest.fn(),
  onTTFB: jest.fn(),
}))

// Mock gtag
Object.defineProperty(window, 'gtag', {
  value: jest.fn(),
  writable: true,
})

describe('Performance Utilities', () => {
  const originalEnv = process.env.NODE_ENV

  beforeEach(() => {
    jest.clearAllMocks()
    // Mock console methods
    jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
    // Restore original environment
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: originalEnv,
      writable: true,
    })
  })

  describe('reportWebVitals', () => {
    it('logs web vitals in development', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      })

      const mockMetric: any = {
        name: 'CLS',
        value: 0.1,
        id: 'v3-123',
      }

      reportWebVitals(mockMetric)

      expect(console.log).toHaveBeenCalledWith('Web Vitals:', mockMetric)
    })

    it('sends web vitals to analytics in production', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      })

      const mockMetric: any = {
        name: 'LCP',
        value: 2500,
        id: 'v3-456',
      }

      reportWebVitals(mockMetric)

      expect((window as any).gtag).toHaveBeenCalledWith('event', 'LCP', {
        value: 2500,
        event_category: 'Web Vitals',
        event_label: 'v3-456',
        non_interaction: true,
      })
    })

    it('handles missing gtag gracefully', () => {
      // Remove gtag mock
      delete (window as any).gtag

      const mockMetric: any = {
        name: 'FCP',
        value: 1800,
        id: 'v3-789',
      }

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      })

      // Should not throw error
      expect(() => reportWebVitals(mockMetric)).not.toThrow()
    })
  })

  describe('initializeWebVitals', () => {
    it('initializes web vitals reporting', () => {
      initializeWebVitals()

      expect(onCLS).toHaveBeenCalled()
      expect(onFCP).toHaveBeenCalled()
      expect(onLCP).toHaveBeenCalled()
      expect(onTTFB).toHaveBeenCalled()
    })

    it('does not initialize in server environment', () => {
      // Mock window as undefined (server environment)
      const originalWindow = global.window
      delete (global as any).window

      initializeWebVitals()

      expect(onCLS).not.toHaveBeenCalled()
      expect(onFCP).not.toHaveBeenCalled()
      expect(onLCP).not.toHaveBeenCalled()
      expect(onTTFB).not.toHaveBeenCalled()

      // Restore window
      global.window = originalWindow
    })
  })

  describe('measurePerformance', () => {
    beforeEach(() => {
      // Mock performance API
      Object.defineProperty(window, 'performance', {
        value: {
          now: jest.fn().mockReturnValue(100),
        },
        writable: true,
      })
    })

    it('measures synchronous function performance', () => {
      const testFunction = jest.fn()
      measurePerformance('test-operation', testFunction)

      expect(testFunction).toHaveBeenCalled()
      expect(console.log).toHaveBeenCalledWith('test-operation took 0 milliseconds')
    })

    it('measures asynchronous function performance', async () => {
      const asyncFunction = jest.fn().mockResolvedValue('result')
      const promise = measurePerformance('async-operation', asyncFunction)

      await promise

      expect(asyncFunction).toHaveBeenCalled()
      expect(console.log).toHaveBeenCalledWith('async-operation took 0 milliseconds')
    })

    it('executes function in server environment', () => {
      // Mock window as undefined (server environment)
      const originalWindow = global.window
      delete (global as any).window

      const testFunction = jest.fn()
      measurePerformance('server-operation', testFunction)

      expect(testFunction).toHaveBeenCalled()

      // Restore window
      global.window = originalWindow
    })
  })

  describe('logBundleSize', () => {
    it('logs bundle analysis message in development', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      })

      logBundleSize()

      expect(console.log).toHaveBeenCalledWith('Bundle analysis should be run with: npm run analyze')
    })

    it('does not log in production', () => {
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      })

      logBundleSize()

      expect(console.log).not.toHaveBeenCalled()
    })

    it('does not log in server environment', () => {
      const originalWindow = global.window
      delete (global as any).window

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      })

      logBundleSize()

      expect(console.log).not.toHaveBeenCalled()

      // Restore window
      global.window = originalWindow
    })
  })
})
