import { GraduationCap, Briefcase, Rocket } from 'lucide-react'
import { journey } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

const typeIcons = {
  education: GraduationCap,
  internship: Rocket,
  role: Briefcase,
} as const

const typeLabels = {
  education: 'Education',
  internship: 'Internship',
  role: 'Professional Role',
} as const

export default function Journey() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="journey" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Career Journey"
          title="My Professional Path"
          subtitle="A timeline of my hands-on software engineering roles and milestones."
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-0 h-full w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), var(--line))' }}
          />

          <div className="space-y-0">
            {journey.map((item, idx) => {
              const Icon = typeIcons[item.type]
              return (
                <div key={item.id} className="fade-in relative pl-14 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full"
                    style={{
                      background: idx === journey.length - 1 ? 'var(--accent)' : 'var(--bg-elevated)',
                      border: `2px solid ${idx === journey.length - 1 ? 'var(--accent)' : 'var(--line)'}`,
                      boxShadow: idx === journey.length - 1 ? '0 0 0 4px var(--accent-soft)' : 'none',
                    }}
                  >
                    <Icon
                      size={12}
                      style={{ color: idx === journey.length - 1 ? 'var(--bg)' : 'var(--muted)' }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: 'var(--accent)' }}
                    >
                      {item.period}
                    </span>
                    <h3
                      className="mt-1 text-base font-semibold"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      {item.organization}
                    </p>
                    <span
                      className="mt-2 inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider"
                      style={{
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                      }}
                    >
                      {typeLabels[item.type]}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
