import { Link } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/timeline', label: 'Timeline' },
    { to: '/missions', label: 'Missions' },
    { to: '/technology', label: 'Technology' },
    { to: '/future', label: 'Future' },
]

export default function Footer() {
    return (
        <footer
            className="relative z-10 border-t border-white/[0.06] mt-auto"
            style={{ background: 'rgba(5,5,8,0.9)' }}
        >
            <div className="px-6 md:px-16 lg:px-28 py-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="4" fill="#fbbf24" />
                                <ellipse cx="16" cy="16" rx="13" ry="5.5" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                                <circle cx="27" cy="16" r="2" fill="#fbbf24" opacity="0.5" />
                            </svg>
                            <span
                                className="text-star-100 text-sm font-bold tracking-widest uppercase"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                Space<span className="text-amber-400">Odyssey</span>
                            </span>
                        </div>
                        <p className="text-star-600 text-sm leading-relaxed max-w-xs">
                            An interactive documentary tracing humanity's journey beyond Earth —
                            from Sputnik to the stars.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="label-mono text-[10px] text-star-600">Explore</p>
                        <ul className="flex flex-col gap-3">
                            {links.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-star-400 text-sm hover:text-amber-400 transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="label-mono text-[10px] text-star-600">About</p>
                        <p className="text-star-400 text-sm leading-relaxed">
                            Designed and developed by a full stack web developer with a passion
                            for building immersive, high-performance web experiences.
                        </p>
                        <div className="glass rounded-xl border border-amber-400/20 p-4 flex flex-col gap-2">
                            <p className="label-mono text-[9px] text-star-600">Made by</p>
                            <p
                                className="text-gradient-amber font-bold"
                                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}
                            >
                                MD ZILLUR RAHMAN
                            </p>
                            <p className="text-star-600 text-xs">Full Stack Web Developer</p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="label-mono text-[9px] text-star-600">
                        © 2026 Space Odyssey — All rights reserved
                    </span>
                    <span className="label-mono text-[9px] text-star-600">
                        Humanity's Journey to the Stars
                    </span>
                </div>

            </div>
        </footer>
    )
}