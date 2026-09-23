export type EventItem = {
  date: string
  day: string
  title: string
  location: string
  category: string
  description: string
  tone: 'red' | 'blue' | 'paper'
}

// Replace these sample listings with confirmed EL events.
export const events: EventItem[] = [
  { date: 'DATE TBA', day: '01', title: 'English Lounge', location: 'DALIAN · VENUE TBA', category: 'CONVERSATION / SOCIAL', description: 'One room. A lot of accents. No lesson plan.', tone: 'red' },
  { date: 'DATE TBA', day: '02', title: 'After Hours', location: 'DALIAN · VENUE TBA', category: 'MUSIC / NIGHT', description: 'A late-night edition for sound, movement and new faces.', tone: 'blue' },
  { date: 'DATE TBA', day: '03', title: 'The City Table', location: 'DALIAN · VENUE TBA', category: 'FOOD / CULTURE', description: 'People bring a dish, a story and somebody new.', tone: 'paper' },
]
