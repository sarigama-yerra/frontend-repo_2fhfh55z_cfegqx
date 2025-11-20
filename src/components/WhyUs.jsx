import { motion } from 'framer-motion'
import { ShieldCheck, Gauge, Boxes, Sparkles } from 'lucide-react'

const reasons = [
  { icon: Gauge, title: 'Speed to value', desc: 'Lean execution with enterprise quality.' },
  { icon: ShieldCheck, title: 'Reliability', desc: 'Robust systems, clear SLAs, transparent delivery.' },
  { icon: Boxes, title: 'End‑to‑end', desc: 'Design, build, and automate—one team, one roadmap.' },
  { icon: Sparkles, title: 'AI‑native', desc: 'We embed AI where it truly drives outcomes.' }
]

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why choose us</h2>
          <p className="mt-3 text-blue-100/80">We focus on outcomes, not outputs.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.5)]">
                <Icon size={22} />
              </div>
              <div className="mt-3 text-white font-semibold">{title}</div>
              <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
