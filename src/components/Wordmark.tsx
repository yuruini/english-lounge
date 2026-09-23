import { Link } from 'react-router-dom'

export function Wordmark({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`wordmark ${light ? 'wordmark--light' : ''}`} aria-label="English Lounge home"><span>EL</span><small>ENGLISH LOUNGE<br />易言</small></Link>
}
