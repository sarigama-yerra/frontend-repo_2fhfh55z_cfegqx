import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            We build automated, AI-powered systems that grow your business
          </h1>
          <p className="mt-6 text-lg text-blue-100/80">
            Premium websites, apps, and automations delivered end-to-end. From design to deployment to the workflows that scale it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              Start a project
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
