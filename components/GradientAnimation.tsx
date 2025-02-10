"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const GradientAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    const colorTransition = (t: number) => {
      const r = Math.sin(0.3 * t) * 30 + 100
      const g = Math.sin(0.3 * t + 2) * 30 + 100
      const b = Math.sin(0.3 * t + 4) * 30 + 100
      return `rgb(${r}, ${g}, ${b})`
    }

    const lines: { offset: number; speed: number; amplitude: number; wavelength: number }[] = []
    for (let i = 0; i < 5; i++) {
      lines.push({
        offset: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        amplitude: 50 + Math.random() * 50,
        wavelength: 0.001 + Math.random() * 0.002,
      })
    }

    let time = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line, index) => {
        ctx.beginPath()

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = Math.sin((x + line.offset) * line.wavelength + time) * line.amplitude + canvas.height / 2
          ctx.lineTo(x, y)
        }

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, colorTransition(time + index))
        gradient.addColorStop(1, colorTransition(time + index + 2))

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        line.offset += line.speed
      })

      time += 0.005
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const calculateBlur = () => {
    const viewportHeight = window.innerHeight
    const whyChooseUsSection = document.querySelector("#why-choose-us")
    if (!whyChooseUsSection) return 2 // Add a slight blur (2px) even when the section is not found

    const sectionTop = whyChooseUsSection.getBoundingClientRect().top
    const scrollProgress = Math.max(0, (viewportHeight - sectionTop) / viewportHeight)

    // Start with a slight blur (2px) and increase it as we scroll
    const initialBlur = 2
    const maxBlur = 15

    // Rapid increase to 80% blur when "Why Choose Us" section is reached
    if (scrollProgress > 0) {
      return Math.min(maxBlur, initialBlur + (maxBlur - initialBlur) * scrollProgress)
    }

    // Slight blur in the first section
    return initialBlur
  }

  const blurAmount = calculateBlur()

  return (
    <div className="fixed inset-0 z-[-1]" style={{ zIndex: -1 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: "filter 0.3s ease-out", // Smooth transition for blur changes
        }}
      />
    </div>
  )
}

export default GradientAnimation

