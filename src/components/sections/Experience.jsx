// src/components/sections/Experience.jsx
import { experiences } from '../../data/experience'
import ExperienceCard from '../ui/ExperienceCard'
import { useTheme } from '../hooks/ThemeContext'

export default function Experience() {
  const { dark } = useTheme()

  return (
    <section id="experience" className="py-28 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section header */}
        <h2
          className={`text-3xl font-bold tracking-wide ${
            dark ? 'text-slate-100' : 'text-gray-900'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          Experience
        </h2>

          {/* Cards — side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
              description={exp.description}
              link={exp.link}
            />
          ))}
        </div>

      </div>
    </section>
  )
}