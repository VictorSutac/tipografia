import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Запрос',
    desc: 'Звоните, пишите в мессенджер или приходите лично. Опишите задачу — мы уточним детали.',
  },
  {
    num: '02',
    title: 'Макет',
    desc: 'Присылаете готовый файл или мы разрабатываем дизайн с нуля по вашим пожеланиям.',
  },
  {
    num: '03',
    title: 'Согласование',
    desc: 'Показываем цветопробу или макет на утверждение. Правки до полного соответствия.',
  },
  {
    num: '04',
    title: 'Печать',
    desc: 'Запускаем тираж на профессиональном оборудовании. Контроль качества на каждом этапе.',
  },
  {
    num: '05',
    title: 'Выдача',
    desc: 'Забираете готовый тираж в офисе или организуем доставку в удобное для вас время.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Как мы работаем</span>
          <h2 className="section-title">Понятный процесс<br />без лишних шагов</h2>
          <p className="section-desc">
            Пять шагов от заявки до готового тиража. Работаем быстро и прозрачно.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '1.75rem 1.5rem',
                position: 'relative',
                borderRight: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1.5px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                background: 'var(--accent-dim)',
              }}>
                {step.num}
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: 'var(--text)',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.84rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{
          height: 1,
          background: 'var(--border)',
          marginTop: 0,
        }} />
      </div>
    </section>
  )
}
