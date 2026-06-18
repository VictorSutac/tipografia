import { Printer } from 'lucide-react'

const LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'О нас', href: '#trust' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 0',
      background: 'var(--bg)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: 28,
            height: 28,
            background: 'var(--accent)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Printer size={13} color="#fff" strokeWidth={2.5} />
          </span>
          <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>A&V Poligraf</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            · г. Комрат, Молдова
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {LINKS.map(link => (
            <a key={link.href} href={link.href} style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              transition: 'color var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} A&V Poligraf
        </span>
      </div>
    </footer>
  )
}
