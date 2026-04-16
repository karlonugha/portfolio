import { ExternalLink, Lock } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { projects } from '../data/portfolio'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-3">// my work</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of projects showcasing cloud deployment, full-stack development and creative problem solving.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(p => (
              <ProjectCard key={p.title} project={p} small />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project: p, small }) {
  return (
    <div className={`relative bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-6 card-hover flex flex-col ${p.comingSoon ? 'opacity-80' : ''}`}>
      {/* Badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{p.emoji}</span>
        <span className={`text-xs px-2 py-1 rounded-full border font-medium ${
          p.comingSoon
            ? 'text-gray-400 border-gray-600 bg-gray-800/50'
            : 'text-sky-400 border-sky-400/30 bg-sky-400/10'
        }`}>
          {p.badge}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {p.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        {p.live && !p.comingSoon ? (
          <a href={p.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <ExternalLink size={12} /> Live Demo
          </a>
        ) : p.comingSoon ? (
          <span className="flex items-center gap-1.5 px-4 py-2 bg-white/5 text-gray-500 text-xs rounded-lg cursor-not-allowed">
            <Lock size={12} /> In Progress
          </span>
        ) : null}

        {p.github && !p.comingSoon ? (
          <a href={p.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white text-xs font-medium rounded-lg hover:bg-white/20 transition-colors">
            <GithubIcon size={12} /> Code
          </a>
        ) : null}
      </div>
    </div>
  )
}
