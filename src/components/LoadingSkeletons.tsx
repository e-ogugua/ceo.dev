export function ArticleCardSkeleton() {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-3 bg-slate-700 rounded-full"></div>
        <div className="w-16 h-3 bg-slate-700 rounded-full"></div>
        <div className="w-20 h-3 bg-slate-700 rounded-full"></div>
      </div>
      <div className="w-3/4 h-6 bg-slate-700 rounded mb-2"></div>
      <div className="w-full h-4 bg-slate-700 rounded mb-4"></div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
        <div>
          <div className="w-24 h-4 bg-slate-700 rounded mb-1"></div>
          <div className="w-32 h-3 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export function ArticleListSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <ArticleCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function ArticleContentSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="w-32 h-4 bg-slate-700 rounded mb-4"></div>
        <div className="flex gap-4 mb-4">
          <div className="w-20 h-6 bg-slate-700 rounded-full"></div>
          <div className="w-16 h-6 bg-slate-700 rounded-full"></div>
          <div className="w-24 h-6 bg-slate-700 rounded-full"></div>
        </div>
        <div className="w-full h-12 bg-slate-700 rounded mb-4"></div>
        <div className="w-3/4 h-6 bg-slate-700 rounded mb-8"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
            <div>
              <div className="w-32 h-4 bg-slate-700 rounded mb-1"></div>
              <div className="w-24 h-3 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <div className="space-y-4">
          <div className="w-full h-4 bg-slate-700 rounded"></div>
          <div className="w-full h-4 bg-slate-700 rounded"></div>
          <div className="w-3/4 h-4 bg-slate-700 rounded"></div>
          <div className="w-full h-4 bg-slate-700 rounded"></div>
          <div className="w-5/6 h-4 bg-slate-700 rounded"></div>
          <div className="w-full h-4 bg-slate-700 rounded"></div>
          <div className="w-4/5 h-4 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  )
}
