// src/components/ui/LightboxImage.jsx
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconX } from './Icons'
import { useTheme } from '../hooks/ThemeContext'

export default function LightboxImage({ src, alt }) {
  const [open, setOpen] = useState(false)
  const { dark } = useTheme()

  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        onClick={() => setOpen(true)}
        className={`w-full h-40 rounded-xl overflow-hidden border cursor-zoom-in group relative ${
          dark ? 'bg-slate-700 border-slate-600' : 'bg-blue-50 border-gray-100'
        }`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold tracking-widest"
            style={{ fontVariant: 'small-caps' }}>
            View
          </span>
        </div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <IconX size={20} />
            </button>

            {/* Full image — stop click propagation so clicking image doesn't close */}
            <motion.img
              key="lightbox-img"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}