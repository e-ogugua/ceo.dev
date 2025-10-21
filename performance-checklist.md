# Performance Checklist

This document outlines the steps to measure and validate performance improvements for the CEO Portfolio website.

## Bundle Analysis

### Run Bundle Analyzer
```bash
npm run analyze
```

This generates a bundle analysis report that shows the largest modules and dependencies. Look for:
- Large third-party libraries that could be lazy-loaded
- Duplicate dependencies
- Unused code that can be tree-shaken

### Bundle Size Goals
- **Main bundle**: < 200KB (gzipped)
- **Vendor bundle**: < 150KB (gzipped)
- **Total JS**: < 500KB (gzipped)

## Core Web Vitals

### Measuring Web Vitals
The application automatically collects Core Web Vitals metrics. In development:
1. Open browser DevTools
2. Go to Console tab
3. Look for "Web Vitals:" logs

### Target Scores
- **LCP (Largest Contentful Paint)**: < 2.5s (Good)
- **FID (First Input Delay)**: < 100ms (Good)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good)

### Manual Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run Lighthouse on local build
lighthouse http://localhost:3000 --view

# Or use Chrome DevTools Lighthouse tab
```

## Performance Testing Commands

### Build Performance
```bash
# Time the build process
time npm run build

# Check for build warnings/errors
npm run build 2>&1 | grep -E "(warn|error|Warning|Error)"
```

### Runtime Performance
```bash
# Start development server
npm run dev

# Use Chrome DevTools Performance tab to record:
# 1. Page load performance
# 2. Component render times
# 3. Network requests
# 4. JavaScript execution
```

### Memory Usage
```bash
# Monitor memory usage in Chrome DevTools:
# 1. Go to Memory tab
# 2. Take heap snapshot before/after interactions
# 3. Look for memory leaks in long-running sessions
```

## Image Optimization

### Check Image Formats
```bash
# Verify next/image is used for all images
grep -r "next/image" src/ --include="*.tsx" --include="*.jsx"

# Check for missing width/height attributes
grep -r "<img" src/ --include="*.tsx" --include="*.jsx"
```

### Image Performance Goals
- All images use `next/image` component
- Images have proper `width` and `height` props
- Above-the-fold images use `priority` prop
- Large images use `placeholder="blur"`
- Modern formats (WebP, AVIF) are served

## Code Splitting

### Check Dynamic Imports
```bash
# Find dynamic imports
grep -r "dynamic(" src/ --include="*.tsx" --include="*.jsx"

# Verify loading components exist
find src/components -name "*Loading*" -o -name "*Skeleton*"
```

### Code Splitting Goals
- Heavy components use `next/dynamic`
- Loading skeletons provided for slow components
- Third-party libraries lazy-loaded when possible

## Network Performance

### Check Network Tab
1. Open Chrome DevTools Network tab
2. Load pages and check:
   - First Contentful Paint (FCP)
   - DOM Content Loaded
   - Load Complete
   - Request waterfall

### Network Goals
- Critical CSS inlined or < 50KB
- JavaScript bundles < 200KB initial
- Images properly optimized and cached
- API calls batched where possible

## Database Performance

### Supabase Queries
```typescript
// Check for N+1 queries
// Look for multiple sequential database calls

// Optimize with:
const optimizedQuery = await supabase
  .from('table')
  .select('field1, field2, related_table(*)')
  .limit(10)
```

## Monitoring Setup

### Production Monitoring
1. Set up error tracking (Sentry, LogRocket)
2. Monitor Core Web Vitals in production
3. Track performance regressions
4. Alert on performance degradation

### Performance Budgets
- Bundle size increases < 5% per release
- LCP degradation < 10%
- Image file sizes < 100KB per image

## Continuous Improvement

### Regular Audits
- Run bundle analysis monthly
- Lighthouse audit quarterly
- Performance regression testing before releases
- User experience testing sessions

### Performance Metrics to Track
1. **Build Time**: Total build duration
2. **Bundle Sizes**: Main/vendor/chunk sizes
3. **Runtime Performance**: LCP, FID, CLS scores
4. **User Experience**: Bounce rate, session duration
5. **Resource Usage**: Memory, CPU usage patterns

## Troubleshooting Common Issues

### Large Bundle Sizes
1. Check for duplicate dependencies
2. Verify tree-shaking is working
3. Look for unused imports
4. Consider code splitting opportunities

### Slow Page Loads
1. Check image optimization
2. Verify lazy loading implementation
3. Look for blocking scripts
4. Check caching headers

### Poor Core Web Vitals
1. Optimize Largest Contentful Paint
2. Reduce JavaScript execution time
3. Fix layout shifts
4. Improve interactivity

## Tools and Resources

- **Bundle Analyzer**: `@next/bundle-analyzer`
- **Lighthouse**: Chrome DevTools or CLI
- **Web Vitals**: `web-vitals` library
- **Performance Monitoring**: Browser DevTools
- **Image Optimization**: `next/image` component

## Next Steps

1. Set up automated performance monitoring
2. Implement performance budgets in CI/CD
3. Create performance regression tests
4. Establish performance SLAs with stakeholders
