import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/',           label: 'Home'       },
  { to: '/timeline',   label: 'Timeline'   },
  { to: '/missions',   label: 'Missions'   },
  { to: '/technology', label: 'Technology' },
  { to: '/future',     label: 'Future'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:   scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        padding:      scrolled ? '14px 0' : '24px 0',
      }}
    >
      <nav className="px-6 md:px-16 lg:px-28 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          <svg
            width="28" height="28" viewBox="0 0 32 32" fill="none"
            className="transition-transform duration-500 group-hover:rotate-45"
          >
            <circle cx="16" cy="16" r="4" fill="#fbbf24" />
            <ellipse
              cx="16" cy="16" rx="13" ry="5.5"
              stroke="#fbbf24" strokeWidth="1.5"
              fill="none" strokeDasharray="4 2"
            />
            <circle cx="27" cy="16" r="2" fill="#fbbf24" opacity="0.5" />
          </svg>
          <span
            className="text-star-100 text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Space<span className="text-amber-400">Odyssey</span>
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `transition-colors duration-200 label-mono text-[11px] ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-star-400 hover:text-star-100'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-5 bg-star-100 transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
          />
          <span
            className="block h-px w-5 bg-star-100 transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-5 bg-star-100 transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
          />
        </button>

      </nav>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '300px' : '0' }}
      >
        <ul
          className="flex flex-col gap-1 px-6 py-4 border-t border-white/[0.06]"
          style={{ background: 'rgba(5,5,8,0.95)' }}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 label-mono text-[11px] transition-colors ${
                    isActive ? 'text-amber-400' : 'text-star-400'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}