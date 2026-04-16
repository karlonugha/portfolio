import { Mail, MapPin, ArrowDown } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { personal } from '../data/portfolio'
import { useEffect, useRef } from 'react'

const ROLES = [
  'Cloud Engineer',
  'Full Stack Developer',
  'Python Automation',
  'AWS Architect',
  'React Developer',
]

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let timeout

    function type() {
      const current = ROLES[roleIdx]
      if (!deleting) {
        charIdx++
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx)
        if (charIdx === current.length) {
          deleting = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        charIdx--
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx)
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % ROLES.length
        }
      }
      timeout = setTimeout(type, deleting ? 50 : 80)
    }

    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Available badge */}
        {personal.available && (
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>
        )}

        {/* Avatar placeholder */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-float">
          K
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {personal.name}
        </h1>

        {/* Typing role */}
        <div className="text-xl md:text-2xl text-gray-400 mb-6 h-8 flex items-center justify-center gap-1">
          <span ref={roleRef} className="gradient-text font-semibold" />
          <span className="cursor-blink gradient-text font-semibold">|</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
          >
            View My Work
          </a>
          <a
            href="mailto:Karlonugha@yahoo.com"
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 text-gray-500">
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm">
            <GithubIcon size={16} /> GitHub
          </a>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <a href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors text-sm">
            <Mail size={16} /> Email
          </a>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="flex items-center gap-2 text-sm">
            <MapPin size={16} /> {personal.location}
          </span>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  )
}
