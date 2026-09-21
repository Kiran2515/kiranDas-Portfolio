import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/SectionHeading'

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${profile.email}?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.name} (${formState.email})`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="section-pad" ref={ref}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Interested in working together? Feel free to reach out."
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="fade-in space-y-6">
            <div>
              <h3
                className="mb-4 text-lg font-semibold"
                style={{ color: 'var(--text)' }}
              >
                Let's Connect
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                I'm always open to discussing new projects, opportunities, or just
                having a conversation about technology and software development.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone / Mobile number */}
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary, var(--muted))' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Call / WhatsApp
                  </span>
                  <span className="font-medium text-[var(--text)]">{profile.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary, var(--muted))' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Email
                  </span>
                  <span className="font-medium text-[var(--text)]">{profile.email}</span>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary, var(--muted))' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <LinkedInIcon size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    LinkedIn
                  </span>
                  <span className="font-medium text-[var(--text)]">Connect on LinkedIn</span>
                </div>
              </a>

              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: 'var(--text-secondary, var(--muted))' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Location
                  </span>
                  <span className="font-medium text-[var(--text)]">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="fade-in rounded-xl p-6"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--line)',
            }}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--muted)' }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    color: 'var(--text)',
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--muted)' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    color: 'var(--text)',
                  }}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--muted)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full resize-none rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    color: 'var(--text)',
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.01]"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                }}
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
