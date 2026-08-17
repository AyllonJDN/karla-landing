import { useReveal } from '../hooks/useReveal'

export default function Problema() {
  const ref = useReveal()

  return (
    <section className="section section-problema">
      <div className="container">
        <div className="problema__inner reveal" ref={ref}>
          <h2 className="problema__title">
            El crecimiento llega antes que la estructura.
          </h2>
          <p className="problema__subtitle">
            Y en ese punto, todo empieza a depender de ti.
          </p>
          <div className="problema__body">
            <p>
              Más oportunidades. Más decisiones. Más personas.<br />
              Más campañas, marcas, negociaciones y proyectos.
            </p>
            <p>Todo eso es bueno.</p>
            <p>
              El problema es cuando toda esa complejidad sigue pasando por una sola persona: tú.
            </p>
            <p>
              No porque no seas capaz.<br />
              Sino porque ningún creador debería ser también el director, el coordinador y el ejecutor de todo al mismo tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
