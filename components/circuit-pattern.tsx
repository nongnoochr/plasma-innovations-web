"use client"

export function CircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Circuit Lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none">
          <path d="M100,100 L300,100 L300,200 L500,200 L500,300 L700,300" />
          <path d="M200,150 L400,150 L400,250 L600,250 L600,350 L800,350" />
          <path d="M150,50 L350,50 L350,150 L550,150 L550,250 L750,250" />
          <path d="M50,200 L250,200 L250,300 L450,300 L450,400 L650,400" />
        </g>

        {/* Circuit Nodes */}
        <g fill="url(#circuitGradient)">
          <circle cx="100" cy="100" r="3" />
          <circle cx="300" cy="200" r="3" />
          <circle cx="500" cy="300" r="3" />
          <circle cx="700" cy="300" r="3" />
          <circle cx="400" cy="150" r="3" />
          <circle cx="600" cy="250" r="3" />
        </g>
      </svg>
    </div>
  )
}
