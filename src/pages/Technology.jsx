import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { technologies } from '../data/technology'

const colorMap = {
    amber: {
        border: 'border-amber-400/20',
        text: 'text-amber-400',
        bg: 'rgba(251,191,36,0.07)',
        dot: 'bg-amber-400',
        tag: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
        bar: '#fbbf24',
    },
    cosmic: {
        border: 'border-cosmic-400/20',
        text: 'text-cosmic-400',
        bg: 'rgba(96,165,250,0.07)',
        dot: 'bg-cosmic-400',
        tag: 'bg-cosmic-400/10 border-cosmic-400/20 text-cosmic-400',
        bar: '#60a5fa',
    },
    mars: {
        border: 'border-mars-400/20',
        text: 'text-mars-400',
        bg: 'rgba(248,113,113,0.07)',
        dot: 'bg-mars-400',
        tag: 'bg-mars-400/10 border-mars-400/20 text-mars-400',
        bar: '#f87171',
    },
}

function TechCard({ tech, index }) {
    const [open, setOpen] = useState(false)
    const [ref, inView] = useInView()
    const c = colorMap[tech.color]

    return (
        <div
            ref={ref}
            className={`glass rounded-xl border ${c.border} overflow-hidden flex flex-col transition-all duration-700`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${(index % 3) * 100}ms`,
            }}
        >
            <div className="h-0.5 w-full" style={{ background: c.bar, opacity: 0.5 }} />

            <div className="p-6 flex flex-col gap-4 flex-1">

                <div className="flex items-start justify-between">
                    <span className="text-4xl">{tech.icon}</span>
                    <span className={`label-mono text-[9px] px-2 py-1 rounded-full border ${c.tag}`}>
                        {tech.tagline}
                    </span>
                </div>

                <h3
                    className={`font-bold ${c.text}`}
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}
                >
                    {tech.name}
                </h3>

                <p className="text-star-400 text-sm leading-relaxed">{tech.intro}</p>

                <div className="grid grid-cols-2 gap-2">
                    {tech.specs.map(s => (
                        <div key={s.label} className="rounded-lg p-3" style={{ background: c.bg }}>
                            <p className="label-mono text-[9px] text-star-600 mb-1">{s.label}</p>
                            <p className={`text-xs font-bold ${c.text}`} style={{ fontFamily: 'Space Mono, monospace' }}>
                                {s.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: open ? '200px' : '0' }}
                >
                    <div className="pt-4 border-t border-white/[0.06]">
                        <p className="label-mono text-[9px] text-star-600 mb-3">Key milestones</p>
                        <div className="flex flex-wrap gap-2">
                            {tech.milestones.map((m, i) => (
                                <span key={i} className={`label-mono text-[9px] px-2 py-1 rounded-full border ${c.tag}`}>
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className={`label-mono text-[9px] ${c.text} hover:opacity-70 transition-opacity flex items-center gap-1 mt-auto pt-2`}
                >
                    {open ? 'Hide milestones ↑' : 'Show milestones ↓'}
                </button>

            </div>
        </div>
    )
}

export default function Technology() {
    return (
        <main className="relative z-10 px-6 md:px-16 lg:px-28">

            <section className="pt-36 pb-16">
                <p className="label-mono mb-4">The Machines</p>
                <h1
                    className="text-star-100 mb-4"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900 }}
                >
                    Space
                    <span className="text-gradient-amber"> Technology</span>
                </h1>
                <p className="text-star-400 text-lg max-w-xl">
                    Rockets, satellites, rovers, stations, telescopes — the engineering
                    marvels that make exploration possible.
                </p>
            </section>

            <section className="pb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, i) => (
                        <TechCard key={tech.id} tech={tech} index={i} />
                    ))}
                </div>
            </section>

        </main>
    )
}