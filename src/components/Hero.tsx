import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 110])
  return <section id="top" className="hero">
    <motion.img style={{ y }} className="hero-image" src={`${import.meta.env.BASE_URL}assets/images/el-editorial.png`} alt="English Lounge friends sharing a lively evening in Dalian" fetchPriority="high" />
    <div className="hero-shade" />
    <motion.div className="hero-copy" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .9 }}>
      <p className="eyebrow light">A CROSS-CULTURAL COMMUNITY<br />DALIAN / CHINA</p>
      <h1>MEET THE<br /><em>WORLD</em><br />IN DALIAN.</h1>
    </motion.div>
    <div className="hero-actions"><a className="button button--light" href="#join">JOIN EL <span>↗</span></a><a className="text-link light" href="#what">EXPLORE <ArrowDownRight size={17} /></a></div>
    <div className="hero-issue">ISSUE 001<br />PEOPLE / CULTURE / NOW</div>
    <a href="#what" className="scroll-cue" aria-label="Scroll to introduction"><span>SCROLL</span><i /></a>
  </section>
}
