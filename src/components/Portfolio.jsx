import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'Real‑time metrics, role‑based access, and Stripe integration.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1551281044-8b47b05f2dfb?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'E‑commerce Automation System',
    desc: 'Inventory sync, order routing, and customer messaging automation.',
    tech: ['Next.js', 'Supabase', 'n8n', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'AI Support Copilot',
    desc: 'Custom RAG chatbot integrated into support workflows and CRM.',
    tech: ['Python', 'OpenAI', 'LangChain', 'Zapier'],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected work</h2>
          <p className="mt-3 text-blue-100/80">A glimpse into products and systems we deliver.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-5">
                <div className="text-white font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-blue-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
