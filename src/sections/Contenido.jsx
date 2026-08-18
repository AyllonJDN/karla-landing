import { useReveal } from '../hooks/useReveal'
import AuroraBackground from '../components/AuroraBackground'
import ContentGallery from '../components/ContentGallery'

export default function Contenido() {
  const ref = useReveal()

  return (
    <section className="section section-contenido">
      <AuroraBackground variant="light" />
      <div className="container">
        <div className="contenido__header reveal" ref={ref}>
          <span className="tape contenido__eyebrow">Contenido</span>
          <h2 className="contenido__title">
            La dirección también se construye frente a cámara.
          </h2>
          <p className="contenido__subtitle">
            Algunas piezas de Karla como creadora — la misma mirada estratégica, aplicada a su propia marca.
          </p>
        </div>
        <ContentGallery />
      </div>
    </section>
  )
}
