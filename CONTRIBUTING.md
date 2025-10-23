# Contributing Guide

Guidelines for contributing to the CEO Portfolio Platform. This document outlines the development workflow, code standards, and contribution process to ensure consistent quality and maintainability.

## Development Workflow

### Getting Started

1. **Fork the Repository**
   ```bash
   # Fork the repository on GitHub
   # Clone your fork locally
   git clone https://github.com/your-username/ceo.dev.git
   cd ceo.dev
   ```

2. **Set Up Development Environment**
   ```bash
   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env.local
   # Edit .env.local with development values
   ```

3. **Create Feature Branch**
   ```bash
   # Create and checkout feature branch
   git checkout -b feature/your-feature-name
   ```

### Branch Naming Convention

Use descriptive branch names that clearly indicate the purpose:

```bash
# Feature branches
feature/add-contact-form-validation
feature/improve-responsive-navigation
feature/fix-accessibility-issues

# Bug fix branches
bugfix/correct-typo-in-about-section
bugfix/resolve-form-submission-error

# Documentation branches
docs/update-api-reference
docs/add-component-examples

# Refactor branches
refactor/extract-form-validation-logic
refactor/optimize-bundle-size
```

**Branch Naming Rules:**
- Use lowercase with hyphens as separators
- Start with category prefix: `feature/`, `bugfix/`, `docs/`, `refactor/`
- Include brief description of the change
- Avoid generic names like `fix`, `update`, or `changes`

## Commit Standards

### Commit Message Format

Use conventional commits for consistent commit history:

```bash
# Format: type(scope): description

# Examples
feat(components): add new contact form component
fix(forms): resolve validation error for email field
docs(readme): update installation instructions
refactor(navigation): simplify component structure
perf(images): optimize loading with responsive sizes
style(css): standardize spacing in component files
test(forms): add unit tests for form validation
```

### Commit Types

| Type | Description | Examples |
|------|-------------|----------|
| **feat** | New feature | `feat(auth): add user login system` |
| **fix** | Bug fix | `fix(forms): correct validation error` |
| **docs** | Documentation | `docs(api): update endpoint documentation` |
| **refactor** | Code restructuring | `refactor(layout): simplify component hierarchy` |
| **perf** | Performance improvement | `perf(images): optimize loading strategy` |
| **style** | Code style changes | `style(css): format component styles` |
| **test** | Test additions/modifications | `test(forms): add validation tests` |
| **chore** | Maintenance tasks | `chore(deps): update package dependencies` |

### Commit Guidelines

1. **Atomic Commits**: Each commit should represent a single logical change
2. **Descriptive Messages**: Use imperative mood ("add feature" not "added feature")
3. **Scope**: Include scope when the change affects specific components or features
4. **Line Length**: Keep commit messages under 72 characters for subject line
5. **Body**: Add detailed description for complex changes

```bash
# Good commit message
feat(forms): add email validation with real-time feedback

Add client-side email validation with visual feedback indicators.
Users now see validation errors immediately upon input blur.
Includes comprehensive test coverage for edge cases.

# Poor commit message
update stuff
```

## Code Review Process

### Before Submitting Pull Request

1. **Self-Review Checklist**
   - [ ] Code follows TypeScript and ESLint standards
   - [ ] All tests pass (`npm run lint`)
   - [ ] Responsive design works across breakpoints
   - [ ] Accessibility features are implemented
   - [ ] Performance impact is considered
   - [ ] Documentation is updated if needed

2. **Testing Requirements**
   ```bash
   # Run all checks before submitting
   npm run lint
   npm run build  # Ensure production build works
   ```

3. **Responsive Testing**
   - Test on mobile devices (320px+)
   - Test on tablets (768px+)
   - Test on desktop (1024px+)
   - Verify touch targets meet accessibility standards

### Pull Request Standards

#### PR Title Format
```bash
# Clear, descriptive titles
feat: Add contact form validation with real-time feedback
fix: Resolve responsive layout issues on mobile devices
docs: Update component documentation with usage examples
```

#### PR Description Template
```markdown
## Description
Brief description of the changes and their purpose.

## Changes Made
- Specific change 1
- Specific change 2
- Specific change 3

## Technical Details
Explanation of technical implementation and design decisions.

## Testing
- Tested on mobile devices (320px-768px)
- Tested on tablet (768px-1024px)
- Tested on desktop (1024px+)
- Verified accessibility compliance
- Checked form validation edge cases

## Screenshots
[Before and after screenshots if UI changes are significant]

## Related Issues
Closes #issue-number
```

#### PR Requirements
- **Clear Description**: Explain what was changed and why
- **Technical Context**: Include implementation details for complex changes
- **Testing Evidence**: Document testing approach and results
- **Screenshots**: Include before/after images for UI changes
- **Related Issues**: Link to GitHub issues if applicable

## Review Guidelines

### Code Review Checklist

#### Functionality
- [ ] Feature works as described in requirements
- [ ] No breaking changes to existing functionality
- [ ] Error handling is appropriate and user-friendly
- [ ] Form validation works correctly

#### Code Quality
- [ ] TypeScript types are correct and complete
- [ ] ESLint passes without warnings
- [ ] Code follows project conventions
- [ ] No unused variables or imports
- [ ] Proper error handling and edge cases covered

#### Performance
- [ ] Bundle size impact is acceptable
- [ ] Images are optimized and responsive
- [ ] Animations are performant and respect motion preferences
- [ ] No unnecessary re-renders or API calls

#### Accessibility
- [ ] WCAG 2.1 AA compliance maintained
- [ ] Touch targets are minimum 44px
- [ ] Color contrast meets requirements
- [ ] Keyboard navigation works properly
- [ ] Screen reader compatibility verified

#### Responsive Design
- [ ] Mobile-first approach implemented
- [ ] Consistent spacing and typography scaling
- [ ] Grid layouts work across all breakpoints
- [ ] Touch interactions are optimized for mobile

### Review Process

1. **Initial Review**: Automated checks run on PR creation
2. **Code Review**: Technical review by maintainers
3. **Testing**: Reviewer tests changes locally
4. **Approval**: Minimum one approval required
5. **Merge**: Squash merge for clean commit history

## Quality Standards

### TypeScript Standards
- Use strict typing for all function parameters and return values
- Avoid `any` types; use specific types or generics
- Include proper interface definitions for complex data structures
- Maintain type safety across component props

### Performance Standards
- **Bundle Size**: Monitor impact on JavaScript bundle
- **Core Web Vitals**: Ensure LCP, FID, and CLS remain within good thresholds
- **Image Optimization**: Use Next.js Image component with proper sizing
- **Code Splitting**: Use dynamic imports for non-critical components

### Accessibility Standards
- **WCAG 2.1 AA**: Maintain compliance across all components
- **Touch Targets**: Minimum 44px for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Motion**: Respect `prefers-reduced-motion` settings

### Responsive Design Standards
- **Mobile First**: All components start with mobile layout
- **Breakpoints**: Use standard Tailwind breakpoints consistently
- **Typography**: Scale text appropriately across devices
- **Touch Targets**: Ensure mobile usability

## Communication Guidelines

### Issue Reporting
When creating issues, include:
- **Clear title** describing the problem
- **Detailed description** with steps to reproduce
- **Environment information** (browser, device, screen size)
- **Expected vs actual behavior**
- **Screenshots** when relevant

### Pull Request Comments
- Be constructive and specific in feedback
- Reference line numbers for code suggestions
- Explain the reasoning behind suggestions
- Acknowledge good implementation patterns

### Discussion Etiquette
- Focus on code quality and functionality
- Be respectful in all communications
- Use technical language appropriate for the context
- Provide actionable feedback with clear next steps

## Release Process

### Version Management
- Follow semantic versioning (MAJOR.MINOR.PATCH)
- Update CHANGELOG.md with each release
- Tag releases in GitHub for reference
- Document breaking changes clearly

### Pre-Release Checklist
- [ ] All tests pass
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Performance impact assessed
- [ ] Accessibility verified
- [ ] Responsive design tested

## Support and Questions

For questions about contributing or technical implementation:
1. Review the development guide for architecture details
2. Check existing issues for similar problems
3. Create a detailed issue with reproduction steps
4. Use GitHub discussions for general questions

## License

All contributions are subject to the ISC License terms.

Developed by CEO – Chukwuka Emmanuel Ogugua
