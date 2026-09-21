import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navItems.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3.5' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        {/* Exact logo style from screenshot: "KD." in dark bold text with purple period */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight"
          style={{ color: 'var(--text)' }}
          onClick={(e) => { e.preventDefault(); handleNav('home') }}
        >
          KD<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Clean nav items from reference screenshot */}
        <ul className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`text-[0.95rem] transition-colors hover:text-[var(--accent)] ${
                  active === item.id
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-[var(--muted)] font-medium'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Top Right "Let's Talk" rounded purple pill button + theme toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <button
            onClick={() => handleNav('contact')}
            className="rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
            style={{
              background: 'var(--accent)',
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 transition-colors hover:bg-[var(--accent-soft)]"
            style={{ color: 'var(--text)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="glass fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-6 p-6 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-xl font-medium transition-colors ${
                active === item.id
                  ? 'text-[var(--accent)] font-bold'
                  : 'text-[var(--text)] hover:text-[var(--accent)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="mt-4 w-full max-w-xs rounded-xl py-3 text-sm font-semibold text-white shadow-md"
            style={{ background: 'var(--accent)' }}
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  )
}
