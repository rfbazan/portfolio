// src/hooks/useModal.js
import { useState, useEffect } from 'react'

export function useModal() {
  const [selectedProject, setSelectedProject] = useState(null)
  const isOpen = selectedProject !== null

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return { selectedProject, isOpen, openModal, closeModal }
}