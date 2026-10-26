// src/components/ui/FilterBar.jsx
import { useTheme } from '../hooks/ThemeContext'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Embedded', value: 'embedded' }
  //{ label: 'Hardware', value: 'hardware' },
]

export default function FilterBar({ active, onChange }) {
  const { dark } = useTheme()

  const base = 'px-4 py-1.5 text-xs font-semibold tracking-widest rounded-full border transition-colors duration-300';

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {filters.map((f) => {
        const isActive = active === f.value

        /* Build the suffix that varies with dark mode *and* active state */
        const suffix = isActive
          ? dark
            ? 'border-blue-400 text-blue-400'          // Active & dark
            : 'border-blue-600 text-blue-600'          // Active & light
          : dark
            ? 'border-gray-800 hover:border-gray-500 hover:text-blue-500' // Inactive & dark
            : 'border-gray-200 hover:border-blue-500 hover:text-blue-500' // Inactive & light

        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`${base} ${suffix}`}
            style={{ fontVariant: 'small-caps' }}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}