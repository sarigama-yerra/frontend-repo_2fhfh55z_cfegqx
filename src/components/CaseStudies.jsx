import { motion } from 'framer-motion'
import ParallaxImage from './ParallaxImage'

const cases = [
  {
    title: 'Fintech Growth Platform',
    desc: 'Multi-tenant dashboard with role-based access, real-time metrics, and billing. Automated KYC/AML workflows and CRM sync.',
    img: 'https://images.unsplash.com/photo-1551281044-8b47b05f2dfb?q=80&w=1600&auto=format&fit=crop',
    tags: ['Design', 'Full‑stack', 'Automations', 'Dashboards']
  },
  {
    title: 'Commerce Automation Engine',
    desc: 'End-to-end ops automation: inventory, order routing, and customer messaging across Stripe, Shopify, and a custom CRM.',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Integrations', 'n8n', 'API', 'CRM']
  },
  {
    title: 'AI Support Copilot',
    desc: 'RAG chatbot trained on docs and tickets. Deflects requests, escalates with context, and logs insights back to the CRM.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    tags: ['AI', 'LangChain', 'Automations']
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Case studies</h2>
          <p className="mt-3 text-blue-100/80">A closer look at outcomes we deliver.</p>
        </div>

        <div className="mt-14 space-y-20">
          {cases.map((c, i) => (
            <div key={c.title} className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="lg:col-span-7">
                <ParallaxImage src={c.img} alt={c.title} className="aspect-[16/9]" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">{c.title}</h3>
                <p className="mt-3 text-blue-100/80">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100/80">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
