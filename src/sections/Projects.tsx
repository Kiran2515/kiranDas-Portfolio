import { FolderKanban, ChevronRight, Cpu } from 'lucide-react'
import { projects } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="projects" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          title="What I've Built"
          subtitle="Key projects where I designed, developed, and delivered enterprise-grade software."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="fade-in card-hover flex flex-col rounded-xl"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--line)',
              }}
            >
              {/* Header */}
              <div className="border-b p-6" style={{ borderColor: 'var(--line)' }}>
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: 'var(--accent-soft)',
                      color: 'var(--accent)',
                    }}
                  >
                    <FolderKanban size={20} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: 'var(--text)' }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Purpose */}
                <div className="mb-4">
                  <h4
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    Business Purpose
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {project.purpose}
                  </p>
                </div>

                {/* Contribution */}
                <div className="mb-4">
                  <h4
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    My Contribution
                  </h4>
                  <ul className="space-y-1.5">
                    {project.contribution.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary, var(--muted))' }}>
                        <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Highlights */}
                <div className="mb-5">
                  <h4
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    Technical Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <Cpu size={12} style={{ color: 'var(--accent)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto flex flex-wrap gap-2 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-2 py-0.5 font-mono text-[0.68rem] font-medium"
                      style={{
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
