import { useReveal } from '../hooks/useReveal'

export default function Karla() {
  const ref = useReveal()

  return (
    <section className="section section-karla">
      <div className="container">
        <div className="karla__inner reveal" ref={ref}>
          <div className="karla__text-col">
            <h2 className="karla__title">Karla Rodríguez</h2>
            <p className="karla__subtitle">
              Directora Estratégica de creadores y marcas personales.
            </p>
            <div className="karla__body">
              <p>
                Karla trabaja con creadores que ya tienen movimiento y necesitan mayor dirección.
              </p>
              <p>
                Su trabajo no empieza en el contenido.<br />
                Empieza en la pregunta: ¿hacia dónde va esto realmente, y qué hace falta construir para llegar ahí?
              </p>
            </div>
            <div className="karla__matiz-note">
              <p>
                Matiz es la estructura desde la cual esa dirección se convierte en sistemas, equipo, operación y crecimiento.
              </p>
            </div>
          </div>
          {/* Espacio reservado para fotografía editorial — MANUAL REVIEW */}
        </div>
      </div>
    </section>
  )
}
