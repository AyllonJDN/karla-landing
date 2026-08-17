import { useReveal } from '../hooks/useReveal'

export default function Evidencia() {
  const ref = useReveal()

  return (
    <section className="section section-evidencia">
      <div className="container">
        <div className="evidencia__inner reveal" ref={ref}>
          <h2 className="evidencia__title">
            El trabajo habla desde el proceso, no desde los números.
          </h2>
          <p className="evidencia__placeholder">
            Casos reales en construcción.
          </p>
        </div>
      </div>
    </section>
  )
}
