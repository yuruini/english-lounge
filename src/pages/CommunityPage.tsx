import { PageHero } from '../components/PageHero'
import { FinalCTA, Impact, InMotion, People, Worlds } from '../components/Sections'

export function CommunityPage() {
  return <>
    <PageHero issue="02 / COMMUNITY" eyebrow="THE PEOPLE MAKE THE PLACE" title={<>COME AS<br /><em>YOU ARE.</em></>} intro="Different cities. Different stories. Enough curiosity to start a conversation." imagePosition="35% center" />
    <People />
    <Worlds />
    <InMotion />
    <Impact />
    <FinalCTA />
  </>
}
