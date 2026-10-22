import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'
import {
  contactDetails,
  education,
  navLinks,
  personalInfo,
  projects,
  services,
  skillGroups,
  socialLinks,
} from './data/portfolioData'

const rotatingWords = [
  'Software Engineering Student',
  'Full-Stack Developer',
  'Problem Solver',
  'Creative Developer',
]

const skillIcons = {
  'C++': { label: 'C++', color: '#659ad2' },
  Java: { label: 'J', color: '#ed8b00' },
  Python: { label: 'Py', color: '#3776ab' },
  PHP: { label: 'php', color: '#777bb4' },
  'C#': { label: 'C#', color: '#9b4f96' },
  HTML: { label: '5', color: '#e34f26' },
  CSS: { label: '3', color: '#1572b6' },
  JavaScript: { label: 'JS', color: '#f7df1e' },
  Bootstrap: { label: 'B', color: '#7952b3' },
  Django: { label: 'Dj', color: '#44b78b' },
  Flask: { label: 'Fl', color: '#d9e2ec' },
  React: { label: 'R', color: '#61dafb' },
  'Java Servlets': { label: 'J', color: '#ed8b00' },
  JSP: { label: 'JSP', color: '#ed8b00' },
  MySQL: { label: 'SQL', color: '#4479a1' },
  Git: { label: 'Git', color: '#f05032' },
  GitHub: { label: 'GH', color: '#d9e2ec' },
  'VS Code': { label: 'VS', color: '#007acc' },
  'Apache NetBeans': { label: 'NB', color: '#a72145' },
  'UI/UX fundamentals': { label: 'UI', color: '#a78bfa' },
  'Graphic design': { label: 'GD', color: '#ec4899' },
}

function GithubIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.626-5.48 5.92.43.372.814 1.103.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

function SkillCard({ title, icon: Icon, items }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <div className="skill-icon-wrap">
          <Icon size={18} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags" aria-label={`${title} skills`}>
        {items.map((item) => (
          <span key={item} className="skill-tag">
            <span
              className="skill-tag-icon"
              style={{ '--skill-icon-color': skillIcons[item]?.color ?? '#8ab4f8' }}
              aria-hidden="true"
            >
              {skillIcons[item]?.label ?? item.slice(0, 2)}
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demo && project.demo !== '#')
  const hasSource = Boolean(project.source && project.source !== '#')

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} project preview`} />
      </div>
      <div className="project-body">
        <div className="project-header-row">
          <h3>{project.title}</h3>
          <span className="project-chip">Case Study</span>
        </div>
        <p className="project-problem">
          <strong>Problem solved:</strong> {project.problem}
        </p>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={15} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={hasDemo ? project.demo : '#'}
            className={`btn btn-primary btn-small ${!hasDemo ? 'disabled-link' : ''}`}
            target={hasDemo ? '_blank' : undefined}
            rel={hasDemo ? 'noreferrer' : undefined}
            aria-disabled={!hasDemo}
            onClick={(event) => {
              if (!hasDemo) {
                event.preventDefault()
              }
            }}
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
          <a
            href={hasSource ? project.source : '#'}
            className={`btn btn-outline-light btn-small ${!hasSource ? 'disabled-link' : ''}`}
            target={hasSource ? '_blank' : undefined}
            rel={hasSource ? 'noreferrer' : undefined}
            aria-disabled={!hasSource}
            onClick={(event) => {
              if (!hasSource) {
                event.preventDefault()
              }
            }}
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={22} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeWord, setActiveWord] = useState(0)
  const [typedWord, setTypedWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setTypedWord(rotatingWords[0])
      return undefined
    }

    const word = rotatingWords[activeWord]
    let delay = isDeleting ? 42 : 82
    let timer

    if (!isDeleting && typedWord === word) {
      delay = 1500
      timer = window.setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && typedWord === '') {
      delay = 250
      timer = window.setTimeout(() => {
        setActiveWord((previous) => (previous + 1) % rotatingWords.length)
        setIsDeleting(false)
      }, delay)
    } else {
      timer = window.setTimeout(() => {
        setTypedWord(
          isDeleting ? word.slice(0, typedWord.length - 1) : word.slice(0, typedWord.length + 1),
        )
      }, delay)
    }

    return () => window.clearTimeout(timer)
  }, [activeWord, isDeleting, typedWord])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please use a valid email address.'
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a subject.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message = 'Message should be at least 15 characters long.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fix the highlighted fields before sending your message.')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const responseText = await response.text()
      let result = {}

      if (responseText) {
        try {
          result = JSON.parse(responseText)
        } catch {
          throw new Error(
            'The server returned an unexpected response. Make sure the backend is running with `npm run server`.',
          )
        }
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            `Unable to send your message (server error ${response.status}).`,
        )
      }

      if (!result.message) {
        throw new Error(
          'The server did not confirm delivery. Make sure the backend is running with `npm run server`.',
        )
      }

      setStatus('Your message was sent successfully. Thank you for reaching out!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus(
        error instanceof TypeError
          ? 'Could not connect to the server. Please try again later or email me directly.'
          : error.message,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialButtons = [
    { href: socialLinks.github, label: 'GitHub', icon: GithubIcon },
    { href: socialLinks.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
    { href: socialLinks.email, label: 'Email', icon: Mail },
  ]

  return (
    <div className="app-shell">
      <header className="topbar">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Sosna Adugna home">
            <span className="brand-mark">S</span>
            <span className="brand-name">Sosna Adugna</span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary nav-cta">
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow light">
                <Sparkles size={15} />
                Student developer building practical digital products
              </p>
              <h1>
                Hi, I&apos;m <span className="text-gradient">Sosna Adugna.</span>
              </h1>
              <div className="rotating-row">
                <span className="rotating-prefix">I am a</span>
                <span className="visually-hidden">Software Engineering Student</span>
                <span className="rotating-word" aria-hidden="true">
                  {typedWord}
                  <span className="typing-cursor" />
                </span>
              </div>
              <p className="lead">{personalInfo.summary}</p>

              <div className="cta-row">
                <a href="#projects" className="btn btn-primary btn-large">
                  Explore My Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-outline-light btn-large">
                  Contact Me
                </a>
              </div>

              <div className="social-links" aria-label="Social media links">
                {socialButtons.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="social-link"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="Profile photo">
              <div className="orb orb-one" aria-hidden="true" />
              <div className="orb orb-two" aria-hidden="true" />
              <div className="portrait-card">
                <img src={`${import.meta.env.BASE_URL}images/sosna-portrait.png`} alt="Sosna Adugna" />
              </div>
              <div className="floating-badge">
                <MapPin size={14} />
                Ethiopia
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-column">
              <SectionTitle
                eyebrow="About Me"
                title="Curious, practical, always learning."
                subtitle="Software Engineering student focused on creating useful digital experiences."
              />
              <div className="about-copy">
                <p>{personalInfo.about}</p>
                <p>{personalInfo.promise}</p>
              </div>
              <div className="info-panel">
                <div className="info-card">
                  <span className="info-label">Location</span>
                  <strong>{personalInfo.location}</strong>
                </div>
                <div className="info-card">
                  <span className="info-label">Career Goal</span>
                  <strong>{personalInfo.objective}</strong>
                </div>
              </div>
              <a href={`${import.meta.env.BASE_URL}cv/Sosna-Adugna-CV.pdf`} className="btn btn-primary btn-large" download>
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section muted-section">
          <div className="container">
            <div className="skills-column">
              <SectionTitle
                eyebrow="Technical Skills"
                title="Tools I’m learning and building with."
                subtitle="Strong fundamentals, user-centered design, and practical software delivery."
              />
              <div className="skill-grid">
                {skillGroups.map((group) => (
                  <SkillCard key={group.title} title={group.title} icon={group.icon} items={group.items} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Projects"
              title="Featured work and product thinking."
              subtitle="Selected projects that reflect my interest in useful digital experiences and problem solving."
            />

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section muted-section">
          <div className="container">
            <SectionTitle
              eyebrow="What I Can Do"
              title="Practical services I can offer at my current level."
              subtitle="I focus on useful, readable, and responsive digital solutions with a strong learning mindset."
            />

            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Education"
              title="Software Engineering studies and academic path."
              subtitle="Current academic focus and learning direction."
            />

            <div className="education-card">
              <div className="education-badge">
                <GraduationCap size={28} />
              </div>
              <div className="education-text">
                <h3>{education.degree}</h3>
                <p className="uni-name">{education.university}</p>
                <p>{education.status}</p>
                <p>{education.expectedGraduation}</p>
                <p>{education.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="contact-panel">
                  <SectionTitle
                    eyebrow="Contact"
                    title="Let’s build something meaningful."
                    subtitle="I’m open to internship opportunities, collaborations, and freelance work."
                  />
                  <div className="contact-list">
                    <a href={socialLinks.email}>
                      <Mail size={16} />
                      <span>{contactDetails.email}</span>
                    </a>
                    <div className="contact-line">
                      <MapPin size={16} />
                      <span>{contactDetails.location}</span>
                    </div>
                    <div className="contact-line">
                      <CheckCircle2 size={16} />
                      <span>{contactDetails.availability}</span>
                    </div>
                  </div>
                  <div className="mini-socials">
                    <a href={"https://github.com/sosna12"} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                      <GithubIcon />
                    </a>
                    <a href={"https://www.linkedin.com/in/sosna-adugna/"} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Your name"
                      />
                      {errors.name ? <small className="field-error">{errors.name}</small> : null}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="you@example.com"
                      />
                      {errors.email ? <small className="field-error">{errors.email}</small> : null}
                    </div>

                    <div className="col-12">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? 'error' : ''}
                        placeholder="Project inquiry or internship opportunity"
                      />
                      {errors.subject ? <small className="field-error">{errors.subject}</small> : null}
                    </div>

                    <div className="col-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        rows="6"
                        placeholder="Tell me about your project, team, or opportunity..."
                      />
                      {errors.message ? <small className="field-error">{errors.message}</small> : null}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn btn-primary btn-large"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {status ? (
                    <p className="form-status" aria-live="polite">
                      {status}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">S</span>
              <span className="brand-name">Sosna Adugna</span>
            </a>
            <p className="footer-tagline">Software Engineering Student · Aspiring Full-Stack Developer</p>
          </div>

          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-socials">
            <a href={"https://github.com/sosna12"} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={"https://www.linkedin.com/in/sosna-adugna/"} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={socialLinks.email} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-base">
          <div className="container footer-base-inner">
            <span>© {new Date().getFullYear()} Sosna Adugna Aya</span>
            <a href="#home" className="back-to-top">
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
