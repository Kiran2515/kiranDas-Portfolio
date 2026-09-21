import SiteLayout from '@/layouts/SiteLayout'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Architecture from '@/sections/Architecture'
import Journey from '@/sections/Journey'
import Resume from '@/sections/Resume'
import Contact from '@/sections/Contact'

export default function App() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Journey />
      <Resume />
      <Contact />
    </SiteLayout>
  )
}
