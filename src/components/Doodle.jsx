export default function Doodle({ className = '' }) {
  return (
    <svg
      className={`doodle ${className}`.trim()}
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M4 16 C 60 6, 110 22, 150 12 S 240 4, 296 14" />
    </svg>
  )
}
