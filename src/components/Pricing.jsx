import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$6k+',
    features: ['Design + build site', 'CMS + basic analytics', 'Light automation'],
    cta: 'Request scope'
  },
  {
    name: 'Growth',
    price: '$15k+',
    features: ['Full‑stack app or complex site', 'CRM + email automations', 'Integrations + dashboards'],
    cta: 'Book a call',
    highlighted: true
  },
  {
    name: 'System Build',
    price: 'Custom',
    features: ['Multi‑app ecosystem', 'AI agents + orchestration', 'SLAs + ongoing optimization'],
    cta: 'Discuss scope'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Pricing</h2>
          <p className="mt-3 text-blue-100/80">Transparent tiers. Fixed scopes. Real outcomes.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border bg-white/[0.03] p-6 ${t.highlighted ? 'border-cyan-400/50 shadow-[0_10px_60px_rgba(34,211,238,0.2)]' : 'border-white/10'}`}
            >
              <div className="text-white font-semibold text-lg">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold text-cyan-400">{t.price}</div>
              <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium">
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
