import { motion } from 'framer-motion'
import { Globe, Code2, Workflow, Bot, MailCheck, Cable, BarChart3 } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Web Design', desc: 'Clean, modern interfaces crafted for conversion and credibility.' },
  { icon: Code2, title: 'Full‑Stack Development', desc: 'Production-grade apps with robust architectures and performance.' },
  { icon: Workflow, title: 'Business Automations', desc: 'Zapier, Make, n8n. Reduce manual work and scale operations.' },
  { icon: Bot, title: 'AI Chatbots', desc: 'Custom agents trained on your data for sales, support, and internal ops.' },
  { icon: MailCheck, title: 'CRM + Email', desc: 'Lifecycle automation with CRM, email sequencing, and attribution.' },
  { icon: Cable, title: 'API Integrations', desc: 'Secure integrations with payment, auth, analytics, and more.' },
  { icon: BarChart3, title: 'Dashboards & Tools', desc: 'Operational dashboards and internal tools for visibility.' }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-blue-100/80">End-to-end systems: from brand sites to fully automated products.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-cyan-400/30 transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_24px_rgba(59,130,246,0.5)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
