export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img
              src="/logos/logo-matiz-provisional.jpg"
              alt="Matiz"
              className="footer__logo"
            />
            <p className="footer__tagline">
              Dirección Estratégica para creadores y marcas personales.
            </p>
          </div>
          <div>
            <p className="footer__legal">
              Karla Rodríguez / Matiz<br />
              <span style={{ opacity: 0.5 }}>Aviso de privacidad · Términos</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
