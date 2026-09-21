import { Briefcase, ChevronRight } from 'lucide-react'
import { experience } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="experience" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Work Experience"
          title="Where I've Worked"
          subtitle="A timeline of my professional journey across enterprise software development."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 hidden h-full w-px md:block"
            style={{ background: 'var(--line)' }}
          />

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={job.id} className="fade-in relative md:pl-14">
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 z-10 hidden h-3.5 w-3.5 rounded-full md:block"
                  style={{
                    background: idx === 0 ? 'var(--accent)' : 'var(--bg-elevated)',
                    border: `2px solid ${idx === 0 ? 'var(--accent)' : 'var(--muted)'}`,
                    boxShadow: idx === 0 ? '0 0 0 4px var(--accent-soft)' : 'none',
                  }}
                />

                <div
                  className="card-hover rounded-xl p-6"
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--line)',
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} style={{ color: 'var(--accent)' }} />
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: 'var(--text)' }}
                        >
                          {job.title}
                        </h3>
                      </div>
                      <p
                        className="mt-0.5 text-sm font-medium"
                        style={{ color: 'var(--accent)' }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 font-mono text-xs font-medium"
                      style={{
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    {job.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary, var(--muted))' }}>
                        <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
