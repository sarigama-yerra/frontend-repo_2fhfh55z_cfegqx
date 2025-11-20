import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const items = [
  { name: 'Jordan M.', role: 'Founder, Fintech', text: 'They shipped a production MVP with payment, auth, and analytics in 4 weeks. Automation saved our ops countless hours.' },
  { name: 'Priya K.', role: 'COO, E‑commerce', text: 'Our new stack and n8n flows cut manual work by 60%. The team is fast, precise, and communicates clearly.' },
  { name: 'Leo S.', role: 'Head of Support, SaaS', text: 'The AI copilot deflected 40% of tickets within the first month and our CSAT went up.' },
  { name: 'Amelia R.', role: 'CEO, Services', text: 'Beautiful site, clean CRM, and email journeys that actually convert. The system just works.' }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 text-cyan-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#22d3ee" color="#22d3ee" />)}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Clients trust our delivery</h2>
        </div>

        <div className="mt-10 relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-blue-100/90 text-lg">“{items[index].text}”</p>
            <div className="mt-4 text-white font-medium">{items[index].name}</div>
            <div className="text-blue-100/70 text-sm">{items[index].role}</div>
          </div>

          <button aria-label="Previous" onClick={prev} className="absolute -left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10">
            <ChevronLeft size={18} />
          </button>
          <button aria-label="Next" onClick={next} className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
