import {
  Server,
  Layout,
  Database,
  Cloud,
  Plug,
  Blocks,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
  plug: Plug,
  blocks: Blocks,
  wrench: Wrench,
}

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="skills" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Tech Stack"
          subtitle="Technologies and tools I work with across the full development lifecycle."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Server
            return (
              <div
                key={group.title}
                className="fade-in card-hover rounded-xl p-5"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--line)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      background: 'var(--accent-soft)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: 'var(--text)' }}
                  >
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md px-2.5 py-1 font-mono text-xs font-medium"
                      style={{
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                        border: '1px solid color-mix(in srgb, var(--accent) 15%, transparent)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
