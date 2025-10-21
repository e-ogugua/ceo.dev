# Post-Deploy Checklist

This document outlines the steps to validate the application after deployment and ensure all systems are working correctly.

## Environment Variables Setup

### Required Environment Variables

Set the following environment variables in your deployment platform (Vercel/Netlify/etc.):

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Configuration (SMTP)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM_EMAIL=noreply@yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_TRACKING_ID=GA_MEASUREMENT_ID

# Optional: Error Monitoring
SENTRY_DSN=your_sentry_dsn
```

### Environment Variable Validation

1. **Check Environment Variables Exist**:
   ```bash
   # In production console/logs
   console.log('Environment check:', {
     hasSupabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
     hasEmail: !!process.env.SMTP_HOST,
     nodeEnv: process.env.NODE_ENV
   })
   ```

2. **Test Database Connection**:
   - Verify Supabase connection works
   - Check if tables exist and are accessible
   - Validate API routes return expected data

## Deployment Validation

### Build Verification
```bash
# Check build completed successfully
npm run build

# Verify no build errors or warnings
npm run build 2>&1 | grep -v "warn"
```

### Static Asset Check
- Verify all images are accessible
- Check CSS/JS bundles load correctly
- Validate font loading
- Confirm favicon and metadata

## Email System Validation

### SMTP Configuration Test
1. **Test Email Sending**:
   ```typescript
   // Test email functionality
   import { sendEmail } from '@/lib/email'

   await sendEmail({
     to: 'test@example.com',
     subject: 'Deployment Test',
     html: '<p>Deployment successful!</p>'
   })
   ```

2. **Email Queue Check**:
   - Verify email queue processes correctly
   - Check fallback mechanisms work
   - Validate retry logic

3. **Email Templates**:
   - Test all email templates render correctly
   - Verify unsubscribe links work
   - Check responsive design

## Database and API Validation

### Supabase Connection
```typescript
// Test database operations
import { supabase } from '@/lib/supabase'

const { data, error } = await supabase
  .from('articles')
  .select('*')
  .limit(1)

if (error) {
  console.error('Database connection failed:', error)
}
```

### API Routes Testing
- Test all API endpoints return 200 status
- Verify data serialization works
- Check error handling
- Validate rate limiting

## Content and SEO Validation

### Article/Blog Content
- Verify all articles load correctly
- Check content formatting and styling
- Validate social sharing works
- Test search functionality

### SEO Elements
- Check meta tags are present
- Verify Open Graph tags
- Validate structured data
- Test sitemap generation

## Performance Validation

### Core Web Vitals
1. **Run Lighthouse**:
   ```bash
   lighthouse https://yourdomain.com --view
   ```

2. **Target Scores**:
   - Performance: > 90
   - Accessibility: > 95
   - Best Practices: > 95
   - SEO: > 95

### Bundle Analysis
```bash
# Run bundle analysis on production
ANALYZE=true npm run build
```

### Network Performance
- Check Time to First Byte (TTFB) < 200ms
- Verify compression is enabled
- Check cache headers are set correctly
- Validate CDN configuration

## Error Monitoring Setup

### Error Tracking
1. **Verify Error Monitoring**:
   - Check Sentry/Rollbar integration
   - Verify error reports are sent
   - Test error boundaries work

2. **Error Logging**:
   ```typescript
   // Check error logging works
   console.error('Test error for monitoring')
   throw new Error('Test error')
   ```

## Security Validation

### HTTPS and Security Headers
- Verify HTTPS is enforced
- Check security headers are set
- Validate CSP (Content Security Policy)
- Test HSTS headers

### Authentication
- Verify login/logout flows work
- Check session management
- Validate password reset functionality
- Test role-based access

## Monitoring and Logging

### Application Monitoring
1. **Set up Monitoring**:
   - Configure uptime monitoring
   - Set up performance monitoring
   - Enable error alerting

2. **Log Aggregation**:
   - Verify logs are collected
   - Check log levels are appropriate
   - Validate log retention policies

## User Experience Testing

### Cross-Browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Verify mobile responsiveness
- Check touch interactions work
- Validate dark/light mode switching

### Accessibility Testing
- Run axe-core accessibility tests
- Check keyboard navigation
- Verify screen reader compatibility
- Test high contrast mode

## Backup and Recovery

### Database Backups
- Verify automated backups are running
- Test backup restoration process
- Check backup retention policies

### Application Backups
- Verify code backups exist
- Check configuration backups
- Validate deployment rollback capability

## Documentation Updates

### Update Documentation
- Update API documentation
- Refresh deployment guides
- Update troubleshooting guides
- Add new feature documentation

## Rollback Plan

### Emergency Rollback
1. **Have Rollback Plan Ready**:
   - Document rollback steps
   - Test rollback procedure
   - Have previous version ready for deployment

2. **Rollback Checklist**:
   - [ ] Database backups verified
   - [ ] Previous version tested
   - [ ] Rollback command documented
   - [ ] Team notified of rollback

## Post-Deployment Monitoring

### First 24 Hours
- Monitor error rates
- Check performance metrics
- Verify user engagement
- Watch for security issues

### Weekly Checks
- Review performance trends
- Check error logs
- Validate backup integrity
- Update dependencies if needed

## Success Metrics

### Define Success Criteria
- **Uptime**: > 99.9%
- **Performance**: Core Web Vitals in green
- **Error Rate**: < 0.1%
- **User Satisfaction**: Positive feedback

## Emergency Contacts

### Team Contacts
- **Dev Lead**: [Name] - [Contact]
- **Ops Lead**: [Name] - [Contact]
- **Security**: [Name] - [Contact]

### External Services
- **Domain Registrar**: [Contact Info]
- **CDN Provider**: [Contact Info]
- **Database Provider**: [Contact Info]

## Troubleshooting Common Issues

### Common Post-Deploy Issues

1. **Environment Variables Missing**
   - Check deployment platform settings
   - Verify variable names match exactly
   - Test with placeholder values first

2. **Database Connection Issues**
   - Verify connection strings
   - Check firewall settings
   - Validate database permissions

3. **Email Delivery Problems**
   - Check SMTP credentials
   - Verify SPF/DKIM records
   - Test with different email providers

4. **Performance Degradation**
   - Check bundle sizes
   - Verify CDN configuration
   - Check database query performance

5. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies installed
   - Check for TypeScript errors

## Next Steps After Deployment

1. **Monitor Initial Traffic** (First hour)
2. **Test Critical User Flows** (First day)
3. **Gather User Feedback** (First week)
4. **Plan Next Release** (Ongoing)

## Maintenance Schedule

### Regular Tasks
- **Daily**: Monitor errors and performance
- **Weekly**: Review analytics and feedback
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Full performance audit

Remember: Deployment is just the beginning. Continuous monitoring and improvement are key to a successful application.
