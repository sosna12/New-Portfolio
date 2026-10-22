import {
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  Globe,
  Layers3,
  Palette,
  ServerCog,
} from 'lucide-react'

export const personalInfo = {
  name: 'Sosna Adugna',
  role: 'Software Engineering Student | Aspiring Full-Stack Developer',
  location: 'Ethiopia',
  objective: 'Secure an internship and become a professional software engineer.',
  summary:
    "I build responsive websites and practical software solutions that solve real problems. I'm passionate about technology, continuous learning, and creating meaningful digital experiences.",
  about:
    'I am a Software Engineering student with a strong interest in building practical digital products, learning by doing, and solving real-world problems through code. I enjoy exploring the full software lifecycle, from understanding user needs and designing clean interfaces to implementing reliable functionality and improving user experience. My goal is to contribute to meaningful projects, keep growing as a developer, and secure an internship opportunity that helps me transition into professional software engineering.',
  promise:
    'I bring curiosity, discipline, and a problem-solving mindset to every project. I value clean code, thoughtful design, and continuous improvement as I work toward becoming a dependable full-stack developer.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = {
  github: 'https://github.com/sosna12/',
  linkedin: 'https://www.linkedin.com/in/sosna-adugna-69354a441/',
  email: 'mailto:sosadu3@gmail.com',
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['C++', 'Java', 'Python', 'PHP', 'C#'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Frameworks & Technologies',
    icon: Layers3,
    items: ['Django', 'Flask', 'React', 'Java Servlets', 'JSP'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MySQL','PostgreSQL', 'SQLite', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: FileCode2,
    items: ['Git', 'GitHub', 'VS Code', 'Apache NetBeans'],
  },
  {
    title: 'Design',
    icon: Palette,
    items: ['UI/UX fundamentals', 'Graphic design'],
  },
]

export const projects = [
  {
    title: 'Personal Developer Portfolio',
    image: '/images/project-portfolio.png',
    problem: 'Needed a clean digital presence that clearly communicates my technical skills and project work to recruiters and potential clients.',
    features: ['Responsive portfolio layout', 'Section-based storytelling', 'Strong call-to-action design'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://sosna12.github.io/MyPortfolio/',
    source: '#',
  },
  {
    title: 'Weather Forecast Application',
    image: '/images/project-weather.png',
    problem: 'Wanted a simple interface to check current weather and forecast conditions using live data from an external API.',
    features: ['Live weather lookup', 'City-based search', 'Clean dashboard presentation'],
    technologies: ['Python', 'Flask', 'OpenWeather API'],
    demo: 'https://weatherappsosna.onrender.com/',
    source: 'https://github.com/sosna12/WeatherApp',
  },
  {
    title: 'Smart Electronics E-Commerce Web Application',
    image: '/images/project-ecommerce.png',
    problem: 'Needed a functional e-commerce experience for electronic products with a database-driven product flow and user-friendly browsing.',
    features: ['Product catalog', 'Database-backed listings', 'Web application structure'],
    technologies: ['Java Servlets', 'JSP', 'MySQL'],
    demo: 'https://github.com/sosna12/SmartElectronics',
    source: 'https://github.com/sosna12/SmartElectronics',
  },
  {
    title: 'Consulting Company Website',
    image: '/images/project-consulting.png',
    problem: 'Required a modern business web presence for presenting services, trust-building content, and clear contact points.',
    features: ['Professional layout', 'Responsive design', 'Service-focused presentation'],
    technologies: ['React', 'JavaScript', 'CSS'],
    demo: 'https://3a-consulting.vercel.app/',
    source: 'https://github.com/sosna12/3a-consulting',
  },
]

export const services = [
  {
    title: 'Responsive Website Development',
    description: 'Building mobile-friendly, accessible websites that provide a polished experience across screen sizes.',
    icon: Globe,
  },
  {
    title: 'Frontend Development',
    description: 'Crafting intuitive interfaces with attention to usability, visual design, and responsive behavior.',
    icon: FileCode2,
  },
  {
    title: 'Backend Development',
    description: 'Implementing server-side logic, data handling, and application workflows to support web projects.',
    icon: ServerCog,
  },
  {
    title: 'Database-Driven Web Applications',
    description: 'Creating data-aware systems that store, retrieve, and present information efficiently and securely.',
    icon: Database,
  },
  {
    title: 'Portfolio and Business Website Design',
    description: 'Designing professional online presences that help individuals and small businesses communicate value clearly.',
    icon: BriefcaseBusiness,
  },
]

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  university: 'Debre Markos University, Ethiopia',
  status: 'Currently pursuing the degree',
  expectedGraduation: 'Expected graduation year: 2027',
  note: 'Academic focus includes software development, systems design, and practical problem solving.',
}


export const contactDetails = {
  phone: '+251 962 541 317',
  email: 'sosadu3@gmail.com',
  location: 'Ethiopia',
  availability: 'Open to internships, collaborations, and freelance opportunities',
}
