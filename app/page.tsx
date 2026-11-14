import Image from 'next/image';
import { MobileMenu } from './mobile-menu';

const projects = [
  {
    name: 'SwitchLang',
    description: 'Fix text typed in the wrong keyboard layout with a single shortcut.',
    icon: '/assets/switchlangicon.png',
    href: '/SwitchLang/',
    theme: 'switchlang',
    stack: 'Swift',
    platforms: 'macOS · Windows',
  },
  {
    name: 'EngDeck',
    description: 'Flashcards and quick reviews to make learning English a daily habit.',
    icon: '/assets/EngDeckicon.png',
    href: '/EngDeck/',
    theme: 'engdeck',
    stack: 'Swift',
    platforms: 'macOS',
  },
  {
    name: 'ChessHelper',
    description: 'Analyze chess positions, review games, and find stronger moves.',
    icon: '/assets/ChessHelpericon.png',
    href: '/ChessHelper/',
    theme: 'chesshelper',
    stack: 'Python',
    platforms: 'macOS · Windows',
  },
];

const email = 'iglakov2008@gmail.com';
const telegram = 'https://t.me/iglmai';
const github = 'https://github.com/iglakovmaks';
const sectionLinks = [
  { href: '#works', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
const socialLinks = [
  { href: github, label: 'GitHub' },
  { href: telegram, label: 'Telegram' },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const titleId = `project-${project.theme}`;

  return (
    <li>
      <a className="project-card" href={project.href} aria-labelledby={titleId}>
        <div className={`project-art project-art--${project.theme}`}>
          <Image className="project-icon" src={project.icon} alt="" width={176} height={176} />
        </div>
        <div className="project-meta">
          <span>{project.platforms}</span>
          <span>{project.stack}</span>
        </div>
        <div className="project-title">
          <h3 id={titleId}>{project.name}</h3>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <p>{project.description}</p>
      </a>
    </li>
  );
}

export default function HomePage() {
  return (
    <div className="sheet" id="top">
      <header className="site-header inset">
        <a className="brand" href="#top" aria-label="iglakov.ru, back to top">
          <span className="brand-mark" aria-hidden="true" />
          iglakov.ru
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {sectionLinks.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-socials">
          {socialLinks.map(({ href, label }) => (
            <a href={href} key={href} target="_blank" rel="noreferrer">
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <MobileMenu>
          {sectionLinks.map(({ href, label }) => (
            <a href={href} key={href}>{label} <span aria-hidden="true">↓</span></a>
          ))}
          {socialLinks.map(({ href, label }) => (
            <a href={href} key={href} target="_blank" rel="noreferrer">
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </MobileMenu>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-name">
          <h1 className="wordmark" id="hero-name">iglakovmaks</h1>
          <div className="hero-content inset">
            <div className="hero-intro">
              <p className="eyebrow">Independent developer</p>
              <p className="hero-description">I build apps for everyday tasks.</p>
              <a className="text-link" href="#works">
                Explore projects <span aria-hidden="true">↓</span>
              </a>
            </div>

            <Image
              src="/assets/portrait.webp"
              alt="The iglakovmaks avatar behind a laptop"
              width={600}
              height={827}
              loading="eager"
              className="portrait"
            />

            <nav className="hero-index" aria-label="Project shortcuts">
              <p className="eyebrow">My apps</p>
              <ul>
                {projects.map((project) => (
                  <li key={project.name}>
                    <a href={project.href}>
                      {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="works inset" id="works" aria-labelledby="works-title">
          <div className="works-heading">
            <h2 id="works-title">Selected apps<span aria-hidden="true">.</span></h2>
            <p>For macOS and Windows</p>
          </div>
          <ul className="project-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </ul>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="contact inset">
          <div className="contact-intro">
            <h2>Let’s talk.</h2>
            <p>Get in touch about app development or collaborations.</p>
            <a className="contact-button" href={`mailto:${email}?subject=Application%20development`}>
              Tell me about your project <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="contact-links">
            <li><a href={telegram} target="_blank" rel="noreferrer">Telegram <span aria-hidden="true">↗</span></a></li>
            <li><a href={github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></li>
            <li><a href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
        <div className="footer-bar inset">
          <span>© 2026 iglakovmaks</span>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}
