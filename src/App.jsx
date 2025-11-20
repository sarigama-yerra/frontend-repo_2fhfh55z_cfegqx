import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import AutomationFlow from './components/AutomationFlow'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import ScrollRig from './components/ScrollRig'

function App() {
  return (
    <div className="min-h-screen bg-[#050509] text-white">
      <ScrollRig />
      <Navbar />

      {/* Background accents */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-indigo-500/10 blur-3xl rounded-full" />
      </div>

      <main className="relative">
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <AutomationFlow />
        <WhyUs />
        <Contact />

        <footer className="py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/80">© {new Date().getFullYear()} Apex Systems — All rights reserved.</div>
            <div className="text-sm text-blue-100/70">Built with care. Designed for performance.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
