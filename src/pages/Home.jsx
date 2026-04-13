import { Link } from 'react-router-dom'

const stats = [
  { value: '1957', label: 'First satellite in orbit' },
  { value: '12',   label: 'Humans walked on the Moon' },
  { value: '500+', label: 'Active satellites today' },
  { value: '∞',    label: 'Distance yet to explore' },
]

export default function Home() {
  return (
    <main className="relative z-10">

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-28 pt-24">

        {/* Ambient glow */}
        <div
          className="absolute left-1/3 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)' }}
        />

        <p className="label-mono mb-5">An Interactive Documentary</p>

        <h1
          className="mb-6 leading-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}
        >
          <span className="block text-star-100">Humanity's</span>
          <span className="block text-gradient-amber">Journey</span>
          <span className="block text-star-100">to the Stars</span>
        </h1>

        <p className="text-star-400 text-lg max-w-lg mb-12 leading-relaxed">
          From a metal sphere beeping in the dark of 1957 to rovers threading
          Martian canyons — explore the technology that launched our species beyond Earth.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/timeline"
            className="px-8 py-4 bg-amber-400 text-void font-bold text-xs tracking-widest uppercase hover:bg-amber-300 transition-colors"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Explore Timeline →
          </Link>
          <Link
            to="/missions"
            className="px-8 py-4 glass text-amber-400 font-bold text-xs tracking-widest uppercase hover:bg-amber-400/10 transition-all"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            View Missions
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="label-mono text-[10px] text-star-600">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-400/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="relative z-10 border-y border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-8 py-10">
              <p
                className="text-gradient-amber mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.2rem', fontWeight: 900 }}
              >
                {value}
              </p>
              <p className="text-star-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-16 lg:px-28 py-28">
        <p className="label-mono mb-8">The Story So Far</p>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-star-200 text-lg leading-relaxed">
            Space technology is not merely an engineering triumph — it is the physical
            manifestation of human curiosity. Every rocket, satellite, and rover represents
            a choice to reach beyond the familiar.
          </p>
          <p className="text-star-400 leading-relaxed">
            This documentary traces that journey: the Cold War race that first cracked open
            the sky, the Apollo program that placed footprints on another world, the robotic
            pioneers now prowling distant planets, and the commercial revolution making
            space accessible to all.
          </p>
        </div>

        {/* Nav cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl">
          {[
            { to: '/timeline',   icon: '📡', title: 'Timeline',   sub: '1957 to today' },
            { to: '/missions',   icon: '🚀', title: 'Missions',   sub: 'Landmark voyages' },
            { to: '/technology', icon: '🛰️', title: 'Technology', sub: 'The machines' },
          ].map(({ to, icon, title, sub }) => (
            <Link
              key={to}
              to={to}
              className="glass rounded-lg p-6 flex flex-col gap-3 group hover:border-amber-400/30 hover:bg-amber-400/[0.03] transition-all duration-300"
            >
              <span className="text-2xl">{icon}</span>
              <span
                className="text-star-100 group-hover:text-amber-400 transition-colors text-sm font-semibold"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {title}
              </span>
              <span className="text-star-600 text-xs">{sub}</span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}