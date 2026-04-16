export const personal = {
  name: 'Karl Onugha',
  title: 'Cloud Engineer & Full Stack Developer',
  tagline: 'Building scalable cloud infrastructure and modern web applications.',
  email: 'Karlonugha@yahoo.com',
  github: 'https://github.com/karlonugha',
  location: 'Ireland',
  available: true,
}

export const skills = [
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-sky-500 to-blue-600',
    items: ['AWS (EC2, S3, RDS, CloudFront, Route 53)', 'IAM & Security Groups', 'CI/CD Pipelines', 'GitHub Actions', 'Docker (learning)', 'Vercel / Netlify'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    items: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Zustand'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-600',
    items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Python & Automation',
    icon: '🐍',
    color: 'from-yellow-500 to-orange-500',
    items: ['Scripting & Automation', 'Workflow Automation', 'Data Processing', 'CLI Tools', 'File Management', 'API Integration'],
  },
]

export const projects = [
  {
    title: 'Home Automation Dashboard',
    description: 'A smart home control dashboard simulating real IoT device management. Features room-based device control, live notifications, AC temperature, light brightness and colour controls.',
    tech: ['React', 'Zustand', 'Tailwind CSS', 'Vite'],
    live: 'https://home-automation-app.vercel.app',
    github: 'https://github.com/karlonugha/home-automation-app',
    emoji: '🏠',
    color: 'from-sky-500/20 to-indigo-500/20',
    border: 'border-sky-500/30',
    featured: true,
    badge: 'Featured',
  },
  {
    title: 'Pac-Man Arcade Game',
    description: 'A fully featured browser Pac-Man game built with React. Includes ghost AI, power pellets, scared mode, sound effects via Web Audio API, leaderboard, bonus lives and an animated space background.',
    tech: ['React', 'Web Audio API', 'Canvas API', 'Zustand', 'Tailwind CSS'],
    live: 'https://pacman-react.vercel.app',
    github: 'https://github.com/karlonugha/pacman-react',
    emoji: '🕹️',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
    featured: true,
    badge: 'Game',
  },
  {
    title: 'Todo App',
    description: 'A clean, minimal todo application with filtering, localStorage persistence, and a polished UI. Built as a single-file app with no dependencies.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://karlonugha.github.io/todo-app',
    github: 'https://github.com/karlonugha/todo-app',
    emoji: '✅',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    featured: false,
    badge: 'Web App',
  },
  {
    title: 'Food Delivery App',
    description: 'A full-stack food delivery platform inspired by Deliveroo. Features restaurant listings, menu browsing, cart, checkout, order tracking and an admin dashboard. Deployed on AWS.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
    live: null,
    github: null,
    emoji: '🍔',
    color: 'from-red-500/20 to-pink-500/20',
    border: 'border-red-500/30',
    featured: true,
    badge: 'Coming Soon',
    comingSoon: true,
  },
]

export const experience = [
  {
    role: 'Self-Taught Developer',
    company: 'Independent Projects',
    period: '2024 – Present',
    description: 'Building full-stack web applications and cloud infrastructure projects. Focused on React, Node.js, Python automation and AWS deployment.',
    icon: '💻',
  },
  {
    role: 'Home Automation Project',
    company: 'Personal Project',
    period: '2025',
    description: 'Designed and built a simulated smart home dashboard with real-time device state management, notification system and responsive UI.',
    icon: '🏠',
  },
]

export const certifications = [
  { name: 'AWS Free Tier Account', status: 'Active', icon: '☁️', color: 'text-orange-400' },
  { name: 'AWS Solutions Architect', status: 'In Progress', icon: '📚', color: 'text-yellow-400' },
]
