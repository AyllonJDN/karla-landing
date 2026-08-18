import SocialLinks from './SocialLinks'

const VIDEO_URL = 'https://youtu.be/u2YZBAEhLzE'

export default function KarlaVideoCard() {
  return (
    <div className="karla-video">
      <a
        href={VIDEO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="karla-video__cover"
        aria-label="Ver el podcast: ¿De qué sirve ser influencer si no tienes un negocio?"
      >
        <img
          src="/images/gallery/podcast-cover.jpg"
          alt="Karla Rodríguez en podcast: ¿De qué sirve ser influencer si no tienes un negocio?"
          loading="lazy"
        />
        <span className="karla-video__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </a>

      <div className="karla-video__meta">
        <span className="tape karla-video__tag">Conoce a Karla</span>
        <p className="karla-video__title">
          Un podcast sobre creator economy y las estrategias detrás de una marca personal.
        </p>
        <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="karla-video__link">
          Ver en YouTube →
        </a>
        <SocialLinks className="karla-video__socials" />
      </div>
    </div>
  )
}
