"use client"

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Hexagonal Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon
              points="50,1 85,25 85,62 50,86 15,62 15,25"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      {/* Floating Geometric Shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-500/20 rotate-12 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
    </div>
  )
}
