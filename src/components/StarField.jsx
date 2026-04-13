import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const stars = []

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function init() {
      stars.length = 0
      for (let i = 0; i < 280; i++) {
        stars.push({
          x:            Math.random() * canvas.width,
          y:            Math.random() * canvas.height,
          r:            Math.random() * 1.5 + 0.2,
          speed:        Math.random() * 0.05 + 0.01,
          opacity:      Math.random(),
          twinkle:      Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.twinkle += s.twinkleSpeed
        const op = s.opacity * (0.4 + 0.6 * Math.sin(s.twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${op})`
        ctx.fill()
        if (s.r > 1.1) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147,197,253,${op * 0.06})`
          ctx.fill()
        }
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }
      })
      animId = requestAnimationFrame(draw)
    }

    resize(); init(); draw()
    window.addEventListener('resize', () => { resize(); init() })
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}