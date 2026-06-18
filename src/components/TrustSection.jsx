import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Clock, Users, Layers, Zap } from 'lucide-react'

const STATS = [
  { icon: Clock, value: '10+', label: 'лет на рынке', desc: 'Работаем с 2014 года' },
  { icon: Users, value: '500+', label: 'клиентов', desc: 'Физические лица и бизнес' },
  { icon: Layers, value: '15+', label: 'видов услуг', desc: 'Весь спектр полиграфии' },
  { icon: Zap, value: '24ч', label: 'срочный заказ', desc: 'Выполняем за сутки' },
]

const WHY = [
  'Собственный парк профессионального оборудования',
  'Контроль качества на каждом этапе производства',
  'Работаем с готовыми макетами и разрабатываем дизайн',
  'Гибкие условия для оптовых и корпоративных заказов',
  'Удобное расположение в центре Комрата',
]

export default function TrustSection() {
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  return (
    <section id="trust" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
          className="trust-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Почему мы</span>
            <h2 className="section-title">Типография, которой<br />доверяют</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              Современное оборудование, опытная команда и ответственный подход
              к каждому заказу — от малого тиража до крупной партии.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {WHY.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{
                    width: 18,
                    height: 18,
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div ref={ref} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--surface-2)',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <stat.icon size={20} color="var(--accent)" strokeWidth={1.8} />
                <span style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
