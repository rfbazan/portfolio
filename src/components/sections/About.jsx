// src/components/sections/About.jsx
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/ThemeContext'
import { IconX } from '../ui/Icons'

const base = import.meta.env.BASE_URL

const PHOTOS = [
  { src: `${base}images/waterfall.jpeg`, alt: 'Waterfall', rotate: -6, lift: 8 },
  { src: `${base}images/buggie.jpeg`, alt: 'Buggie', rotate: 3, lift: -6 },
  { src: `${base}images/centralpark.jpeg`, alt: 'Central Park', rotate: -2, lift: 10 },
  { src: `${base}images/sand.jpeg`, alt: 'Sandboarding', rotate: 5, lift: -4 },
  { src: `${base}images/escape.jpeg`, alt: 'Escape Room', rotate: -4, lift: 6 },
]

export default function About() {
  const { dark } = useTheme()
  const [selected, setSelected] = useState(null)

  const bodyText = `text-med leading-loose ${dark ? 'text-white' : 'text-black'}`

  // Close on Escape and lock page scroll while the lightbox is open
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selected])

  return (
    <section id="about" className="py-28 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
 
        {/* Header */}
        <h2
          className={`text-3xl font-bold tracking-wide ${
            dark ? 'text-slate-100' : 'text-gray-900'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          About
        </h2>
 
        {/* Scrapbook photos */}
        <div className="flex justify-center items-center py-6">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              role="button"
              tabIndex={0}
              aria-label={`View larger: ${photo.alt}`}
              onClick={() => setSelected(photo)}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(photo)}
              initial={{ rotate: photo.rotate, y: photo.lift }}
              whileHover={{ scale: 1.15, rotate: 0, y: 0, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ zIndex: i }}
              className={`relative shrink-0 w-24 sm:w-32 md:w-44 lg:w-48 p-1.5 pb-4 sm:p-2 sm:pb-6 rounded-sm shadow-lg border cursor-pointer ${
                i > 0 ? '-ml-4 sm:-ml-6 md:-ml-8' : ''
              } ${dark ? 'bg-slate-100 border-slate-300' : 'bg-white border-gray-400'}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.figure>
          ))}
        </div>
 
        {/* About text */}
        <div className="flex flex-col gap-3 px-20 max-w-5xl mx-auto ">
          <p className={bodyText}>
            I grew up in South Florida and graduated from UF in May 2026 with a B.S. in
            Computer Engineering. I'm a tinkerer at heart, driven by creativity and the
            urge to build things that help others.
          </p>
          <p className={bodyText}>
            At UF I was a TA for Engineering Design &amp; Society and the Community Service
            Lead for the IEEE student branch. Those experiences taught me to work with
            others and to explain complex problems in a way that makes sense to everyone.
          </p>
          <p className={bodyText}>
            Outside of work you'll find me at the gym, on the pickleball court, or perhaps booking a flight to somewhere I've never been before. 
            I thrive outside my comfort zone, and my next steps are taking my career to NYC.
          </p>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key="lightbox"
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selected.alt}
            >
              <motion.img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[70vh] max-w-full rounded-sm shadow-2xl object-contain"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              />
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <IconX size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
 
      </div>
    </section>
  )
}