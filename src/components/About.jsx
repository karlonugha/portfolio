import { certifications, projects, experience, education } from '../data/portfolio'

export default function About() {
  const totalProjects = projects.filter(p => !p.comingSoon).length

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Bio + Stats ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-sky-400 font-mono text-sm mb-3">// about me</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Technical Background, <span className="gradient-text">Cloud Focus</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I have a background in <strong className="text-white">IT</strong> and have recently
                transitioned into cloud development.
              </p>
              <p>
                I've built and deployed multiple applications using <strong className="text-white">Node.js</strong>,
                Git, and cloud platforms like <strong className="text-white">Vercel</strong>, and I am actively
                developing my skills in <strong className="text-white">AWS architecture</strong>, backend systems,
                and database design.
              </p>
              <p>
                My focus is on building <strong className="text-white">reliable, scalable systems</strong> while
                continuously improving my understanding of cloud infrastructure and best practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: `${totalProjects}+`, label: 'Dev Projects' },
                { value: 'CCNP', label: 'Certified' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-gray-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal + Certs */}
          <div className="space-y-4">
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2 font-mono">karl@portfolio ~ </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <p><span className="text-sky-400">$</span> <span className="text-white">whoami</span></p>
                <p className="text-gray-400">Karl Onugha — IT Ops transitioning to Cloud</p>
                <p className="mt-2"><span className="text-sky-400">$</span> <span className="text-white">cat background.txt</span></p>
                <p className="text-emerald-400">Systems · Networks · IAM · Cloud · Dev</p>
                <p className="mt-2"><span className="text-sky-400">$</span> <span className="text-white">echo $GOAL</span></p>
                <p className="text-yellow-400">🎯 Cloud Engineer / Full Stack Developer</p>
                <p className="mt-2 flex items-center gap-1">
                  <span className="text-sky-400">$</span>
                  <span className="cursor-blink text-white">|</span>
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map(c => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{c.icon}</span>
                      <span className="text-gray-300 text-sm">{c.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      c.status === 'Certified'
                        ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
                        : 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                    }`}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Work Experience ── */}
        <div className="mb-20">
          <p className="text-sky-400 font-mono text-sm mb-3">// career history</p>
          <h2 className="text-3xl font-bold text-white mb-10">Experience That Transfers</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-8">
              {experience.map((e, i) => (
                <div key={i} className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-5 w-4 h-4 rounded-full bg-sky-500 border-2 border-sky-300 hidden md:block" style={{ boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
                  <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-base">{e.role}</h3>
                        <p className="text-sky-400 text-sm mt-0.5">{e.company}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{e.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Education ── */}
        <div>
          <p className="text-sky-400 font-mono text-sm mb-3">// education</p>
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e, i) => (
              <div key={i} className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                <span className="text-3xl">{e.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{e.degree}</h3>
                  <p className="text-sky-400 text-sm mt-1">{e.school}</p>
                  <p className="text-gray-600 text-xs mt-1">{e.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
