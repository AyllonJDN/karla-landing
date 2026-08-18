const ITEMS = [
  {
    src: '/images/gallery/iceberg.jpg',
    title: 'El contenido es la punta del iceberg',
  },
  {
    src: '/images/gallery/techo.jpg',
    title: 'Crear contenido tiene un techo',
  },
  {
    src: '/images/gallery/manager-agente.jpg',
    title: 'Diferencias entre manager y agente',
  },
  {
    src: '/images/gallery/luzu.jpg',
    title: 'No somos TV y América — ¿de rivales a socios?',
  },
  {
    src: '/images/gallery/no-somos-tv.jpg',
    title: 'No somos TV hace historia en la televisión peruana',
  },
]

function handleSpotlight(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function ContentGallery() {
  return (
    <div className="gallery">
      {ITEMS.map((item) => (
        <a
          key={item.src}
          className="gallery__item"
          href="https://www.instagram.com/karlarodrik/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleSpotlight}
        >
          <img src={item.src} alt={item.title} loading="lazy" />
          <span className="gallery__glow" aria-hidden="true" />
          <span className="gallery__caption">{item.title}</span>
        </a>
      ))}
    </div>
  )
}
