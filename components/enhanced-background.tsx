"use client"

import { useEffect, useRef } from "react"

export function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Dynamic grid that responds to mouse
      const gridSize = 50
      const cols = Math.ceil(canvas.offsetWidth / gridSize)
      const rows = Math.ceil(canvas.offsetHeight / gridSize)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          // Distance from mouse
          const dx = mouseX - x
          const dy = mouseY - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200

          if (distance < maxDistance) {
            const intensity = 1 - distance / maxDistance
            const wave = Math.sin(time * 2 + distance * 0.01) * intensity

            // Ensure radius is always positive
            const circleRadius = Math.max(0.5, 1 + wave * 2)

            ctx.beginPath()
            ctx.arc(x, y, circleRadius, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${270 + wave * 30}, 70%, 60%, ${intensity * 0.3})`
            ctx.fill()
          }
        }
      }

      // Floating orbs with bounds checking
      for (let i = 0; i < 5; i++) {
        const orbX = canvas.offsetWidth * 0.2 + Math.sin(time + i) * 100
        const orbY = canvas.offsetHeight * 0.3 + Math.cos(time * 0.7 + i) * 80
        const baseSize = 20 + Math.sin(time * 2 + i) * 10

        // Ensure size is always positive
        const size = Math.max(5, baseSize)

        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, size)
        gradient.addColorStop(0, `hsla(${270 + i * 20}, 70%, 60%, 0.1)`)
        gradient.addColorStop(1, `hsla(${270 + i * 20}, 70%, 60%, 0)`)

        ctx.beginPath()
        ctx.arc(orbX, orbY, size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
