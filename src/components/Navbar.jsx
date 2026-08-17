import CTAButton from './CTAButton'

export default function Navbar({ hideCta }) {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__inner">
        <a href="/" aria-label="Matiz — Inicio" className="navbar__brand">
          <img
            src="/logos/logo-matiz-provisional.png"
            alt="Matiz"
            className="navbar__logo"
          />
        </a>
        <div className={`navbar__cta${hideCta ? ' hidden' : ''}`}>
          <CTAButton>Reservar espacio con el equipo</CTAButton>
        </div>
      </div>
    </nav>
  )
}
