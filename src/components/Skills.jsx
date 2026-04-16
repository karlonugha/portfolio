import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-3">// tech stack</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A focused set of tools for building and deploying modern cloud-native applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div
              key={s.category}
              className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6 card-hover"
            >
              {/* Header */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="text-white font-semibold mb-4">{s.category}</h3>

              {/* Items */}
              <ul className="space-y-2">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tool badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Git', 'GitHub', 'VS Code', 'Kiro AI', 'Vercel', 'Netlify', 'Linux', 'Bash', 'JSON', 'REST APIs'].map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
