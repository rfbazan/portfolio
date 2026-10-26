// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { IconResume } from '../ui/Icons'
import { useTheme } from '../hooks/ThemeContext'

const base = import.meta.env.BASE_URL

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggleDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-slate-900/85 backdrop-blur-sm shadow-sm'
            : 'bg-gray-100/65 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#hero"
          className={`text-sm font-bold tracking-widest uppercase hover:text-blue-600 transition-colors ${
            dark ? 'text-white' : 'text-black'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          Rodrigo Bazan
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-semibold tracking-widest uppercase hover:text-blue-600 transition-colors ${
                  dark ? 'text-slate-100' : 'text-gray-900'
                }`}
                style={{ fontVariant: 'small-caps' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

          {/* Dark Mode button */}
        <button
          onClick={toggleDark}
          className={`hover:text-blue-600 transition-colors text-lg ${
            dark ? 'text-slate-400' : 'text-gray-600'
          }`}
          aria-label="Toggle dark mode"
        >
          {dark ? '◐' : '◑'}
        </button>

          {/* Resume button */}
        <a
          href={`${base}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all"
          style={{ fontVariant: 'small-caps' }}
        >
          <IconResume size={13} />
          Resume
        </a>

      </nav>
    </header>
  )
}