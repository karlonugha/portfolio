import { ExternalLink, Lock } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { projects } from '../data/portfolio'

export default function Projects() {
  const cloudProjects = projects.filter(p => p.cloudProject)
  const otherProjects = projects.filter(p => !p.cloudProject)
  const featured = otherProjects.filter(p => p.featured)
  const rest = otherProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-3">// my work</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of projects showcasing cloud deployment, backend systems, and full-stack development.
          </p>
        </div>

        {/* Cloud Projects section */}
        {cloudProjects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">☁️</span>
              <div>
                <h3 className="text-white font-bold text-xl">Cloud Projects</h3>
                <p className="text-gray-500 text-sm mt-0.5">Projects focused on AWS infrastructure, backend systems, and scalable application design.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cloudProjects.map(p => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        )}

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
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div className={`relative bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-6 card-hover flex flex-col ${p.comingSoon ? 'opacity-80' : ''}`}>
      {/* Badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{p.emoji}</span>
        <span className={`text-xs px-2 py-1 rounded-full border font-medium ${
          p.cloudProject
            ? 'text-sky-300 border-sky-400/40 bg-sky-400/10'
            : p.comingSoon
            ? 'text-gray-400 border-gray-600 bg-gray-800/50'
            : 'text-sky-400 border-sky-400/30 bg-sky-400/10'
        }`}>
          {p.badge}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

      {/* Architecture */}
      {p.architecture && (
        <div className="mb-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Architecture & Why</p>
          <ul className="space-y-1">
            {p.architecture.map(a => (
              <li key={a} className="flex items-start gap-2 text-gray-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-1" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Features */}
      {p.keyFeatures && (
        <div className="mb-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">Key Features</p>
          <ul className="space-y-1">
            {p.keyFeatures.map(f => (
              <li key={f} className="flex items-start gap-2 text-gray-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvements */}
      {p.improvements && (
        <div className="mb-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">What I'd Improve</p>
          <ul className="space-y-1">
            {p.improvements.map(imp => (
              <li key={imp} className="flex items-start gap-2 text-gray-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1" />
                {imp}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {p.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
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
            <GithubIcon size={12} /> View Code
          </a>
        ) : null}
      </div>
    </div>
  )
}
