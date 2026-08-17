import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const [active, setActive] = useState(false)
  const raf = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const elRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!raf.current) {
        raf.current = requestAnimationFrame(() => {
          if (elRef.current) {
            elRef.current.style.setProperty('--gx', `${target.current.x}px`)
            elRef.current.style.setProperty('--gy', `${target.current.y}px`)
          }
          raf.current = null
        })
      }
      if (!active) setActive(true)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`cursor-glow${active ? ' active' : ''}`} aria-hidden="true" ref={elRef}>
      <div className="cursor-glow__blob" />
    </div>
  )
}
