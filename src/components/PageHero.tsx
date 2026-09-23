import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

type PageHeroProps = {
  issue: string
  eyebrow: string
  title: React.ReactNode
  intro: string
  accent?: 'navy' | 'red' | 'ink'
  imagePosition?: string
}

export function PageHero({ issue, eyebrow, title, intro, accent = 'navy', imagePosition = 'center' }: PageHeroProps) {
  return <section className={`page-hero page-hero--${accent}`}>
    <motion.div className="page-hero-copy" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
      <div className="page-hero-meta"><span>{issue}</span><span>ENGLISH LOUNGE / 易言</span></div>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-hero-intro"><p>{intro}</p><ArrowDownRight /></div>
    </motion.div>
    <motion.div className="page-hero-image" initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
      <img src={`${import.meta.env.BASE_URL}assets/images/el-editorial.png`} style={{ objectPosition: imagePosition }} alt="English Lounge community in Dalian" />
      <span>DALIAN / CHINA / NOW</span>
    </motion.div>
  </section>
}
