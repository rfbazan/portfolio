// src/App.jsx
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import ProjectModal from './components/ui/ProjectModal'
import { useModal } from './components/hooks/useModal'
import { useDarkMode } from './components/hooks/useDarkMode'
import { ThemeContext } from './components/hooks/ThemeContext'

export default function App() {
  const { selectedProject, isOpen, openModal, closeModal } = useModal()
  const { dark, toggleDark } = useDarkMode()

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      dark ? 'bg-[#15161a] text-slate-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      <main>
        <Hero />
        <Projects onCardClick={openModal} />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} isOpen={isOpen} onClose={closeModal} />
    </div>
  </ThemeContext.Provider>
  )
}