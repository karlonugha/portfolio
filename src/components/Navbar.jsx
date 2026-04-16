import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">K</span>
          <span className="font-semibold text-white">Karl Onugha</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm transition-colors">
              {l}
            </a>
          ))}
          <a
            href="mailto:Karlonugha@yahoo.com"
            className="px-4 py-2 bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d1a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white text-sm py-1">
              {l}
            </a>
          ))}
          <a href="mailto:Karlonugha@yahoo.com"
            className="px-4 py-2 bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm rounded-lg font-medium text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
