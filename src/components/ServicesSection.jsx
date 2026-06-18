import { motion } from 'framer-motion'
import { Printer, Layers, Maximize2, Monitor, Copy, Gift, Pen, Scissors } from 'lucide-react'

const SERVICES = [
  {
    icon: Printer,
    title: 'Срочная печать',
    desc: 'Документы, раздаточные материалы, листовки — цветная и ч/б печать в течение нескольких часов.',
  },
  {
    icon: Layers,
    title: 'Ламинирование и переплёт',
    desc: 'Глянцевое и матовое ламинирование, брошюровка, твёрдый и мягкий переплёт.',
  },
  {
    icon: Maximize2,
    title: 'Широкоформатная печать',
    desc: 'Баннеры, постеры, плакаты и интерьерные изображения любых размеров.',
  },
  {
    icon: Monitor,
    title: 'Цифровая печать',
    desc: 'Высококачественная цветная и чёрно-белая цифровая печать на различных носителях.',
  },
  {
    icon: Copy,
    title: 'Ризография',
    desc: 'Экономичное тиражирование для больших объёмов — газеты, методички, бланки.',
  },
  {
    icon: Gift,
    title: 'Сувенирная продукция',
    desc: 'Корпоративные подарки, брендированные изделия, рекламная полиграфия на заказ.',
  },
  {
    icon: Pen,
    title: 'Разработка макетов',
    desc: 'Дизайн с нуля или доработка готовых макетов под требования печати.',
  },
  {
    icon: Scissors,
    title: 'Плоттерная резка',
    desc: 'Точная резка наклеек, трафаретов, виниловых плёнок любой сложности.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">Что мы делаем</span>
          <h2 className="section-title">Все виды полиграфии<br />в одном месте</h2>
          <p className="section-desc">
            От листовки до баннера. Работаем с физическими лицами, бизнесом
            и государственными организациями.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ background: 'rgba(249,115,22,0.04)' }}
              style={{
                background: 'var(--surface-2)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                cursor: 'default',
                transition: 'background var(--transition)',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                background: 'var(--accent-dim)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svc.icon size={18} color="var(--accent)" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--text)',
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                }}>
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
