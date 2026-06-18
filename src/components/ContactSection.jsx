import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Mail, ArrowRight } from 'lucide-react'

const CONTACTS = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+373 (298) 2-XX-XX',
    action: 'tel:+37329820000',
    actionLabel: 'Позвонить',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp / Viber',
    value: 'Написать сообщение',
    action: 'https://wa.me/37329800000',
    actionLabel: 'Написать',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'г. Комрат, ул. Ленина XX, Молдова',
    action: null,
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Пт: 9:00–18:00\nСб: 9:00–14:00',
    action: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Связаться</span>
            <h2 className="section-title">Готовы обсудить<br />ваш заказ</h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
              Звоните, пишите или приходите. Ответим на вопросы, рассчитаем стоимость
              и поможем подобрать оптимальный вариант.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CONTACTS.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    background: 'var(--surface-2)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    transition: 'border-color var(--transition)',
                  }}
                  whileHover={c.action ? { borderColor: 'var(--border-hover)' } : {}}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    background: 'var(--accent-dim)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <c.icon size={16} color="var(--accent)" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {c.label}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--text)',
                      fontWeight: 500,
                      whiteSpace: 'pre-line',
                    }}>
                      {c.value}
                    </div>
                  </div>
                  {c.action && (
                    <a href={c.action} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: 'var(--accent)',
                      fontWeight: 500,
                      alignSelf: 'center',
                      flexShrink: 0,
                      transition: 'opacity var(--transition)',
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      {c.actionLabel}
                      <ArrowRight size={13} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
            }}>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                marginBottom: '0.4rem',
              }}>
                Оставить заявку
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Опишите задачу — ответим в течение 1 рабочего часа.
              </p>

              <form
                onSubmit={e => e.preventDefault()}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
              >
                {[
                  { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Иван Петров' },
                  { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+373 000 000 00' },
                ].map(field => (
                  <label key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {field.label} <span style={{ color: 'var(--accent)' }}>*</span>
                    </span>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text)',
                        fontSize: '0.9rem',
                        padding: '0.65rem 0.875rem',
                        outline: 'none',
                        transition: 'border-color var(--transition)',
                        fontFamily: 'inherit',
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    />
                  </label>
                ))}

                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Описание задачи
                  </span>
                  <textarea
                    rows={3}
                    placeholder="Тираж 500 листовок А5, двусторонняя цветная печать..."
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      fontSize: '0.9rem',
                      padding: '0.65rem 0.875rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color var(--transition)',
                      fontFamily: 'inherit',
                      lineHeight: 1.55,
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </label>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}>
                  Отправить заявку
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
