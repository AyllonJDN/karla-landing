import { useReveal } from '../hooks/useReveal'

const NO_ITEMS = [
  'No es lo mismo que contratar a alguien para producir contenido.',
  'No es lo mismo que tener un manager que negocia contratos.',
  'No es lo mismo que recibir asesoría puntual.',
]

export default function Comparador() {
  const ref = useReveal()

  return (
    <section className="section section-comparador">
      <div className="container">
        <div className="comparador__inner reveal" ref={ref}>
          <h2 className="comparador__title">
            ¿Qué hace diferente la dirección estratégica?
          </h2>
          <div className="comparador__no-list">
            {NO_ITEMS.map((item) => (
              <span key={item} className="comparador__no-item">{item}</span>
            ))}
          </div>
          <div className="comparador__body">
            <p>
              La dirección estratégica trabaja en el nivel donde se toman las decisiones que definen hacia dónde va todo lo demás.
            </p>
            <p>
              Eso incluye: qué construyes, cómo lo posicionas, qué estructura necesitas, qué oportunidades priorizas y cómo haces que el negocio funcione sin depender completamente de ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
