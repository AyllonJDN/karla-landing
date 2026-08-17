const CTA_URL = 'https://calendar.app.google/fjyn6SfoawjVWtfW7'

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
