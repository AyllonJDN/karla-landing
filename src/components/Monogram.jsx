export default function Monogram({ className = '' }) {
  return (
    <span className={`monogram ${className}`.trim()} aria-hidden="true">
      Mz
    </span>
  )
}
