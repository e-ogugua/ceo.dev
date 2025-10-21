import { onCLS, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric)
  }

  // Send to analytics service (replace with your analytics endpoint)
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
    if (gtag) {
      gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }
  }
}

export function initializeWebVitals() {
  if (typeof window !== 'undefined') {
    // Initialize web vitals reporting
    onCLS(reportWebVitals)
    onFCP(reportWebVitals)
    onLCP(reportWebVitals)
    onTTFB(reportWebVitals)
  }
}

// Performance monitoring utilities
export function measurePerformance(name: string, fn: () => void | Promise<void>) {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now()
    const result = fn()
    if (result instanceof Promise) {
      return result.finally(() => {
        const end = performance.now()
        console.log(`${name} took ${end - start} milliseconds`)
      })
    } else {
      const end = performance.now()
      console.log(`${name} took ${end - start} milliseconds`)
    }
  } else {
    return fn()
  }
}

// Bundle size monitoring (for development)
export function logBundleSize() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // This would typically be called after bundle analysis
    console.log('Bundle analysis should be run with: npm run analyze')
  }
}
