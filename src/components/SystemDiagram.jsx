const NODES = [
  { label: 'Visión', x: 18, y: 18 },
  { label: 'Decisiones', x: 84, y: 26 },
  { label: 'Equipo', x: 88, y: 78 },
  { label: 'Estructura', x: 16, y: 82 },
]

export default function SystemDiagram() {
  return (
    <div className="system-diagram" aria-hidden="true">
      <svg className="system-diagram__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        {NODES.map((n) => (
          <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} />
        ))}
      </svg>
      <span className="system-diagram__center">Marca<br />personal</span>
      {NODES.map((n) => (
        <span
          key={n.label}
          className="system-diagram__node"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </span>
      ))}
    </div>
  )
}
