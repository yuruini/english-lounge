import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': "English Lounge | Dalian's Cross-Cultural Community",
  '/events': 'Events | English Lounge Dalian',
  '/community': 'Community | English Lounge Dalian',
  '/about': 'About | English Lounge Dalian',
  '/collaborate': 'Collaborate | English Lounge Dalian',
}

export function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] ?? 'English Lounge / 易言'
    if (hash) requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    else window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}
