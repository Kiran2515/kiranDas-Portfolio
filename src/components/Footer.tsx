import { profile } from '@/data/profile'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
    >
      <div className="container-page flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <SocialLinks size={16} />
      </div>
    </footer>
  )
}
