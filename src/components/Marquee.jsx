const ITEMS = [
  'Dirección Estratégica',
  'Creators & Marcas Personales',
  'Matiz',
  'Creator Economy',
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((g) => (
          <div className="marquee__group" key={g}>
            {ITEMS.map((item) => (
              <span className="marquee__item" key={item}>
                {item} <span className="marquee__dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
