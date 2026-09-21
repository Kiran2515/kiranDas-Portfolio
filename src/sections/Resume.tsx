import { Download, ExternalLink, FileText } from 'lucide-react'
import { profile } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

export default function Resume() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="resume" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume"
          title="My Resume"
          subtitle="Want to know more about my experience?"
        />

        <div
          className="fade-in mx-auto max-w-lg rounded-2xl p-8 text-center"
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--line)',
            boxShadow: 'var(--shadow)',
          }}
        >
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
            }}
          >
            <FileText size={28} />
          </div>

          <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Download my resume to see a detailed summary of my professional experience,
            technical skills, education, and project work.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg)',
              }}
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: 'var(--line)',
                color: 'var(--text)',
                background: 'var(--surface)',
              }}
            >
              <ExternalLink size={16} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
