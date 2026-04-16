import { certifications } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-sky-400 font-mono text-sm mb-3">// about me</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate about <span className="gradient-text">Cloud & Code</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm Karl Onugha, a self-taught developer based in Ireland with a strong focus on
                <strong className="text-white"> cloud engineering</strong> and
                <strong className="text-white"> full-stack development</strong>.
              </p>
              <p>
                I build modern web applications using React and Node.js, automate workflows with
                Python, and architect cloud infrastructure on AWS. I'm passionate about writing
                clean, efficient code and deploying scalable solutions.
              </p>
              <p>
                Currently expanding my AWS expertise toward the
                <strong className="text-white"> Solutions Architect certification</strong>,
                while building production-ready full-stack projects to demonstrate real-world skills.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '4+', label: 'Projects Built' },
                { value: 'AWS', label: 'Free Tier Active' },
                { value: '100%', label: 'Self-Taught' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-gray-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — certifications + terminal */}
          <div className="space-y-4">
            {/* Terminal card */}
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2 font-mono">karl@portfolio ~ </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <p><span className="text-sky-400">$</span> <span className="text-white">whoami</span></p>
                <p className="text-gray-400">Karl Onugha — Cloud Engineer & Full Stack Dev</p>
                <p className="mt-2"><span className="text-sky-400">$</span> <span className="text-white">cat skills.txt</span></p>
                <p className="text-emerald-400">AWS · React · Node.js · Python · PostgreSQL</p>
                <p className="mt-2"><span className="text-sky-400">$</span> <span className="text-white">echo $STATUS</span></p>
                <p className="text-yellow-400">🟢 Open to Cloud & Fullstack roles</p>
                <p className="mt-2 flex items-center gap-1">
                  <span className="text-sky-400">$</span>
                  <span className="text-white">_</span>
                  <span className="cursor-blink text-white">|</span>
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4">Certifications & Learning</h3>
              <div className="space-y-3">
                {certifications.map(c => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-gray-300 text-sm">{c.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      c.status === 'Active'
                        ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
                        : 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                    }`}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
