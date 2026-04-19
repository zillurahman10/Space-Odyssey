import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { missions } from '../data/missions'

const colorMap = {
  amber:  {
    border: 'border-amber-400/20',
    text:   'text-amber-400',
    bg:     'rgba(251,191,36,0.08)',
    dot:    'bg-amber-400',
    tag:    'bg-amber-400/10 border-amber-400/20 text-amber-400',
    bar:    '#fbbf24',
  },
  cosmic: {
    border: 'border-cosmic-400/20',
    text:   'text-cosmic-400',
    bg:     'rgba(96,165,250,0.08)',
    dot:    'bg-cosmic-400',
    tag:    'bg-cosmic-400/10 border-cosmic-400/20 text-cosmic-400',
    bar:    '#60a5fa',
  },
  mars: {
    border: 'border-mars-400/20',
    text:   'text-mars-400',
    bg:     'rgba(248,113,113,0.08)',
    dot:    'bg-mars-400',
    tag:    'bg-mars-400/10 border-mars-400/20 text-mars-400',
    bar:    '#f87171',
  },
}

const statusStyle = {
  Active:   'bg-amber-400/10 border-amber-400/30 text-amber-400',
  Complete: 'bg-white/5 border-white/10 text-star-400',
}

function MissionCard({ mission, index }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView()
  const c = colorMap[mission.color]

  return (
    <div
      ref={ref}
      className={`glass rounded-xl border ${c.border} overflow-hidden flex flex-col transition-all duration-700`}
      style={{
        opacity:         inView ? 1 : 0,
        transform:       inView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${(index % 3) * 100}ms`,
      }}
    >
      <div className="h-0.5 w-full" style={{ background: c.bar, opacity: 0.5 }} />

      <div className="p-6 flex flex-col gap-4 flex-1">

        <div className="flex items-start justify-between">
          <span className="text-4xl">{mission.icon}</span>
          <div className="flex flex-col items-end gap-2">
            <span className={`label-mono text-[9px] px-2 py-1 rounded-full border ${statusStyle[mission.status]}`}>
              {mission.status}
            </span>
            <span className="label-mono text-[9px] text-star-600">{mission.year}</span>
          </div>
        </div>

        <div>
          <p className="label-mono text-[9px] text-star-600 mb-1">{mission.agency} · {mission.type}</p>
          <h3
            className={`font-bold mb-1 ${c.text}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}
          >
            {mission.name}
          </h3>
        </div>

        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${c.tag}`}>
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
          <span className="label-mono text-[9px]">{mission.highlight}</span>
        </div>

        <p className="text-star-400 text-sm leading-relaxed">{mission.description}</p>

        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: expanded ? '400px' : '0' }}
        >
          <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-4">
            <div>
              <p className="label-mono text-[9px] text-star-600 mb-1">Legacy</p>
              <p className="text-star-300 text-sm leading-relaxed">{mission.legacy}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3" style={{ background: c.bg }}>
                <p className="label-mono text-[9px] text-star-600 mb-1">Destination</p>
                <p className={`text-xs font-bold ${c.text}`}>{mission.destination}</p>
              </div>
              <div className="rounded-lg p-3" style={{ background: c.bg }}>
                <p className="label-mono text-[9px] text-star-600 mb-1">Duration</p>
                <p className={`text-xs font-bold ${c.text}`}>{mission.duration}</p>
              </div>
            </div>

            {mission.crew.length > 0 && (
              <div className="rounded-lg p-3" style={{ background: c.bg }}>
                <p className="label-mono text-[9px] text-star-600 mb-2">Crew</p>
                <div className="flex flex-wrap gap-2">
                  {mission.crew.map(name => (
                    <span
                      key={name}
                      className={`label-mono text-[9px] px-2 py-1 rounded-full border ${c.tag}`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`label-mono text-[9px] ${c.text} hover:opacity-70 transition-opacity flex items-center gap-1 mt-auto pt-2`}
        >
          {expanded ? 'Show less ↑' : 'Mission details ↓'}
        </button>

      </div>
    </div>
  )
}

export default function Missions() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Active', 'Complete']

  const filtered = filter === 'All' ? missions : missions.filter(m => m.status === filter)

  return (
    <main className="relative z-10 px-6 md:px-16 lg:px-28">

      <section className="pt-36 pb-16">
        <p className="label-mono mb-4">Landmark Voyages</p>
        <h1
          className="text-star-100 mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900 }}
        >
          Historic
          <span className="text-gradient-amber"> Missions</span>
        </h1>
        <p className="text-star-400 text-lg max-w-xl">
          The flights, landings, and odysseys that wrote the first chapters
          of our spacefaring story.
        </p>

        <div className="flex gap-3 mt-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="label-mono text-[10px] px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                background:  filter === f ? 'rgba(251,191,36,0.12)' : 'transparent',
                borderColor: filter === f ? 'rgba(251,191,36,0.4)'  : 'rgba(255,255,255,0.08)',
                color:       filter === f ? '#fbbf24'                : '#475569',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mission, i) => (
            <MissionCard key={mission.id} mission={mission} index={i} />
          ))}
        </div>
      </section>

    </main>
  )
}