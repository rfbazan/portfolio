// src/components/sections/Contact.jsx
import { IconMail, IconLinkedIn, IconGitHub } from '../ui/Icons'
import { useTheme } from '../hooks/ThemeContext'

const contactLinks = [
  {
    icon: IconMail,
    label: 'Email',
    href: 'mailto:rodrigofbazan@gmail.com',
    display: 'rodrigofbazan@gmail.com',
  },
  {
    icon: IconLinkedIn,
    label: 'LinkedIn',
    href: 'http://linkedin.com/in/rodrigo-bazan-aranda',
    display: 'linkedin.com/in/rodrigo-bazan-aranda',
  },
  {
    icon: IconGitHub,
    label: 'GitHub',
    href: 'https://github.com/RazrGator',
    display: 'github.com/RazrGator',
  },
]

export default function Contact() {
  const { dark } = useTheme()

  return (
    <section id="contact" className="py-28 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2
            className={`text-3xl font-bold tracking-wide ${
              dark ? 'text-slate-100' : 'text-gray-900'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            Contact
          </h2>
          <p className={`text-sm font-medium tracking-wide ${
            dark ? 'text-slate-200' : 'text-gray-800'
          }`}>
            Feel free to reach out at any time! This sums up my availability:
          </p>
          <p className={`text-sm font-medium tracking-wide font-style: italic ${
            dark ? 'text-slate-300' : 'text-gray-700'
          }`}>
            "Here's my card. It's got my cell number, my pager number, my home number and my other pager number. I never take vacations, I never get sick. And I don't celebrate any major holidays." - Dwight Schrute
          </p>
        </div>

          {/* Links */}
        <div className="flex flex-col gap-5">
          {contactLinks.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <span className="text-blue-500 group-hover:text-blue-600 transition-colors">
                <Icon size={30} />
              </span>
              <span
                className={`font-medium group-hover:text-blue-600 transition-colors tracking-wide ${
                  dark ? 'text-white' : 'text-black'
                }`}
                style={{ fontVariant: 'small-caps' }}
              >
                {display}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}