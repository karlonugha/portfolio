export const personal = {
  name: 'Karl Onugha',
  title: 'Cloud-Focused Developer',
  tagline: 'I build and deploy web applications using Node.js and modern cloud platforms. Currently focused on developing scalable and cost-efficient solutions using AWS, with hands-on experience deploying live applications and managing backend services.',
  // Email split to prevent bot scraping — joined at runtime
  emailUser: 'karlonugha',
  emailDomain: 'yahoo.com',
  github: 'https://github.com/karlonugha',
  linkedin: 'https://linkedin.com/in/karl-onugha-28217b98',
  location: 'Cork, Ireland',
  available: true,
  phone: '+353 899527578',
}

export const skills = [
  {
    category: 'Cloud & AWS',
    icon: '☁️',
    color: 'from-sky-500 to-blue-600',
    items: ['AWS (EC2, S3, IAM, VPC, Lambda, ECS)', 'Azure AD', 'IAM & Security Groups', 'CI/CD Pipelines', 'GitHub Actions', 'Vercel / Netlify'],
  },
  {
    category: 'Networking & Security',
    icon: '🔐',
    color: 'from-violet-500 to-purple-600',
    items: ['CCNP Routing & Switching', 'DNS, TCP/IP, DHCP, VLANs', 'Okta MFA', 'Fortinet NSE1/2/3', 'SolarWinds Monitoring', 'VPN & Wireless Networks'],
  },
  {
    category: 'Systems & DevOps',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-600',
    items: ['MacOS, Windows 10/11', 'Linux', 'JAMF / SCCM', 'ServiceNow, BMC Helix', 'SAP, Citrix', 'Node.js & Express'],
  },
  {
    category: 'Development',
    icon: '💻',
    color: 'from-yellow-500 to-orange-500',
    items: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'Python Scripting', 'PostgreSQL', 'REST APIs'],
  },
]

export const projects = [
  {
    title: 'Cloud Task Manager API',
    description: 'Built and deployed a RESTful API using Node.js, hosted on AWS EC2, with a PostgreSQL database on RDS. Implements user creation, task management (create, update, delete), secure access via security groups, and is designed for scalability and maintainability.',
    keyFeatures: [
      'REST API endpoints for users and tasks',
      'PostgreSQL on AWS RDS for persistent data storage',
      'Deployed on AWS EC2 with security group configuration',
      'Backend connected to cloud database for live access',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'AWS EC2', 'AWS RDS', 'GitHub'],
    live: 'http://3.249.216.92:3000',
    github: 'https://github.com/karlonugha/cloud-task-manager-api',
    emoji: '☁️',
    color: 'from-sky-500/20 to-blue-600/20',
    border: 'border-sky-500/30',
    featured: true,
    badge: 'Cloud Project',
    comingSoon: false,
    cloudProject: true,
  },
  {
    title: 'Home Automation Dashboard',
    description: 'Built a web application using React that allows users to control and monitor smart home devices. Features room-based device control, live notifications, AC temperature, light brightness and colour controls, deployed live for public access.',
    keyFeatures: [
      'Room-based device control interface',
      'Real-time state management with Zustand',
      'Live notifications panel',
      'Deployed live for public access',
    ],
    tech: ['React', 'Zustand', 'Tailwind CSS', 'Vite', 'Vercel'],
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
    description: 'Built a web application using React that allows users to play a fully featured browser-based Pac-Man game. Includes ghost AI, power pellets, sound effects via Web Audio API, and a leaderboard. Deployed live for public access.',
    keyFeatures: [
      'Ghost AI with scared mode and pathfinding',
      'Sound effects via Web Audio API',
      'Leaderboard with score persistence',
      'Deployed live for public access',
    ],
    tech: ['React', 'Web Audio API', 'Canvas API', 'Zustand', 'Tailwind CSS', 'Vercel'],
    live: 'https://pacman-react.vercel.app',
    github: 'https://github.com/karlonugha/pacman-react',
    emoji: '🕹️',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
    featured: true,
    badge: 'Featured',
  },
  {
    title: 'Todo App',
    description: 'Built a web application using vanilla JavaScript that allows users to manage tasks with filtering and localStorage persistence. Clean, minimal UI with no dependencies, deployed live for public access.',
    keyFeatures: [
      'Task filtering and status management',
      'localStorage persistence across sessions',
      'Zero-dependency single-file architecture',
      'Deployed live for public access',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    live: 'https://karlonugha.github.io/todo-app',
    github: 'https://github.com/karlonugha/todo-app',
    emoji: '✅',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    featured: false,
    badge: 'Web App',
  },
]

export const experience = [
  {
    role: 'IT Operations & Systems Engineer',
    company: 'Enterprise IT Environments',
    location: 'Ireland',
    period: '2021 – 2026',
    icon: '🖥️',
    bullets: [
      'Managed and monitored infrastructure including servers, switches, and network hardware across enterprise environments',
      'Administered identity and access management using Azure AD, Okta MFA, and VPN — directly transferable to cloud IAM',
      'Deployed and configured MacOS, Windows, and iOS devices at scale using JAMF and SCCM',
      'Resolved hardware, software, network, and access incidents via ITSM platforms (ServiceNow, BMC Helix)',
      'Maintained network stability across site infrastructure with experience in DNS, TCP/IP, DHCP, and VLANs',
      'Worked in regulated and compliance-driven environments requiring strong documentation and change management',
    ],
  },
  {
    role: 'Independent Operations & Logistics',
    company: 'Self-Managed Role',
    location: 'Ireland',
    period: '2020 – 2021',
    icon: '📦',
    bullets: [
      'Managed time-critical operations independently, building strong prioritisation and problem-solving skills',
      'Handled customer-facing interactions requiring clear communication under pressure',
      'Used this period to self-study cloud computing, networking, and development — earning CCNA and beginning AWS training',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Network and Information Security',
    school: 'Griffith College, Limerick',
    period: '2019 – 2020',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Software Engineering',
    school: 'American University of Nigeria',
    period: '2010 – 2014',
    icon: '🎓',
  },
]

export const certifications = [
  { name: 'CCNA – Routing & Switching', status: 'Certified', icon: '🌐', color: 'text-sky-400' },
  { name: 'CCNP – Routing & Switching', status: 'Certified', icon: '🌐', color: 'text-sky-400' },
  { name: 'Fortinet NSE1, NSE2 & NSE3', status: 'Certified', icon: '🔐', color: 'text-emerald-400' },
  { name: 'AWS Solutions Architect', status: 'In Progress', icon: '☁️', color: 'text-orange-400' },
]
