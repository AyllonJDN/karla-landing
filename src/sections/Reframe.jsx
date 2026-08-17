import { useReveal } from '../hooks/useReveal'

export default function Reframe() {
  const ref = useReveal()

  return (
    <section className="section section-reframe">
      <div className="container">
        <div className="reframe__inner reveal" ref={ref}>
          <h2 className="reframe__title">
            No es un problema de contenido.<br />
            Es un problema de dirección.
          </h2>
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
