import { useReveal } from '../hooks/useReveal'
import AuroraBackground from '../components/AuroraBackground'

const TRUTHS = [
  'Contenido genera valor.',
  'La estructura captura valor.',
  'El sistema escala valor.',
]

export default function Tesis() {
  const ref = useReveal()

  return (
    <section className="section section-tesis">
      <AuroraBackground variant="light" />
      <div className="container">
        <div className="reveal" ref={ref}>
          <span className="tape tesis__label">Tres verdades sobre lo que construyes.</span>
          <div className="tesis__truths">
            {TRUTHS.map((truth) => (
              <div key={truth} className="tesis__truth-item">
                <span className="tesis__truth-text">{truth}</span>
              </div>
            ))}
          </div>
          <div className="tesis__body">
            <p>Puedes estar generando mucho valor y capturando poco.<br />
            Puedes tener audiencia y no tener negocio.<br />
            Puedes crecer en número y perder claridad sobre hacia dónde vas.</p>
            <p>La dirección estratégica resuelve eso.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
