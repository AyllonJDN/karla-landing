const CTA_URL = 'https://agendalo.io/karlarodriguez/-quick-meeting'

export default function StickyCtaBar({ visible }) {
  return (
    <div className={`sticky-cta${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="cta-btn sticky-cta__btn">
        Reserva tu espacio
      </a>
    </div>
  )
}
