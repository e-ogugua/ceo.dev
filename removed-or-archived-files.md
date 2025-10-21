# Removed or Archived Files

This document tracks files that have been moved to the `archive/` folder during the refactoring process. These files can be restored if needed.

## Archived Files

No files have been moved to the archive folder yet. During this refactoring process, we focused on:

1. **Externalizing hardcoded content** from components to JSON files
2. **Optimizing configuration** files
3. **Adding new utility files** for better code organization

## Future Archive Candidates

The following types of files may be candidates for archiving in future refactoring phases:

### Unused Dependencies
- Old package versions in `node_modules` (handled by package manager)
- Unused development dependencies

### Build Artifacts
- `.next/` folder (auto-generated during builds)
- `dist/` folder (if using different build system)
- `build/` folder (legacy build outputs)

### Temporary Files
- `*.log` files (application logs)
- `*.tmp` files (temporary files)
- `coverage/` folder (test coverage reports)

### Documentation Files
- `CHANGELOG.md` (if outdated)
- `CONTRIBUTING.md` (if project structure changed significantly)

## Archive Restoration Process

To restore archived files:

1. **Check Archive Location**:
   ```bash
   ls -la archive/
   ```

2. **Restore Specific File**:
   ```bash
   # Move file back to original location
   mv archive/filename.ext src/components/filename.ext

   # Or copy if you want to keep archived version
   cp archive/filename.ext src/components/filename.ext
   ```

3. **Verify Restoration**:
   - Check file permissions
   - Verify imports still work
   - Run tests if applicable

4. **Update Documentation**:
   - Remove from this archived files list
   - Update any references in documentation

## Archive Management Policy

### When to Archive
- Files no longer referenced in codebase
- Unused configuration files
- Outdated documentation
- Temporary or cache files

### When NOT to Archive
- Source code files (components, utilities, pages)
- Active configuration files
- Current documentation
- Test files

### Archive Organization
```
archive/
├── unused-components/
├── old-configs/
├── deprecated-docs/
└── temp-files/
```

## Files NOT Archived (Intentionally Kept)

The following files were considered but kept for the following reasons:

### `src/components/ArticleContent.tsx`
- **Reason**: Refactored to use external data, still actively used
- **Size**: Reduced from ~51KB to ~8KB after refactoring

### `src/components/BlogPostContent.tsx`
- **Reason**: Refactored to use external data, still actively used
- **Size**: Reduced from ~36KB to ~8KB after refactoring

### `next.config.js`
- **Reason**: Enhanced with performance optimizations, still required
- **Changes**: Added bundle analyzer, improved image optimization

### `package.json`
- **Reason**: Updated with new scripts and dependencies, still required
- **Changes**: Added bundle analyzer script, updated dependencies

## Performance Impact

### Before Refactoring
- **ArticleContent.tsx**: 51,740 bytes (51KB)
- **BlogPostContent.tsx**: 36,674 bytes (36KB)
- **Total Component Size**: ~88KB of hardcoded content

### After Refactoring
- **ArticleContent.tsx**: ~8KB (uses external data)
- **BlogPostContent.tsx**: ~8KB (uses external data)
- **New JSON Files**: ~15KB total
- **New Utility Files**: ~3KB total
- **Net Reduction**: ~62KB of inline code

## Benefits of Current Approach

1. **Maintainability**: Content separated from presentation logic
2. **Performance**: Smaller initial bundle sizes
3. **SEO**: Content can be statically generated
4. **Flexibility**: Easy to add CMS integration later
5. **Developer Experience**: Clear separation of concerns

## Future Considerations

In future refactoring phases, consider archiving:

1. **Test Files**: If moving to different testing framework
2. **Old Components**: If completely replaced by new implementations
3. **Legacy Configuration**: If using new build tools
4. **Outdated Documentation**: If creating new docs from scratch

## Archive Changelog

### v1.0.0 - Initial Refactoring (Current)
- **Date**: October 2025
- **Changes**: Externalized hardcoded content to JSON files
- **Files Affected**: ArticleContent.tsx, BlogPostContent.tsx
- **Size Reduction**: ~62KB of inline code moved to external files

### Future Versions
- Track additional archiving activities here
- Document reasons for archiving
- Note any breaking changes

## Questions for Future Review

1. **Content Management**: Should we implement a CMS for article management?
2. **Build Optimization**: Can we further reduce bundle sizes?
3. **Component Splitting**: Should we split more large components?
4. **Archive Strategy**: What's our long-term archive management strategy?

This document will be updated as the refactoring process continues and more files are identified for archiving.
