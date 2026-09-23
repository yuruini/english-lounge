import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import { members } from '../data/members'
import { proofPlaceholders } from '../data/partners'
import { MediaFrame } from './MediaFrame'

const reveal = { initial: { opacity: 0, y: 35 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .7 } }

export function Intro() { return <section id="what" className="intro section-pad">
  <motion.div {...reveal} className="section-index">01 / WHAT IS EL?</motion.div>
  <motion.div {...reveal} className="intro-statement"><p>English Lounge is not a classroom.</p><h2>PEOPLE.<br /><span>CULTURE.</span><br /><em>PERSPECTIVES.</em></h2></motion.div>
  <motion.div {...reveal} className="intro-note"><span>易言 / YÌ YÁN</span><p>A cross-cultural community where people meet, talk, create, and see the world differently. English is the medium. People are the point.</p><Link className="text-link" to="/about">READ OUR STORY <ArrowDownRight size={17} /></Link></motion.div>
</section> }

export function People() { return <section id="people" className="people section-pad">
  <div className="section-index light">02 / THE PEOPLE</div><h2 className="section-title light">THE PEOPLE<br />MAKE THE <em>PLACE.</em></h2>
  <div className="people-collage"><MediaFrame className="people-main" label="TUESDAY NIGHT / DALIAN" position="38% center" /><MediaFrame className="people-small" label="NEW FACES / OLD FRIENDS" position="72% center" /><MediaFrame className="people-detail" label="AFTER HOURS" position="12% center" />
    <motion.blockquote {...reveal}><span>“</span>{members[2].quote}<footer>{members[2].name} · {members[2].city}</footer></motion.blockquote>
  </div>
  <div className="member-strip">{members.map((m, i) => <div key={m.name}><span>0{i+1}</span><strong>{m.name}</strong><small>{m.city}<br />{m.interest}</small></div>)}</div>
</section> }

const worlds = [
  { no: '01', title: 'COMMUNITY / PEOPLE', copy: 'Conversations become friendships. New faces become familiar.', pos: '20% center' },
  { no: '02', title: 'CULTURE', copy: 'Music, art, food, fashion, cities. The things that give a place its pulse.', pos: '50% center' },
  { no: '03', title: 'INTERNATIONAL CONNECTION', copy: 'Dalian meets everywhere else. Naturally, openly, face to face.', pos: '82% center' },
]
export function Worlds() { return <section className="worlds section-pad"><div className="section-index">03 / THREE WORLDS, ONE ROOM</div>{worlds.map((w) => <motion.a {...reveal} className="world-row" href="#join" key={w.no}><span className="world-no">{w.no}</span><div className="world-img"><img src={`${import.meta.env.BASE_URL}assets/images/el-editorial.png`} style={{ objectPosition: w.pos }} alt="English Lounge community moment" loading="lazy" /></div><h3>{w.title}</h3><p>{w.copy}</p><ArrowDownRight /></motion.a>)}</section> }

export function InMotion() { return <section className="motion-section"><div className="motion-head section-pad"><div className="section-index light">04 / EL IN MOTION</div><h2 className="section-title light">THIS IS <em>EL.</em></h2><p>LOUD. QUIET. AWKWARD.<br />UNPLANNED. REAL.</p></div><div className="marquee" aria-hidden="true"><div>COME SEE FOR YOURSELF — COME SEE FOR YOURSELF — COME SEE FOR YOURSELF — </div></div><div className="filmstrip">{['03:12 PM / FIRST HELLO','08:47 PM / NO SMALL TALK','11:06 PM / ONE MORE SONG','12:21 AM / SEE YOU NEXT WEEK'].map((x,i)=><MediaFrame key={x} label={x} position={`${12+i*25}% center`} />)}</div></section> }

export function Events() { return <section id="events" className="events section-pad"><div className="events-header"><div><div className="section-index">05 / WHAT'S ON</div><h2 className="section-title">UP NEXT<br /><em>IN DALIAN.</em></h2></div><p>Dates and venues are announced through EL channels. These sample listings are ready to be replaced with confirmed events.</p></div><div className="event-list">{events.map((event) => <article className={`event event--${event.tone}`} key={event.day}><div className="event-date"><strong>{event.day}</strong><span>{event.date}</span></div><div><small>{event.category}</small><h3>{event.title}</h3><p>{event.description}</p></div><div className="event-location">{event.location}</div><a href="#join" aria-label={`Details for ${event.title}`}><ArrowDownRight /></a></article>)}</div></section> }

export function Impact() { return <section className="impact section-pad"><div className="section-index">06 / BEYOND OURSELVES</div><motion.div {...reveal} className="impact-copy"><h2>A COMMUNITY<br />SHOULD <em>MATTER.</em></h2><div><p>EL brings people together. We also want that energy to travel outward—to local projects, volunteer work and the city we call home.</p><p className="hand-note">Influence is more interesting when you share it.</p></div></motion.div></section> }

export function Collaborate() { return <section id="collaborate" className="collaborate section-pad"><div className="section-index light">07 / OPEN CALL</div><p className="collab-list">BRANDS / ARTISTS / ORGANIZATIONS / CREATORS</p><motion.h2 {...reveal}>LET'S MAKE<br />SOMETHING<br /><em>HAPPEN.</em></motion.h2><div className="collab-bottom"><p>We collaborate with people who have an idea, a point of view, or a place worth bringing to life.</p><a className="button button--light" href="mailto:hello@englishlounge.cn">COLLABORATE WITH US <span>↗</span></a></div></section> }

export function About() { return <section id="about" className="about section-pad"><div className="section-index">08 / ABOUT EL</div><div className="about-grid"><h2>MADE IN<br />DALIAN.<br /><em>OPEN TO<br />THE WORLD.</em></h2><div className="about-copy"><p>English Lounge / 易言 began with a simple instinct: the most interesting part of language is who it lets you meet.</p><p>Today, EL is a growing cultural community—built through regular gatherings, collaborations and the personalities who keep showing up.</p><dl><div><dt>FOUNDER & DIRECTOR</dt><dd>RUINI YU</dd></div><div><dt>CORE TEAM / CO-HOSTS</dt><dd>DETAILS COMING SOON</dd></div></dl></div><MediaFrame className="about-image" label="RUINI YU / FOUNDER & DIRECTOR" position="62% center" /></div></section> }

export function SocialProof() { return <section className="proof section-pad"><div className="section-index light">09 / THE RECEIPTS</div><div className="proof-numbers"><div><strong>DALIAN</strong><span>HOME BASE</span></div><div><strong>WEEKLY</strong><span>RHYTHM</span></div><div><strong>LOCAL ×<br />INTERNATIONAL</strong><span>POINT OF VIEW</span></div></div><div className="logo-placeholders">{proofPlaceholders.map(x => <span key={x}>{x}<small>ASSET COMING SOON</small></span>)}</div></section> }

export function FinalCTA() { return <section id="join" className="final-cta"><MediaFrame label="SEE YOU THERE / DALIAN" position="50% center" /><div className="final-overlay"><p>THE NEXT CONVERSATION STARTS HERE.</p><h2>SEE YOU<br />AT <em>EL.</em></h2><div><a href="mailto:hello@englishlounge.cn">JOIN EL <ArrowRight /></a><a href="https://instagram.com" target="_blank" rel="noreferrer">FOLLOW US <Camera /></a><a href="mailto:hello@englishlounge.cn">COLLABORATE <ArrowRight /></a></div></div></section> }
