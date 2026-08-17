const CTA_URL = 'https://calendar.app.google/fjyn6SfoawjVWtfW7'

export default function StickyCtaBar({ visible }) {
  return (
    <div className={`sticky-cta${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="cta-btn sticky-cta__btn">
        Reservar espacio con el equipo
      </a>
    </div>
  )
}
