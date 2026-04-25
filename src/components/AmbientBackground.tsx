export default function AmbientBackground() {
  return (
    <div className="ambient-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="ambient-grid" />
      <span className="ambient-orb ambient-orb-1" />
      <span className="ambient-orb ambient-orb-2" />
      <span className="ambient-orb ambient-orb-3" />
    </div>
  )
}
