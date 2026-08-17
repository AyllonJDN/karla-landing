import { useEffect, useRef } from 'react'

const PALETTE_LIGHT = ['#f47358', '#a9bdf0', '#857b4a']
const PALETTE_DARK = ['#ffb199', '#c4d3f7', '#fffaf5']

export default function AuroraBackground({ variant = 'light' }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const section = wrap.parentElement
    if (!section) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let particles = []
    let raf = null
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const rect = section.getBoundingClientRect()
      canvas.width = Math.max(1, rect.width * dpr)
      canvas.height = Math.max(1, rect.height * dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const palette = variant === 'dark' ? PALETTE_DARK : PALETTE_LIGHT

    function spawn(x, y) {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.35,
          life: 0,
          maxLife: 38 + Math.random() * 26,
          size: 1.4 + Math.random() * 2.4,
          color: palette[Math.floor(Math.random() * palette.length)],
        })
      }
      if (particles.length > 160) particles = particles.slice(-160)
    }

    let lastSpawn = 0
    function onMove(e) {
      const now = performance.now()
      if (now - lastSpawn < 24) return
      lastSpawn = now
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return
      spawn(x, y)
    }

    if (!reduceMotion) {
      section.addEventListener('mousemove', onMove)
    }

    function tick() {
      const rect = section.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      particles.forEach((p) => {
        p.life += 1
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.012
        const t = p.life / p.maxLife
        const alpha = Math.max(0, 1 - t)
        ctx.save()
        ctx.globalAlpha = alpha * 0.9
        ctx.shadowBlur = 12
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (1 - t * 0.35), 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      particles = particles.filter((p) => p.life < p.maxLife)
      raf = requestAnimationFrame(tick)
    }

    if (!reduceMotion) {
      raf = requestAnimationFrame(tick)
    }

    return () => {
      window.removeEventListener('resize', resize)
      section.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [variant])

  return (
    <div className={`aurora-bg aurora-bg--${variant}`} ref={wrapRef} aria-hidden="true">
      <span className="aurora-bg__blob aurora-bg__blob--a" />
      <span className="aurora-bg__blob aurora-bg__blob--b" />
      <span className="aurora-bg__blob aurora-bg__blob--c" />
      <canvas className="aurora-bg__canvas" ref={canvasRef} />
    </div>
  )
}
