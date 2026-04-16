import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { personal } from '../data/portfolio'
import { useState } from 'react'

// 👇 Replace this with your Formspree endpoint after signing up at formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const email = `${personal.emailUser}@${personal.emailDomain}`

  const handleEmailClick = () => {
    setEmailRevealed(true)
    window.open(`mailto:${email}`, '_blank')
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-full text-left">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                    <Mail size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">Email</p>
                    <p className="text-sm">{emailRevealed ? email : 'Click to reveal & contact'}</p>
                  </div>
                </button>

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

                <a href={personal.linkedin} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">LinkedIn</p>
                    <p className="text-sm">linkedin.com/in/karl-onugha</p>
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

          {/* Contact form */}
          <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-6">Send a Message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
                <CheckCircle size={48} className="text-emerald-400" />
                <div>
                  <p className="text-white font-semibold">Message sent!</p>
                  <p className="text-gray-400 text-sm mt-1">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sky-400 text-sm hover:text-sky-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block">Your Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block">Your Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Karl, I'd like to discuss an opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading'
                    ? <><Loader size={16} className="animate-spin" /> Sending...</>
                    : <><Send size={16} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
