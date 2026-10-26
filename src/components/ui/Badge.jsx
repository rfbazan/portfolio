// src/components/ui/Badge.jsx
import { useTheme } from '../hooks/ThemeContext'

export default function Badge({ label }) {
  const { dark } = useTheme()

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider border rounded-full transition-colors duration-300 ${
            dark ? 'border-slate-600 bg-slate-800 text-blue-200' : 'border-blue-400 bg-blue-50 text-blue-900'
          }`}
      style={{ fontVariant: 'small-caps' }}
    >
      {label}
    </span>
  )
}