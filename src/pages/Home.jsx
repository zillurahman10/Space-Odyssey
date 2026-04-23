import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

function OrbitGraphic() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

      <div
        className="absolute w-14 h-14 rounded-full animate-glow"
        style={{ background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, transparent 70%)' }}
      />

      <div
        className="absolute w-28 h-28 rounded-full border border-amber-400/20 animate-orbit"
        style={{ borderStyle: 'dashed' }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400" />
      </div>

      <div
        className="absolute w-48 h-48 rounded-full border border-cosmic-400/15 animate-orbit"
        style={{ animationDuration: '18s', borderStyle: 'dashed' }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cosmic-400" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-cosmic-400/50" />
      </div>

      <div
        className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/[0.04] animate-counter"
        style={{ animationDuration: '30s' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-star-400/60" />
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-mars-400/60" />
      </div>

      <span className="relative z-10 label-mono text-amber-400/80" style={{ fontSize: '0.6rem' }}>
        SOL
      </span>
    </div>
  )
}

function StatCard({ value, label, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="px-6 py-12 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: delay,
      }}
    >
      <p
        className="text-gradient-amber mb-2"
        style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}
      >
        {value}
      </p>
      <p className="text-star-400 text-sm">{label}</p>
    </div>
  )
}

function NavCard({ to, icon, title, sub, delay }) {
  const [ref, inView] = useInView()
  return (
    <Link
      ref={ref}
      to={to}
      className="glass rounded-xl p-6 flex flex-col gap-3 group hover:border-amber-400/30 hover:bg-amber-400/[0.03] transition-all duration-300"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, background 0.3s, border-color 0.3s',
        transitionDelay: delay,
      }}
    >
      <span className="text-3xl">{icon}</span>
      <span
        className="text-star-100 group-hover:text-amber-400 transition-colors font-semibold"
        style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem' }}
      >
        {title}
      </span>
      <span className="text-star-600 text-xs">{sub}</span>
      <span className="label-mono text-[10px] text-star-600 group-hover:text-amber-400 transition-colors mt-auto">
        Explore →
      </span>
    </Link>
  )
}

function IntroSection() {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <p className="label-mono mb-8">The Story So Far</p>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mb-16">
        <p className="text-star-200 text-xl leading-relaxed">
          Space technology is not merely an engineering triumph — it is the physical
          manifestation of human curiosity. Every rocket, satellite, and rover
          represents a choice to reach beyond the familiar.
        </p>
        <p className="text-star-400 leading-relaxed">
          This documentary traces that journey: the Cold War race that first cracked
          open the sky, the Apollo program that placed footprints on another world,
          the robotic pioneers now prowling distant planets, and the commercial
          revolution making space accessible to all.
        </p>
      </div>
      <div className="flex items-center gap-4 max-w-5xl">
        <div className="flex-1 h-px bg-white/[0.06]" />
        <span className="label-mono text-star-600 text-[9px]">Begin the journey</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative z-10">


      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-28 pt-20 relative overflow-hidden">


        <div
          className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)' }}
        />
        <div
          className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 65%)' }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">


          <div className="flex-1 max-w-2xl">
            <p className="label-mono mb-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              An Interactive Documentary
            </p>

            <h1
              className="mb-6 leading-none animate-fade-up"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                animationDelay: '0.25s',
              }}
            >
              <span className="block text-star-100">Humanity's</span>
              <span className="block text-gradient-amber">Journey</span>
              <span className="block text-star-100">to the Stars</span>
            </h1>

            <p
              className="text-star-400 text-base md:text-sm max-w-lg mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              From a metal sphere beeping in the dark of 1957 to rovers threading
              Martian canyons — explore the technology that launched our species
              beyond Earth.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/timeline"
                className="px-7 py-3.5 bg-amber-400 text-void font-bold text-xs tracking-widest uppercase hover:bg-amber-300 transition-colors animate-glow"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Explore Timeline →
              </Link>
              <Link
                to="/missions"
                className="px-7 py-3.5 glass text-amber-400 font-bold text-xs tracking-widest uppercase hover:bg-amber-400/10 transition-all"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                View Missions
              </Link>
            </div>


            {/* <div
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/[0.06] animate-fade-up"
              style={{ animationDelay: '0.75s' }}
            >
              {[
                ['600+', 'Missions launched'],
                ['7', 'Planets visited'],
                ['24', 'Humans left Earth orbit'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p
                    className="text-star-100 font-bold text-lg"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {v}
                  </p>
                  <p className="text-star-600 text-xs mt-0.5">{l}</p>
                </div>
              ))}
            </div> */}
            {/* <div
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/[0.06] animate-fade-up"
              style={{ animationDelay: '0.75s' }}
            >
              {[
                ['600+', 'Missions launched'],
                ['7', 'Planets visited'],
                ['24', 'Humans left Earth orbit'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p
                    className="text-star-100 font-bold text-lg"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {v}
                  </p>
                  <p className="text-star-600 text-xs mt-0.5">{l}</p>
                </div>
              ))}
            </div> */}
          </div>


          <div
            className="hidden lg:flex flex-1 items-center justify-center animate-fade-in "
            style={{ animationDelay: '0.8s' }}
          >
            <OrbitGraphic />
          </div>

        </div>


        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent animate-scroll" />
          <span
            className="label-mono text-[9px] text-star-600"
            style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}
          >
            scroll to explore
          </span>
        </div>
      </section>


      <section
        className="flex relative z-10 border-y border-white/[0.06] justify-center mx-auto"
        style={{ width: "80%", marginTop: "100px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06] w-full">
          {[
            { value: '1957', label: 'First satellite in orbit', delay: '0s' },
            { value: '12', label: 'Humans walked on the Moon', delay: '0.1s' },
            { value: '500+', label: 'Active satellites today', delay: '0.2s' },
            { value: '∞', label: 'Distance yet to explore', delay: '0.3s' },
          ].map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>


      <section className="px-6 md:px-16 lg:px-28 py-32">
        <IntroSection />
      </section>


      <section className="px-6 md:px-16 lg:px-28 pb-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: '/timeline', icon: '📡', title: 'Timeline', sub: '1957 — today', delay: '0s' },
            { to: '/missions', icon: '🚀', title: 'Missions', sub: 'Landmark voyages', delay: '0.1s' },
            { to: '/technology', icon: '🛰️', title: 'Technology', sub: 'The machines', delay: '0.2s' },
            { to: '/future', icon: '🔭', title: 'The Future', sub: 'Mars & beyond', delay: '0.3s' },
          ].map(c => <NavCard key={c.to} {...c} />)}
        </div>
      </section>

    </main>
  )
}