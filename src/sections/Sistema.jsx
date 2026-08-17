import { useReveal } from '../hooks/useReveal'
import SystemDiagram from '../components/SystemDiagram'
import AuroraBackground from '../components/AuroraBackground'

export default function Sistema() {
  const ref = useReveal()

  return (
    <section className="section section-sistema">
      <AuroraBackground variant="light" />
      <div className="container">
        <div className="sistema__inner reveal" ref={ref}>
          <div className="sistema__grid">
            <div className="sistema__text-col">
              <h2 className="sistema__title">
                Una marca personal es un sistema.<br />
                La mayoría la opera como si fuera solo una persona.
              </h2>
              <div className="sistema__body">
                <p>
                  Detrás de cada marca personal que funciona bien hay algo más que talento y constancia.
                </p>
                <p>
                  Hay visión definida.<br />
                  Hay decisiones alineadas.<br />
                  Hay estructura que funciona sin que el creador esté presente en cada detalle.
                </p>
                <p>
                  Eso no ocurre solo.<br />
                  Alguien lo tiene que dirigir.
                </p>
              </div>
            </div>
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
