import { useReveal } from '../hooks/useReveal'
import AuroraBackground from '../components/AuroraBackground'

export default function Problema() {
  const ref = useReveal()

  return (
    <section className="section section-problema">
      <AuroraBackground variant="dark" />
      <div className="container">
        <div className="problema__inner reveal" ref={ref}>
          <span className="tape problema__eyebrow">Diagnóstico</span>
          <h2 className="problema__title">
            El crecimiento llega antes que la estructura.
          </h2>
          <p className="problema__subtitle">
            Y en ese punto, todo empieza a depender de ti.
          </p>

          <div className="problema__split">
            <div className="problema__body">
              <p>
                Más oportunidades. Más decisiones. Más personas.<br />
                Más campañas, marcas, negociaciones y proyectos.
              </p>
              <p>Todo eso es bueno.</p>
            </div>
            <p className="problema__quote">
              El problema es cuando toda esa complejidad sigue pasando por una sola persona: <em>tú.</em>
            </p>
          </div>

          <p className="problema__closing">
            No porque no seas capaz.<br />
            Sino porque ningún creador debería ser también el director, el coordinador y el ejecutor de todo al mismo tiempo.
          </p>
        </div>
      </div>
    </section>
  )
}
