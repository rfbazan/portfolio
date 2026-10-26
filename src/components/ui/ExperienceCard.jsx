// src/components/ui/ExperienceCard.jsx
import { useTheme } from '../hooks/ThemeContext'

export default function ExperienceCard({ company, role, dates, description, link }) {
  const { dark } = useTheme()

  return (
    <div className={`rounded-2xl border shadow-sm p-8 flex flex-col gap-4 flex-1 ${
      dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
    }`}>
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={`text-med font-bold tracking-wide ${
              dark ? 'text-slate-100' : 'text-gray-900'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            {company}
          </h3>
          <p
            className={`text-xs font-semibold tracking-widest mt-1 uppercase ${
              dark ? 'text-blue-200' : 'text-blue-800'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            {role}
          </p>
        </div>
        <span className={`text-xs font-medium whitespace-nowrap mt-1 ${
          dark ? 'text-slate-200' : 'text-gray-800'
        }`}>
          {dates}
        </span>
      </div>

      {/* Description */}
      <p className={`text-med leading-relaxed font-dark ${
        dark ? 'text-white' : 'text-black'
      }`}>
        {description}
      </p>

      {/* Optional link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-500 hover:underline tracking-wide self-start"
          style={{ fontVariant: 'small-caps' }}
        >
          Visit Company →
        </a>
      )}
    </div>
  )
}