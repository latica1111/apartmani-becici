 // lib/getCurrentLocale.js
import { headers } from 'next/headers'

export function getCurrentLocale() {
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path') || ''
  const segments = pathname.split('/')
  const locale = segments[1] || 'en' // podesi default
  return locale
}
