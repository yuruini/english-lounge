import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { RouteEffects } from './components/RouteEffects'
import { HomePage } from './pages/HomePage'
import { EventsPage } from './pages/EventsPage'
import { CommunityPage } from './pages/CommunityPage'
import { AboutPage } from './pages/AboutPage'
import { CollaboratePage } from './pages/CollaboratePage'

const basename = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return <BrowserRouter basename={basename}>
    <RouteEffects />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
}
