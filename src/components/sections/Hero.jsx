// src/components/sections/Hero.jsx
import { useTheme } from '../hooks/ThemeContext'
import Badge from '../ui/Badge'
import { IconGitHub, IconLinkedIn, IconResume, IconMail } from '../ui/Icons'

const base = import.meta.env.BASE_URL

const iconLinks = [
  { icon: IconGitHub, href: 'https://github.com/RazrGator', label: 'GitHub' },
  { icon: IconLinkedIn, href: 'http://linkedin.com/in/rodrigo-bazan-aranda', label: 'LinkedIn' },
  { icon: IconMail, href: 'mailto:rodrigofbazan@gmail.com', label: 'Email' },
  { icon: IconResume, href: `${base}resume.pdf`, label: 'Resume' },
]

export default function Hero() {
  const { dark } = useTheme()
  const skills = ["Python", "Java", "SQL", "Git", "React", "C/C++", "Flask", "Node.js", "JavaScript"]

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-8 pt-24 pb-16"
    >
      {/* Top: photo + text side by side */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-stretch gap-12">

        {/* Left — DESKTOP ONLY tall rectangular headshot (hidden below md) */}
        <div className="hidden md:block flex-shrink-0 md:w-80">
          <div className={`w-full h-full min-h-96 rounded-2xl overflow-hidden shadow-md ${
            dark ? 'bg-slate-700' : 'bg-blue-50'
          }`}>
            <img
              src={`${base}images/gown_portrait.JPEG`}
              alt="Rodrigo Bazan"
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Right — name, tagline, intro, icons */}
        <div className="flex flex-col justify-center gap-6 flex-1">

          {/* Name row: name on the left, + circular headshot on the right (mobile only) */}
          <div className="flex items-center justify-between gap-4">
            <h1
              className={`text-4xl sm:text-7xl md:text-7xl font-extrabold leading-tight tracking-wide ${
                dark ? 'text-slate-100' : 'text-gray-950'
              }`}
              style={{ fontVariant: 'small-caps' }}
            >
              Rodrigo<br className="md:hidden" /> Bazan
            </h1>

            {/* ===== MOBILE ONLY headshot — edit size / crop / ring here ===== */}
            <div className={`ring-1 ring-gray-700 md:hidden shrink-0 h-32 w-32 sm:h-50 sm:w-50 rounded-full overflow-hidden shadow-md${
              dark ? 'bg-slate-700' : 'bg-blue-50'
            }`}>
              <img
                src={`${base}images/gown_portrait.JPEG`}
                alt="Rodrigo Bazan"
                className="w-full h-full object-cover object-[center_15%] scale-200 origin-[48%_50%]"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            {/* ===== end mobile only ===== */}
          </div>

          {/* Tagline */}
          <p className={`text-base font-medium tracking-wide ${
            dark ? 'text-blue-400' : 'text-blue-700'
          }`}>
            Developer · Full-Stack & Automation
            <br></br>
            B.S. Computer Engineering · University of Florida
          </p>

          {/* Divider */}
          <div className={`w-50 h-px ${dark ? 'bg-orange-500' : 'bg-orange-600'}`} />

          {/* Intro blurb */}
          <p className={`text-med font-medium leading-loose max-w-[50vh] ${
            dark ? 'text-white' : 'text-black'
          }`}>
            I'm an Associate Engineer at ITC Holdings, a U.S. power grid company, where I build tools that automate slow, 
            manual engineering work. One Python tool I built turns a 16-step Windows workflow into a single click,
            saving time across our 10-person group every time it runs. 
          </p>
          <p className={`text-med font-medium leading-loose max-w-[50vh] ${
            dark ? 'text-white' : 'text-black'
          }`}>
            I'm looking for software engineering roles in New York City.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          {/* Icon links */}
          <div className="flex items-center gap-6 pt-2">
            {iconLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-colors hover:text-blue-600 ${
                  dark ? 'text-slate-300' : 'text-gray-700'
                }`}
              >
                <Icon size={36} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom — View Work centered below everything */}
      <div className="mt-14 flex flex-col items-center gap-2">
        <a
          href="#projects"
          className={`text-s font-semibold tracking-widest transition-colors hover:text-blue-600 flex flex-col items-center gap-2 ${
            dark ? 'text-slate-400' : 'text-gray-600'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          View My Work
          <span className={`block w-px h-8 ${dark ? 'bg-slate-600' : 'bg-gray-400'}`} />
        </a>
      </div>

    </section>
  )
}