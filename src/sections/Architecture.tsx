import {
  Layers,
  GitBranch,
  Plug,
  Cloud,
  Database,
  RefreshCw,
} from 'lucide-react'
import { architectureTopics } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  'git-branch': GitBranch,
  plug: Plug,
  cloud: Cloud,
  database: Database,
  'refresh-cw': RefreshCw,
}

export default function Architecture() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="architecture" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="How I Build Software"
          subtitle="The architectural patterns and practices that guide my development work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {architectureTopics.map((topic) => {
            const Icon = iconMap[topic.icon] ?? Layers
            return (
              <div
                key={topic.title}
                className="fade-in card-hover group rounded-xl p-6"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--line)',
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="mb-2 text-base font-semibold"
                  style={{ color: 'var(--text)' }}
                >
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {topic.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
