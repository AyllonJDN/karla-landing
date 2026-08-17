import { useReveal } from '../hooks/useReveal'

export default function NivelIntervencion() {
  const ref = useReveal()

  return (
    <section className="section section-nivel">
      <div className="container">
        <div className="nivel__inner reveal" ref={ref}>
          <h2 className="nivel__title">
            Diferentes momentos requieren diferente profundidad.
          </h2>
          <p className="nivel__subtitle">
            No todas las situaciones necesitan el mismo tipo de acompañamiento.
          </p>
          <div className="nivel__body">
            <p>Hay momentos en que necesitas claridad sobre una decisión específica.</p>
            <p>Hay momentos en que necesitas construir la base de lo que viene.</p>
            <p>Hay momentos en que necesitas dirigir con mayor profundidad un negocio que ya tiene escala.</p>
            <p>Trabajamos desde ahí.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
