export const personal = {
  name: 'Karl Onugha',
  title: 'IT Operations & Cloud Engineer',
  tagline: 'IT Operations Engineer with 4+ years of enterprise experience. Transitioning into Cloud Engineering and Full Stack Development.',
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
    role: 'IT Operations / Network & Systems Engineer',
    company: 'ICT Services (Client: Johnson & Johnson)',
    location: 'Cork, Ireland',
    period: 'Jun 2023 – Mar 2026',
    icon: '🏭',
    bullets: [
      'Monitored network traffic and performance using SolarWinds in a regulated manufacturing environment',
      'Participated in incident, problem, and change management via ServiceNow',
      'Managed Azure AD user accounts, security groups, password resets, and access control',
      'Built, configured, and deployed MacOS, iOS, and Windows 10/11 devices for new hires',
      'Supported user onboarding/offboarding including VPN/MFA setup and asset assignment',
      'Collaborated with Network, Compute, Workplace Services, and Security teams',
    ],
  },
  {
    role: 'Systems Support Engineer (Network, Identity & Workplace Services)',
    company: 'ICT Services (Client: Omnicom/TBWA)',
    location: 'Dublin, Ireland',
    period: 'Sep 2022 – Jun 2023',
    icon: '🖥️',
    bullets: [
      'Provisioned and managed MacOS and Windows devices using JAMF and SCCM',
      'Administered Azure Active Directory & Okta MFA for secure enterprise access',
      'Enforced security compliance using FileVault encryption and VPN (Netskope)',
      'Troubleshot network access, DNS, and authentication-related issues',
    ],
  },
  {
    role: 'IT Support Engineer',
    company: 'Mastercard',
    location: 'Dublin, Ireland',
    period: 'Mar 2022 – May 2022',
    icon: '💳',
    bullets: [
      'Deployed and configured Windows and MacOS systems using JAMF and SCCM',
      'Managed incidents via ITSM tools in a global financial services environment',
      'Collaborated with global teams under strict SLA and compliance requirements',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'Viatris',
    location: 'Cork, Ireland',
    period: 'Dec 2021 – Aug 2022',
    icon: '🔧',
    bullets: [
      'Supported IT infrastructure in a manufacturing and regulated environment',
      'Supported production systems including Zebra printers, RF scanners, and tablets',
      'Performed incident analysis and troubleshooting via ServiceNow',
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
