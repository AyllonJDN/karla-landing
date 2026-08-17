import { useReveal } from '../hooks/useReveal'
import AuroraBackground from '../components/AuroraBackground'

const NODES = ['Visión', 'Estrategia', 'Negocio', 'Operación', 'Equipo', 'Crecimiento']

export default function DireccionEstrategica() {
  const ref = useReveal()

  return (
    <section className="section section-direccion section-dark-sunset">
      <AuroraBackground variant="dark" />
      <div className="container">
        <div className="direccion__inner reveal" ref={ref}>
          <span className="tape direccion__eyebrow">Dirección</span>
          <h2 className="direccion__title">
            Karla dirige el negocio detrás de tu marca personal.
          </h2>
          <p className="direccion__subtitle">
            No es una agencia. No es un manager. No es una consultora tradicional.
          </p>
          <div className="direccion__body">
            <p>
              Es tu directora estratégica que trabaja contigo para ordenar visión, estrategia, negocio, operación, equipo y crecimiento.
            </p>

            <div className="mindmap" aria-hidden="true">
              <span className="mindmap__center">Tu marca</span>
              <div className="mindmap__nodes">
                {NODES.map((n, i) => (
                  <span key={n} className={`mindmap__node mindmap__node--${i % 3}`}>
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <p>
              No entra a administrar tu contenido.<br />
              No entra a darte consejos puntuales.
            </p>
            <p>Entra a dirigir.</p>
            <p>
              Eso significa pensar contigo a largo plazo, tomar decisiones con criterio, construir estructura que sostenga el crecimiento y liberar al creador de tener que llevar todo solo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
