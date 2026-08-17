import { useReveal } from '../hooks/useReveal'

export default function DireccionEstrategica() {
  const ref = useReveal()

  return (
    <section className="section section-direccion">
      <div className="container">
        <div className="direccion__inner reveal" ref={ref}>
          <h2 className="direccion__title">
            Karla dirige el negocio detrás de tu marca personal.
          </h2>
          <p className="direccion__subtitle">
            No es una agencia. No es un manager. No es una consultora tradicional.
          </p>
          <div className="direccion__body">
            <p>
              Karla trabaja contigo para ordenar visión, estrategia, negocio, operación, equipo y crecimiento.
            </p>
            <p>
              No entra a administrar tu contenido.<br />
              No entra a darte consejos puntuales.
            </p>
            <p>Entra a dirigir.</p>
            <p>
              Eso significa pensar contigo a largo plazo, tomar decisiones con criterio, construir estructura que sostenga el crecimiento y liberar al creador de tener que llevar todo solo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
