import { useReveal } from '../hooks/useReveal'
import CTAButton from '../components/CTAButton'
import AuroraBackground from '../components/AuroraBackground'

const SERVICES = [
  {
    label: 'Clarity',
    title: 'Una sesión para ordenar lo que tienes en la cabeza.',
    name: 'Creator Strategy Session',
    body: 'Dos horas de trabajo directo para resolver una decisión, ordenar una situación o definir hacia dónde va tu marca.',
    detail: '2 horas · USD 150',
  },
  {
    label: 'Build',
    title: 'Tres meses para construir la base estratégica de tu marca.',
    name: 'Matiz Creator Strategy',
    body: 'Trabajamos juntos para construir claridad, posicionamiento, sistema y estructura alrededor de lo que estás creando.',
    detail: '3 meses · Precio a consultar',
  },
  {
    label: 'Maximize',
    title: 'Dirección integral para una marca que ya tiene escala.',
    name: 'Creator Business Strategy',
    body: 'Para marcas personales con mayor complejidad: más audiencia, más líneas de negocio, más oportunidades. Dirección estratégica para convertir ese crecimiento en algo más sostenible.',
    detail: '4 meses · Precio a consultar',
  },
]

export default function Servicios() {
  const ref = useReveal()

  return (
    <section className="section section-servicios section-dark-sunset">
      <AuroraBackground variant="dark" />
      <div className="container">
        <span className="tape servicios__eyebrow">Servicios</span>
        <div className="servicios__grid reveal" ref={ref}>
          {SERVICES.map((s) => (
            <div key={s.label} className="service-card">
              <p className="service-card__label">{s.label}</p>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__name">{s.name}</p>
              <p className="service-card__body">{s.body}</p>
              <p className="service-card__detail">{s.detail}</p>
              <CTAButton className="service-card__cta">Reservar espacio con el equipo</CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
