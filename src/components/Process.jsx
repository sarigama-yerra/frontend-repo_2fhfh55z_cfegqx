import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'Clarify goals, constraints, and success metrics.' },
  { title: 'Design', desc: 'Wireframes, UI, and system architecture.' },
  { title: 'Build', desc: 'Full‑stack implementation with rapid iterations.' },
  { title: 'Automate', desc: 'Workflows, data sync, and AI agents.' },
  { title: 'Scale', desc: 'Performance, analytics, and ongoing improvements.' }
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">How we work</h2>
          <p className="mt-3 text-blue-100/80">Simple, outcome‑focused delivery. Transparent from start to launch.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-cyan-400 font-mono text-sm">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
