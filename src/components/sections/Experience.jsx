// src/components/sections/Experience.jsx
import { motion } from 'framer-motion'
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

        {/* Timeline: vertical line on the left, one node + flip card per role */}
        <ol
          className={`relative ml-2 md:ml-4 flex flex-col gap-12 border-l-2 transition-colors duration-300 ${
            dark ? 'border-slate-700' : 'border-blue-300'
          }`}
        >
          {experiences.map((exp) => (
            <motion.li
              key={exp.id}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Timeline dot (centered on the line) */}
              <span
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 transition-colors duration-300 ${
                  dark
                    ? 'bg-blue-400 border-slate-900'
                    : 'bg-blue-600 border-gray-50'
                }`}
              />

              {/* Dates sit on the timeline, above the card */}
              <p
                className={`mb-3 text-s font-bold tracking-widest ${
                  dark ? 'text-blue-400' : 'text-blue-700'
                }`}
                style={{ fontVariant: 'small-caps' }}
              >
                {exp.dates}
              </p>

              <ExperienceCard
                company={exp.company}
                role={exp.role}
                hook={exp.hook}
                stack={exp.stack}
                bullets={exp.bullets}
                link={exp.link}
                logo={exp.logo}
              />
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  )
}