import { useReveal } from '../hooks/useReveal'

export default function Reframe() {
  const ref = useReveal()

  return (
    <section className="section section-reframe">
      <div className="container">
        <div className="reframe__inner reveal" ref={ref}>
          <span className="tape tape--coral reframe__eyebrow">Reframe</span>

          <div className="reframe__split">
            <p className="reframe__no">No es un problema de contenido.</p>
            <span className="reframe__arrow" aria-hidden="true">→</span>
            <p className="reframe__yes">Es un problema de dirección.</p>
          </div>

          <div className="reframe__body">
            <p>Producir más no resuelve el fondo.<br />
            Contratar a alguien tampoco, si no hay dirección clara detrás.</p>
            <p>
              Lo que falta no es más ejecución.<br />
              Es alguien que dirija el negocio que tu marca personal ya es, o que está en camino de ser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
