import CTAButton from '../components/CTAButton'

const TITLE_LINES = [
  ['Tu', 'marca', 'creció.'],
  ['El', 'negocio', 'detrás', ['todavía', 'no.']],
]

export default function Hero({ ctaRef }) {
  let wordIndex = 0

  return (
    <section className="section section-hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero-title">
            {TITLE_LINES.map((line, li) => (
              <span key={li} className="hero-title-line">
                {line.map((item, wi) => {
                  const words = Array.isArray(item) ? item : [item]
                  return (
                    <span key={wi} className="hero-word-group">
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

          <div ref={ctaRef}>
            <CTAButton>Reservar espacio con el equipo</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
