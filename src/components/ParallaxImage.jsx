import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxImage({ src, alt, speed = 0.15, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, -speed * 80])

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-full object-cover" />
    </div>
  )
}
