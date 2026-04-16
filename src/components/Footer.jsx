import { personal } from '../data/portfolio'
import { Mail, Heart } from 'lucide-react'
import GithubIcon from './GithubIcon'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">K</span>
          <span className="text-gray-500 text-sm">Karl Onugha</span>
        </div>

        <p className="text-gray-600 text-xs flex items-center gap-1">
          Built with <Heart size={10} className="text-red-400" /> using React & Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={`mailto:${personal.email}`}
            className="text-gray-600 hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
