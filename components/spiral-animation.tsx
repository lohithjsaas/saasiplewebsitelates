"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const SpiralAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const color = (x: number, y: number, r: number, g: number, b: number) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
      ctx.fillRect(x, y, 1, 1)
    }

    const R = (x: number, y: number, time: number) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time))
    }

    const G = (x: number, y: number, time: number) => {
      return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300))
    }

    const B = (x: number, y: number, time: number) => {
      return Math.floor(
        192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100),
      )
    }

    const animationLoop = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          color(x, y, R(x, y, time), G(x, y, time), B(x, y, time))
        }
      }
      time += 0.02
      requestAnimationFrame(animationLoop)
    }

    animationLoop()

    return () => {
      // Cleanup
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-50" />
}

export default SpiralAnimation

