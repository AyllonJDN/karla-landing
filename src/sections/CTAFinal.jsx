import { useReveal } from '../hooks/useReveal'
import CTAButton from '../components/CTAButton'

export default function CTAFinal() {
  const ref = useReveal()

  return (
    <section className="section section-cta-final">
      <div className="container">
        <div className="reveal" ref={ref}>
          <h2 className="cta-final__title">
            Si llegaste hasta aquí, probablemente ya sabes qué falta.
          </h2>
          <p className="cta-final__subtitle">
            El primer paso es una conversación de 15 minutos.
          </p>
          <CTAButton>Reservar espacio con el equipo</CTAButton>
        </div>
      </div>
    </section>
  )
}
