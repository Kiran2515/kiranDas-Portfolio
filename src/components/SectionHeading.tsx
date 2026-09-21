import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionHeading({ eyebrow, title, subtitle, children }: Props) {
  return (
    <div className="fade-in mb-12 text-center md:mb-16">
      <span className="eyebrow mb-3 block">
        <span className="inline-block h-px w-5" style={{ background: 'var(--accent)' }} />
        {eyebrow}
        <span className="inline-block h-px w-5" style={{ background: 'var(--accent)' }} />
      </span>
      <h2
        className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: 'var(--muted)' }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
