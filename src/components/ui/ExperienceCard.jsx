// src/components/ui/ExperienceCard.jsx
import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/ThemeContext'
import Badge from './Badge'

export default function ExperienceCard({
  company,
  role,
  hook,
  stack = [],
  bullets = [],
  link,
  logo,
}) {
  const { dark } = useTheme()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`rounded-xl border border-l-4 shadow-sm transition-colors duration-300 ${
        dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      } ${open ? 'border-l-orange-500' : dark ? 'border-l-slate-600' : 'border-l-gray-300'}`}
    >
      {/* Tab header: always visible, toggles the panel */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 p-5 text-left cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-bold tracking-wide leading-snug ${
              dark ? 'text-white' : 'text-black'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            {role}
          </h3>
          <p className={`text-sm font-semibold ${dark ? 'text-blue-200' : 'text-blue-800'}`}>
            {company}
          </p>
          <div className="flex flex-wrap gap-1 pt-2">
                  {stack.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))} 
                </div>
        </div>

        {/* Company logo  */}
        <div
          className="h-12 shrink-0 overflow-hidden rounded-lg border border-gray-300 flex items-center justify-center"
        >
            <img src={logo} alt={`${company} logo`} className="h-full w-full object-contain" />
        </div>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 ${dark ? 'text-slate-400' : 'text-gray-500'}`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8l5 5 5-5" />
          </svg>
        </motion.span>
      </button>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className={`mx-5 mb-5 pt-4 flex flex-col gap-4 border-t ${
                dark ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <p className={`leading-relaxed ${dark ? 'text-white' : 'text-black'}`}>
                {hook}
              </p>

              <ul
                className={`flex flex-col gap-2 pl-5 list-disc leading-relaxed ${
                  dark ? 'text-white marker:text-blue-400' : 'text-black marker:text-blue-600'
                }`}
              >
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2">
                
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider border rounded-full transition-colors duration-300 ${
                      dark
                        ? 'border-slate-800 bg-slate-800 text-blue-400 hover:bg-blue-500/20'
                        : 'border-white bg-white text-blue-600 hover:bg-blue-100'
                    }`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    Company Site →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}