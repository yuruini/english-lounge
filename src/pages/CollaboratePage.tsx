import { PageHero } from '../components/PageHero'
import { Collaborate, FinalCTA, SocialProof } from '../components/Sections'

export function CollaboratePage() {
  return <>
    <PageHero issue="04 / COLLABORATE" eyebrow="AN OPEN INVITATION" title={<>MAKE<br />SOMETHING<br /><em>UNEXPECTED.</em></>} intro="For brands, artists, venues and organizations with a point of view—and an idea worth putting into the world." accent="red" imagePosition="82% center" />
    <section className="collab-brief section-pad">
      <div className="section-index">WHO WE WORK WITH</div>
      <div className="collab-brief-grid">
        {['BRANDS / VENUES', 'ARTISTS / CREATORS', 'CULTURAL ORGANIZATIONS', 'INTERNATIONAL PROJECTS'].map((item, i) => <article key={item}><span>0{i + 1}</span><h2>{item}</h2><p>Bring the idea. EL brings a living, curious community and a distinct cultural point of view.</p></article>)}
      </div>
    </section>
    <Collaborate />
    <SocialProof />
    <FinalCTA />
  </>
}
