import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Wordmark } from './Wordmark'

const links = [['EVENTS', '#events'], ['COMMUNITY', '#people'], ['ABOUT', '#about'], ['COLLABORATE', '#collaborate']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return <>
    <header className="nav-shell">
      <Wordmark light />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}<a href="#join" className="nav-join">JOIN EL ↗</a></nav>
      <button className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-label="Open menu"><Menu /></button>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: .55, ease: [0.76,0,0.24,1] }}>
      <div className="mobile-menu-top"><Wordmark light /><button className="menu-button" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav aria-label="Mobile navigation">{links.map(([label, href], i) => <motion.a initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .15 + i*.06 }} onClick={() => setOpen(false)} key={label} href={href}><span>0{i+1}</span>{label}</motion.a>)}<a onClick={() => setOpen(false)} href="#join"><span>05</span>JOIN EL</a></nav>
      <p>DALIAN / CHINA<br />LOCAL × INTERNATIONAL</p>
    </motion.div>}</AnimatePresence>
  </>
}
