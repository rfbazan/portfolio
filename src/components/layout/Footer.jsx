// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <p
        className="text-xs font-medium tracking-widest text-gray-500 uppercase"
        style={{ fontVariant: 'small-caps' }}
      >
        Designed & Built by Rodrigo Bazan · {new Date().getFullYear()}
      </p>
    </footer>
  )
}