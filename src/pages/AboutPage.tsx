import { PageHero } from '../components/PageHero'
import { About, FinalCTA, Impact, SocialProof } from '../components/Sections'

export function AboutPage() {
  return <>
    <PageHero issue="03 / ABOUT" eyebrow="MADE IN DALIAN" title={<>LANGUAGE<br />WAS ONLY<br /><em>THE START.</em></>} intro="EL began with a simple instinct: the most interesting part of language is who it lets you meet." accent="ink" imagePosition="12% center" />
    <About />
    <Impact />
    <SocialProof />
    <FinalCTA />
  </>
}
