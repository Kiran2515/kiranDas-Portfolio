import { profile } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'
import profilePhoto from '@/assets/profile-photo.jpg'

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A brief look at my background and what drives me as a developer."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
          {/* Mobile-hidden profile pic for about section */}
          <div className="fade-in hidden lg:block">
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <img
                src={profilePhoto}
                alt={`${profile.name} portrait`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p
              className="fade-in text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary, var(--muted))' }}
            >
              {profile.summary}
            </p>

            {profile.aboutBody.map((paragraph, i) => (
              <p
                key={i}
                className="fade-in mt-4 leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {paragraph}
              </p>
            ))}

            {/* Highlights */}
            <div
              className="fade-in mt-8 grid gap-4 sm:grid-cols-2"
            >
              {[
                { label: 'Focus', value: 'Backend / Full-Stack' },
                { label: 'Stack', value: '.NET, Azure, SQL Server' },
                { label: 'Frontend', value: 'React, Angular, Vue.js' },
                { label: 'Approach', value: 'Clean Architecture, Agile' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-4"
                  style={{
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="mt-1 block text-sm font-medium"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
