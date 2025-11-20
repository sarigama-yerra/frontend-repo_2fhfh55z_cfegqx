import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'What We Do' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#automation', label: 'Automation & AI' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Apex Systems</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm px-3 py-2 rounded-md text-blue-100/80 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-blue-100/90 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
