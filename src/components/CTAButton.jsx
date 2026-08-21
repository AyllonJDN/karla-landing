const CTA_URL = 'https://agendalo.io/karlarodriguez/-quick-meeting'

export default function CTAButton({ href = CTA_URL, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn ${className}`.trim()}
    >
      {children}
    </a>
  )
}
