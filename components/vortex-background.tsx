"use client"

import { useEffect, useRef } from "react"

export function VortexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const animate = () => {
      time += 0.01

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Create multiple vortex layers
      for (let layer = 0; layer < 3; layer++) {
        const centerX = canvas.offsetWidth / 2
        const centerY = canvas.offsetHeight / 2
        const maxRadius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.6

        for (let i = 0; i < 100; i++) {
          const angle = (i / 100) * Math.PI * 2 + time * (layer + 1) * 0.5
          const radius = (i / 100) * maxRadius
          const spiralAngle = angle + radius * 0.01

          const x = centerX + Math.cos(spiralAngle) * radius
          const y = centerY + Math.sin(spiralAngle) * radius

          const opacity = (1 - i / 100) * 0.3
          const hue = 270 + (i / 100) * 60 + time * 20

          // Ensure radius is positive and within bounds
          const circleRadius = Math.max(0.5, 2 - layer * 0.5)

          ctx.beginPath()
          ctx.arc(x, y, circleRadius, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${opacity})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" style={{ mixBlendMode: "screen" }} />
  )
}
