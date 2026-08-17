import CTAButton from '../components/CTAButton'
import Doodle from '../components/Doodle'

const TITLE_LINES = [
  ['Tu', 'marca', 'creció.'],
  ['El', 'negocio', 'detrás', ['todavía', 'no.']],
]

export default function Hero({ ctaRef }) {
  let wordIndex = 0

  return (
    <section className="section section-hero">
      <span className="hero__bg-wordmark">Matiz</span>
      <div className="hero__bg-blob" aria-hidden="true" />
      <div className="container">
        <div className="hero__inner">
          <span className="tape hero__eyebrow">Dirección Estratégica</span>

          <h1 className="hero-title">
            {TITLE_LINES.map((line, li) => (
              <span key={li} className="hero-title-line">
                {line.map((item, wi) => {
                  const words = Array.isArray(item) ? item : [item]
                  const isAccentGroup = li === 1 && wi === line.length - 1
                  return (
                    <span
                      key={wi}
                      className={`hero-word-group${isAccentGroup ? ' doodle-wrap' : ''}`}
                    >
                      {words.map((word, gi) => {
                        const delay = wordIndex++ * 0.06
                        return (
                          <span key={gi}>
                            <span
                              className="hero-word"
                              style={{ animationDelay: `${delay}s` }}
                            >
                              {word}
                            </span>
                            {gi < words.length - 1 && ' '}
                          </span>
                        )
                      })}
                      {isAccentGroup && <Doodle className="doodle-visible" />}
                      {wi < line.length - 1 && ' '}
                    </span>
                  )
                })}
              </span>
            ))}
          </h1>

          <p className="hero__subtitle">
            Karla Rodríguez trabaja con creadores y marcas personales para dirigir lo que el contenido por sí solo no puede sostener.
          </p>

          <div className="hero__meta">
            <div ref={ctaRef}>
              <CTAButton>Reservar espacio con el equipo</CTAButton>
            </div>
            <span className="hero__meta-note">una conversación de 15 min</span>
          </div>
        </div>
      </div>
    </section>
  )
}
