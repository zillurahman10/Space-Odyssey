import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">

            <p className="label-mono mb-4">Signal Lost</p>

            <h1
                className="text-gradient-amber mb-6 leading-none"
                style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(6rem, 20vw, 16rem)',
                }}
            >
                404
            </h1>

            <p
                className="text-star-100 mb-3"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem' }}
            >
                Mission control cannot locate this page.
            </p>

            <p className="text-star-600 text-sm max-w-sm mb-10">
                It may have drifted into deep space or been lost during orbital insertion.
                We recommend returning to base.
            </p>

            <Link
                to="/"
                className="px-8 py-4 bg-amber-400 text-void font-bold text-xs tracking-widest uppercase hover:bg-amber-300 transition-colors animate-glow"
                style={{ fontFamily: 'Space Mono, monospace' }}
            >
                Return to Base →
            </Link>

            <div className="mt-16 flex flex-col items-center gap-2 opacity-30">
                <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent" />
            </div>

        </main>
    )
}