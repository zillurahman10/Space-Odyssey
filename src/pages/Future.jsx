import { useInView } from '../hooks/useInView'

const futures = [
    {
        id: 'moon',
        icon: '🌕',
        horizon: '2026–2030',
        title: 'Return to the Moon',
        subtitle: 'Artemis Program',
        color: 'amber',
        status: 'In progress',
        body: 'NASA\'s Artemis program aims to land the first woman and first person of colour on the Moon, then establish a permanent lunar base — the Gateway station in lunar orbit.',
        why: 'The Moon is 3 days away. It\'s where we learn to live off-world before attempting the 9-month voyage to Mars.',
        who: 'NASA, ESA, JAXA, SpaceX, Blue Origin',
    },
    {
        id: 'mars',
        icon: '🔴',
        horizon: '2030–2040',
        title: 'Humans on Mars',
        subtitle: 'The next giant leap',
        color: 'mars',
        status: 'Planned',
        body: 'SpaceX\'s Starship is designed specifically for Mars — a fully reusable methane-fuelled rocket that can be refuelled using Martian CO₂ and water ice.',
        why: 'Mars is the only other potentially habitable planet in the solar system. Becoming multi-planetary is the ultimate insurance for civilisation.',
        who: 'SpaceX, NASA, China National Space Administration',
    },
    {
        id: 'stations',
        icon: '🏗️',
        horizon: '2028–2035',
        title: 'Commercial Space Stations',
        subtitle: 'After the ISS',
        color: 'cosmic',
        status: 'In development',
        body: 'The ISS retires around 2030. NASA is funding commercial replacements — Axiom Space, Starlab, and Orbital Reef — designed as orbital labs, hotels, and manufacturing facilities.',
        why: 'Low Earth orbit is becoming a commercial zone serving pharmaceutical research, materials science, and space tourism.',
        who: 'Axiom Space, Blue Origin, Nanoracks',
    },
    {
        id: 'telescope',
        icon: '🔭',
        horizon: '2027–2040',
        title: 'Next-Gen Telescopes',
        subtitle: 'Roman, LISA & beyond',
        color: 'amber',
        status: 'In development',
        body: 'NASA\'s Nancy Grace Roman Space Telescope will survey the sky 1,000x faster than Hubble. ESA\'s LISA will detect gravitational waves from space.',
        why: 'Finding life beyond Earth requires telescopes capable of analysing exoplanet atmospheres for biosignatures.',
        who: 'NASA, ESA, international consortia',
    },
    {
        id: 'mining',
        icon: '⛏️',
        horizon: '2030–2050',
        title: 'Asteroid Mining',
        subtitle: 'Resources beyond Earth',
        color: 'cosmic',
        status: 'Early stage',
        body: 'Near-Earth asteroids contain more platinum and nickel than humanity has ever mined. Lunar ice could supply water, oxygen, and hydrogen fuel for deep space missions.',
        why: 'Space resources remove the environmental burden of mining from Earth and supply in-situ propellant for deep space.',
        who: 'Astroforge, TransAstra, ispace',
    },
    {
        id: 'interstellar',
        icon: '⭐',
        horizon: '2100+',
        title: 'Interstellar Probes',
        subtitle: 'Reaching another star',
        color: 'cosmic',
        status: 'Conceptual',
        body: 'Breakthrough Starshot proposes using ground-based lasers to accelerate gram-scale light-sail probes to 20% the speed of light — reaching Alpha Centauri in ~20 years.',
        why: 'Proxima Centauri b is a potentially habitable exoplanet just 4.2 light-years away. Finding out what\'s there is the most profound question we could answer.',
        who: 'Breakthrough Initiatives, future generations',
    },
]

const colorMap = {
    amber: {
        border: 'border-amber-400/20',
        text: 'text-amber-400',
        bg: 'rgba(251,191,36,0.07)',
        tag: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
        bar: '#fbbf24',
    },
    cosmic: {
        border: 'border-cosmic-400/20',
        text: 'text-cosmic-400',
        bg: 'rgba(96,165,250,0.07)',
        tag: 'bg-cosmic-400/10 border-cosmic-400/20 text-cosmic-400',
        bar: '#60a5fa',
    },
    mars: {
        border: 'border-mars-400/20',
        text: 'text-mars-400',
        bg: 'rgba(248,113,113,0.07)',
        tag: 'bg-mars-400/10 border-mars-400/20 text-mars-400',
        bar: '#f87171',
    },
}

const statusStyle = {
    'In progress': 'bg-amber-400/10 border-amber-400/30 text-amber-400',
    'Planned': 'bg-mars-400/10 border-mars-400/30 text-mars-400',
    'In development': 'bg-cosmic-400/10 border-cosmic-400/30 text-cosmic-400',
    'Early stage': 'bg-cosmic-400/10 border-cosmic-400/30 text-cosmic-400',
    'Conceptual': 'bg-white/5 border-white/10 text-star-400',
}

function FutureCard({ item, index }) {
    const [ref, inView] = useInView()
    const c = colorMap[item.color]

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
                    <span className="text-4xl">{item.icon}</span>
                    <div className="flex flex-col items-end gap-2">
                        <span className={`label-mono text-[9px] px-2 py-1 rounded-full border ${statusStyle[item.status]}`}>
                            {item.status}
                        </span>
                        <span className={`label-mono text-[9px] ${c.text}`}>{item.horizon}</span>
                    </div>
                </div>

                <div>
                    <p className="label-mono text-[9px] text-star-600 mb-1">{item.subtitle}</p>
                    <h3
                        className={`font-bold ${c.text}`}
                        style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}
                    >
                        {item.title}
                    </h3>
                </div>

                <p className="text-star-400 text-sm leading-relaxed">{item.body}</p>

                <div className="border-t border-white/[0.06] pt-4 flex flex-col gap-3">
                    <div>
                        <p className="label-mono text-[9px] text-star-600 mb-1">Why it matters</p>
                        <p className="text-star-300 text-xs leading-relaxed">{item.why}</p>
                    </div>
                    <div className="rounded-lg p-3" style={{ background: c.bg }}>
                        <p className="label-mono text-[9px] text-star-600 mb-1">Key players</p>
                        <p className={`text-xs font-bold ${c.text}`}>{item.who}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function Future() {
    return (
        <main className="relative z-10 px-6 md:px-16 lg:px-28">

            <section className="pt-36 pb-16">
                <p className="label-mono mb-4">What Comes Next</p>
                <h1
                    className="text-star-100 mb-4"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900 }}
                >
                    The Future of
                    <span className="text-gradient-amber"> Space</span>
                </h1>
                <p className="text-star-400 text-lg max-w-xl">
                    Mars colonies, lunar bases, next-generation telescopes — the missions
                    being planned right now that will define the next century.
                </p>

                <blockquote className="mt-10 max-w-2xl border-l-2 border-amber-400/30 pl-6">
                    <p className="text-star-200 text-lg leading-relaxed italic">
                        "The universe is under no obligation to make sense to you."
                    </p>
                    <footer className="mt-2 label-mono text-[10px] text-star-600">— Neil deGrasse Tyson</footer>
                </blockquote>
            </section>

            <section className="pb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {futures.map((item, i) => (
                        <FutureCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </section>

        </main>
    )
}