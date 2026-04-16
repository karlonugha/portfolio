import { Mail, MapPin, Send } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { personal } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-3">// get in touch</p>
          <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm actively looking for Cloud Engineer and Full Stack Developer roles.
            If you have an opportunity or just want to connect, reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <a href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                    <Mail size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">Email</p>
                    <p className="text-sm">{personal.email}</p>
                  </div>
                </a>

                <a href={personal.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <GithubIcon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">GitHub</p>
                    <p className="text-sm">github.com/karlonugha</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <MapPin size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">Location</p>
                    <p className="text-sm">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-sky-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-medium text-sm">Available for hire</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to <strong className="text-white">Cloud Engineer</strong> and <strong className="text-white">Full Stack Developer</strong> roles.
                Remote or Ireland-based positions welcome.
              </p>
            </div>
          </div>

          {/* Quick message */}
          <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `mailto:${personal.email}?subject=Opportunity for Karl&body=${encodeURIComponent(e.target.message.value)}`
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-gray-500 text-xs mb-1.5 block">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs mb-1.5 block">Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Hi Karl, I'd like to discuss an opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
