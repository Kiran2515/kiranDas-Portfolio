import { Mail } from 'lucide-react'
import { socialLinks } from '@/data/profile'

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.66-1.65c0-.92-.74-1.66-1.66-1.66Z" />
    </svg>
  )
}


function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
    </svg>
  )
}

interface Props {
  size?: number
  className?: string
  solidPurple?: boolean
}

export default function SocialLinks({ size = 15, className = '', solidPurple = false }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* LinkedIn */}
      <a
        href={socialLinks.find(s => s.kind === 'linkedin')?.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
          solidPurple
            ? 'h-9 w-9 shadow-md'
            : 'h-9 w-9 border'
        }`}
        style={
          solidPurple
            ? {
                background: 'var(--accent)',
                color: '#ffffff',
              }
            : {
                color: 'var(--muted)',
                borderColor: 'var(--line)',
                background: 'var(--surface)',
              }
        }
      >
        <LinkedInIcon size={size} />
      </a>

      {/* Email */}
      <a
        href={socialLinks.find(s => s.kind === 'email')?.href || '#'}
        aria-label="Email"
        className={`flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
          solidPurple
            ? 'h-9 w-9 shadow-md'
            : 'h-9 w-9 border'
        }`}
        style={
          solidPurple
            ? {
                background: 'var(--accent)',
                color: '#ffffff',
              }
            : {
                color: 'var(--muted)',
                borderColor: 'var(--line)',
                background: 'var(--surface)',
              }
        }
      >
        <Mail size={size} />
      </a>

      {/* Twitter / Secondary Icon like reference screenshot */}
      <a
        href={socialLinks.find(s => s.kind === 'linkedin')?.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter / X"
        className={`flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
          solidPurple
            ? 'h-9 w-9 shadow-md'
            : 'h-9 w-9 border'
        }`}
        style={
          solidPurple
            ? {
                background: 'var(--accent)',
                color: '#ffffff',
              }
            : {
                color: 'var(--muted)',
                borderColor: 'var(--line)',
                background: 'var(--surface)',
              }
        }
      >
        <TwitterIcon size={size} />
      </a>
    </div>
  )
}
