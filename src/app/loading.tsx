export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Animated loading spinner */}
          <div className="w-16 h-16 mx-auto mb-8">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-ceo-500 rounded-full animate-spin"></div>
          </div>

          {/* Pulsing dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-ceo-500 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>

          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Loading...
          </h2>

          <p className="text-slate-600">
            Preparing something amazing for you
          </p>
        </div>
      </div>
    </div>
  )
}
