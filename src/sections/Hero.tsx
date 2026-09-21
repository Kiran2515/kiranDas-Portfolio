import { profile } from '@/data/profile'
import SocialLinks from '@/components/SocialLinks'
import profilePhoto from '@/assets/profile-photo.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-24 pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (matching reference text arrangement) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* "Hi, I'm Joe Greyson" -> "Hi, I'm Kiran Das" */}
            <h1 className="reveal text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] leading-none">
              <span style={{ color: 'var(--text)' }}>Hi, I'm </span>
              <span style={{ color: 'var(--accent)' }}>{profile.name}</span>
            </h1>

            {/* "Frontend Developer" -> ".NET Software Developer" */}
            <h2
              className="reveal delay-1 mt-3.5 text-2xl font-bold tracking-tight sm:text-3xl md:text-[2.2rem]"
              style={{ color: 'var(--text)' }}
            >
              {profile.title}
            </h2>

            {/* Tagline / Subtitle description paragraph */}
            <p
              className="reveal delay-2 mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--muted)' }}
            >
              {profile.tagline}
            </p>

            {/* Metrics */}
            <div className="reveal delay-3 mt-6 flex flex-wrap items-center gap-6">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span
                    className="text-2xl font-extrabold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--muted)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons: "Hire Me" (solid purple) & "See Projects" (purple outline) */}
            <div className="reveal delay-4 mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:opacity-95"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 8px 20px var(--accent-glow)',
                }}
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border-2 px-7 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                  background: 'transparent',
                }}
              >
                See Projects
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-[var(--accent-soft)]"
                style={{
                  borderColor: 'var(--line)',
                  color: 'var(--muted)',
                }}
              >
                Download CV
              </a>
            </div>

            {/* Circular Purple Social Badges in bottom-left corner */}
            <div className="reveal delay-5 mt-10">
              <SocialLinks size={16} solidPurple={true} />
            </div>
          </div>

          {/* Right Column: Hero Profile Image (Exact pose & positioning like reference) */}
          <div className="reveal delay-2 relative flex justify-center lg:col-span-5 lg:justify-end">
            {/* Subtle soft gradient background glow */}
            <div
              className="absolute inset-0 -z-10 rounded-full filter blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                transform: 'scale(1.2)',
              }}
            />

            {/* Framed Image */}
            <div
              className="relative w-full max-w-[390px] overflow-hidden rounded-3xl sm:max-w-[440px]"
              style={{
                border: '1px solid var(--line)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                background: 'var(--bg-elevated)',
              }}
            >
              <img
                src={profilePhoto}
                alt={`${profile.name} - ${profile.title}`}
                className="h-[480px] w-full object-cover object-top sm:h-[540px]"
                loading="eager"
              />

              {/* Status pill overlay */}
              <div
                className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full animate-pulse"
                    style={{ background: '#10b981' }}
                  />
                  <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>
                    Open to opportunities
                  </span>
                </div>
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  .NET Core 8 & Cloud
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
