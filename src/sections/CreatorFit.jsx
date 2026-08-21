import { useReveal } from '../hooks/useReveal'
import CTAButton from '../components/CTAButton'

export default function CreatorFit() {
  const ref = useReveal()

  return (
    <section className="section section-creator-fit">
      <div className="container">
        <div className="creator-fit__inner reveal" ref={ref}>
          <span className="tape tape--coral creator-fit__label">Creator Fit — 15 minutos</span>
          <h2 className="creator-fit__title">
            ¿Es este el momento adecuado para trabajar juntos?
          </h2>
          <div className="creator-fit__body">
            <p>Antes de cualquier propuesta, tenemos una conversación breve.</p>
            <p>
              Queremos entender tu contexto, tu momento y lo que necesitas.<br />
              Y ser honestos sobre si existe un siguiente paso que tenga sentido para los dos.
            </p>
            <p>
              No es una asesoría.<br />
              No es un diagnóstico.<br />
              Es una conversación de encaje.
            </p>
          </div>
          <CTAButton>Reserva tu espacio</CTAButton>
        </div>
      </div>
    </section>
  )
}
