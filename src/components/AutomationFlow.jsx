import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Workflow, Bot, MailCheck, Cable, Database } from 'lucide-react'

export default function AutomationFlow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.8])

  const nodes = [
    { icon: Workflow, label: 'Trigger' },
    { icon: Database, label: 'Data' },
    { icon: Bot, label: 'AI Action' },
    { icon: MailCheck, label: 'CRM/Email' },
    { icon: Cable, label: 'Integrations' }
  ]

  return (
    <section id="automation" ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Automation & AI flow</h2>
          <p className="mt-3 text-blue-100/80">A visual of how your system orchestrates work as users interact.</p>
        </div>

        <div className="mt-14 relative">
          <motion.div style={{ opacity: glow }} className="absolute -inset-x-10 -top-8 -bottom-8 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-500/10 blur-2xl rounded-full"/>

          <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-6">
            {nodes.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.5)]">
                  <n.icon size={22} />
                </div>
                <div className="mt-3 text-white font-medium">{n.label}</div>
                {i < nodes.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-cyan-400/60 to-blue-600/60" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
