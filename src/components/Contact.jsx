import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we will reach out shortly!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Tell us about your project</h2>
          <p className="mt-3 text-blue-100/80">We typically respond within one business day.</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="text-sm text-blue-100/80">Name</label>
            <input required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-blue-100/80">Email</label>
            <input type="email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="jane@company.com" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-blue-100/80">Project type</label>
            <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none">
              <option>Website</option>
              <option>Full‑stack app</option>
              <option>Automations</option>
              <option>AI chatbot</option>
              <option>System build</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-blue-100/80">Budget</label>
            <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none">
              <option>$5k – $10k</option>
              <option>$10k – $25k</option>
              <option>$25k – $50k</option>
              <option>$50k+</option>
            </select>
          </div>

          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm text-blue-100/80">Message</label>
            <textarea rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="What problems are we solving?" />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium">Send request</button>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/5">WhatsApp</a>
            <a href="mailto:hello@example.com" className="px-4 py-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/5">Email</a>
            <span className="text-sm text-cyan-300/80 ml-auto">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
