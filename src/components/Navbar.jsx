import { useState, useEffect } from 'react'
import { Menu, X, Printer } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'О нас', href: '#trust' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled
        ? 'rgba(9,9,11,0.85)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>
        <a href="#" aria-label="A&V Poligraf" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '-0.01em',
        }}>
          <span style={{
            width: 32,
            height: 32,
            background: 'var(--accent)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Printer size={16} color="#fff" strokeWidth={2.5} />
          </span>
          <span>A&V <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Poligraf</span></span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              padding: '0.4rem 0.75rem',
              borderRadius: 6,
              transition: 'color var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}>
            Заказать
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              display: 'none',
              padding: 4,
            }}
            className="burger-btn"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{
          background: 'rgba(9,9,11,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
