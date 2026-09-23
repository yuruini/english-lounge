import { PageHero } from '../components/PageHero'
import { Events, FinalCTA, InMotion } from '../components/Sections'

export function EventsPage() {
  return <>
    <PageHero issue="01 / EVENTS" eyebrow="WHAT'S HAPPENING" title={<>COME SEE<br /><em>FOR YOURSELF.</em></>} intro="The best way to understand EL is to enter the room. Conversation nights, culture, music and whatever we make next." accent="red" imagePosition="67% center" />
    <Events />
    <InMotion />
    <FinalCTA />
  </>
}
