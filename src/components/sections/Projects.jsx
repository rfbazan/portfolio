// src/components/sections/Projects.jsx
import { useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import FilterBar from '../ui/FilterBar'
import { useTheme } from '../hooks/ThemeContext'

export default function Projects({ onCardClick }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const { dark } = useTheme()

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-28 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section header */}
        <div className="flex flex-col gap-6">
          <h2
            className={`text-3xl font-bold tracking-wide ${
              dark ? 'text-slate-100' : 'text-gray-900'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            Projects
          </h2>
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

            {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={onCardClick} />
          ))}
        </div>

      </div>
    </section>
  )
}