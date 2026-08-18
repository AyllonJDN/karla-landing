import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import StickyCtaBar from './components/StickyCtaBar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import Problema from './sections/Problema'
import Reframe from './sections/Reframe'
import Tesis from './sections/Tesis'
import DireccionEstrategica from './sections/DireccionEstrategica'
import Sistema from './sections/Sistema'
import NivelIntervencion from './sections/NivelIntervencion'
import Servicios from './sections/Servicios'
import Comparador from './sections/Comparador'
import Karla from './sections/Karla'
import Contenido from './sections/Contenido'
import CreatorFit from './sections/CreatorFit'
import CTAFinal from './sections/CTAFinal'
import Footer from './sections/Footer'

export default function App() {
  const [heroCtaOutOfView, setHeroCtaOutOfView] = useState(false)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    const el = heroCtaRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setHeroCtaOutOfView(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar hideCta={heroCtaOutOfView} />
      <main>
        <Hero ctaRef={heroCtaRef} />
        <Marquee />
        <Problema />
        <Reframe />
        <Tesis />
        <DireccionEstrategica />
        <Sistema />
        <NivelIntervencion />
        <Servicios />
        <Comparador />
        <Karla />
        <Contenido />
        <CreatorFit />
        <CTAFinal />
        <Footer />
      </main>
      <StickyCtaBar visible={heroCtaOutOfView} />
    </>
  )
}
