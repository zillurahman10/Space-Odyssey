import { useState, useMemo } from 'react'
import { useInView } from '../hooks/useInView'
import { timelineEvents, eras } from '../data/timeline'

const colorMap = {
  amber:  {
    dot:    'bg-amber-400',
    border: 'border-amber-400/25',
    text:   'text-amber-400',
    tag:    'bg-amber-400/10 border-amber-400/20 text-amber-400',
    glow:   '0 0 20px rgba(251,191,36,0.4)',
  },
  cosmic: {
    dot:    'bg-cosmic-400',
    border: 'border-cosmic-400/25',
    text:   'text-cosmic-400',
    tag:    'bg-cosmic-400/10 border-cosmic-400/20 text-cosmic-400',
    glow:   '0 0 20px rgba(96,165,250,0.4)',
  },
  mars: {
    dot:    'bg-mars-400',
    border: 'border-mars-400/25',
    text:   'text-mars-400',
    tag:    'bg-mars-400/10 border-mars-400/20 text-mars-400',
    glow:   '0 0 20px rgba(248,113,113,0.4)',
  },
}

function EventCard({ event, side }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView()
  const c = colorMap[event.color]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${side === 'right' ? 'lg:text-right' : ''}`}
    >
      <div
        className={`glass rounded-xl border ${c.border} p-5 cursor-pointer hover:bg-white/[0.02] transition-all duration-300`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={`flex items-center gap-2 mb-3 ${side === 'right' ? 'lg:justify-end' : ''}`}>
          <span className="label-mono text-[9px] text-star-600">{event.date}</span>
          <span>{event.flag}</span>
          <span className={`label-mono text-[9px] px-2 py-0.5 rounded-full border ${c.tag}`}>
            {event.category}
          </span>
        </div>

        <p className={`label-mono text-[10px] mb-1 ${c.text}`}>{event.year}</p>
        <h3
          className="text-star-100 font-bold mb-3 hover:text-amber-400 transition-colors"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem' }}
        >
          {event.title}
        </h3>

        <p className="text-star-400 text-sm leading-relaxed">{event.summary}</p>

        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: expanded ? '300px' : '0' }}
        >
          <div className={`mt-4 pt-4 border-t border-white/[0.06]`}>
            <p className="text-star-300 text-sm leading-relaxed mb-3">{event.detail}</p>
            <div className={`flex items-center gap-2 ${side === 'right' ? 'lg:justify-end' : ''}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              <span className={`label-mono text-[9px] ${c.text}`}>{event.significance}</span>
            </div>
          </div>
        </div>

        <button className={`mt-3 label-mono text-[9px] text-star-600 hover:text-amber-400 transition-colors ${side === 'right' ? 'lg:w-full lg:text-right' : ''}`}>
          {expanded ? 'show less ↑' : 'read more ↓'}
        </button>
      </div>
    </div>
  )
}

function TimelineRow({ event, index }) {
  const [dotRef, dotInView] = useInView()
  const c = colorMap[event.color]
  const isLeft = index % 2 === 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] gap-0 mb-8">

      <div className="lg:pr-8 pb-4 lg:pb-0">
        {isLeft && <EventCard event={event} side="left" />}
      </div>

      <div className="hidden lg:flex flex-col items-center">
        <div
          ref={dotRef}
          className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-void z-10 transition-all duration-500 mt-6`}
          style={{ boxShadow: dotInView ? c.glow : 'none' }}
        />
        <div className="w-px flex-1 bg-white/[0.06] mt-1" />
      </div>

      <div className="lg:pl-8">
        {!isLeft && <EventCard event={event} side="right" />}
        {isLeft && <div className="lg:hidden"><EventCard event={event} side="left" /></div>}
      </div>

    </div>
  )
}

export default function Timeline() {
  const [activeEra, setActiveEra]      = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'human', 'satellite', 'rover', 'probe', 'station', 'telescope', 'rocket', 'biology']

  const filtered = useMemo(() => timelineEvents.filter(e => {
    const eraMatch = activeEra === 'All' || e.era === activeEra
    const catMatch = activeCategory === 'All' || e.category === activeCategory
    return eraMatch && catMatch
  }), [activeEra, activeCategory])

  return (
    <main className="relative z-10 px-6 md:px-16 lg:px-28">

      <section className="pt-36 pb-16">
        <p className="label-mono mb-4">From Sputnik to Starship</p>
        <h1
          className="text-star-100 mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900 }}
        >
          Space Technology
          <span className="text-gradient-amber"> Timeline</span>
        </h1>
        <p className="text-star-400 text-lg max-w-xl">
          Seven decades of breakthroughs — click any event to read the full story.
        </p>
        <p className="label-mono text-[10px] text-star-600 mt-4">
          {filtered.length} event{filtered.length !== 1 ? 's' : ''} shown
        </p>
      </section>

      <div
        className="sticky top-16 z-30 py-4 -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-28 lg:px-28 mb-12"
        style={{ background: 'rgba(5,5,8,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="label-mono text-[9px] text-star-600 mr-1">Era:</span>
          {['All', ...eras].map(era => (
            <button
              key={era}
              onClick={() => setActiveEra(era)}
              className="label-mono text-[9px] px-3 py-1.5 rounded-full border transition-all duration-200"
              style={{
                background:   activeEra === era ? 'rgba(251,191,36,0.12)' : 'transparent',
                borderColor:  activeEra === era ? 'rgba(251,191,36,0.4)'  : 'rgba(255,255,255,0.08)',
                color:        activeEra === era ? '#fbbf24'                : '#475569',
              }}
            >
              {era}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="label-mono text-[9px] text-star-600 mr-1">Type:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="label-mono text-[9px] px-3 py-1.5 rounded-full border transition-all duration-200"
              style={{
                background:  activeCategory === cat ? 'rgba(96,165,250,0.12)' : 'transparent',
                borderColor: activeCategory === cat ? 'rgba(96,165,250,0.4)'  : 'rgba(255,255,255,0.08)',
                color:       activeCategory === cat ? '#60a5fa'                : '#475569',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="pb-28 relative">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="label-mono text-star-600">No events match those filters.</p>
          </div>
        ) : (
          filtered.map((event, i) => (
            <TimelineRow key={event.id} event={event} index={i} />
          ))
        )}
      </section>

    </main>
  )
}