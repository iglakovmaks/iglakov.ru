'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Project = {
  number: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  tags: string[];
  platforms: ('macOS' | 'Windows')[];
};

const projects: Project[] = [
  {
    number: '01',
    name: 'SwitchLang',
    description: 'Переключение языка ввода в одно движение. Маленький инструмент для большого потока.',
    icon: '/assets/switchlangicon.png',
    href: '/SwitchLang/',
    tags: ['Swift', 'Utility'],
    platforms: ['macOS', 'Windows'],
  },
  {
    number: '02',
    name: 'EngDeck',
    description: 'Карточки и быстрые повторения для тех, кто хочет сделать английский ежедневной привычкой.',
    icon: '/assets/EngDeckicon.png',
    href: '/EngDeck/',
    tags: ['Swift', 'Education'],
    platforms: ['macOS'],
  },
  {
    number: '03',
    name: 'ChessHelper',
    description: 'Спокойный помощник для разбора шахматных позиций, партий и следующих сильных ходов.',
    icon: '/assets/ChessHelpericon.png',
    href: '/ChessHelper/',
    tags: ['Python', 'Chess'],
    platforms: ['macOS', 'Windows'],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M9.5 3.5 15 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={project.href} aria-label={`${project.name}: открыть сайт`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <div className="platform-list" aria-label={`Платформы: ${project.platforms.join(', ')}`}>
          {project.platforms.map((platform) => (
            <span className="platform-pill" key={platform}>
              <span className="platform-symbol" aria-hidden="true">{platform === 'macOS' ? '⌘' : '⊞'}</span>
              {platform}
            </span>
          ))}
        </div>
      </div>
      <div className="project-icon-wrap">
        <Image src={project.icon} alt={`${project.name} icon`} width={160} height={160} className="project-icon" />
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-card-bottom">
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <span className="card-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className={`site-header site-header-dark${menuOpen ? ' is-open' : ''}`}>
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="На главную" onClick={closeMenu}>
            <span className="brand-name">iglakovmaks</span>
          </Link>
          <button className={`menu-toggle${menuOpen ? ' is-open' : ''}`} type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-stage">
            <div className="stage-ring stage-ring-one" aria-hidden="true" />
            <div className="stage-ring stage-ring-two" aria-hidden="true" />
            <div className="stage-cross stage-cross-one" aria-hidden="true">+</div>
            <div className="stage-cross stage-cross-two" aria-hidden="true">+</div>
            <div className="pixel-field" aria-hidden="true">
              {Array.from({ length: 16 }, (_, index) => <span className={`pixel pixel-${index + 1}`} key={index} />)}
            </div>
            <h1 className="hero-wordmark">iglakovmaks</h1>

            <a className="floating-app floating-app-left" href="/ChessHelper/">
              <div className="floating-app-icon"><Image src="/assets/ChessHelpericon.png" alt="" width={76} height={76} /></div>
              <div><strong>ChessHelper</strong><span>Chess companion</span></div>
            </a>
            <a className="floating-app floating-app-right" href="/EngDeck/">
              <div className="floating-app-icon"><Image src="/assets/EngDeckicon.png" alt="" width={76} height={76} /></div>
              <div><strong>EngDeck</strong><span>Language learning</span></div>
            </a>
            <a className="floating-app floating-app-bottom" href="/SwitchLang/">
              <div className="floating-app-icon"><Image src="/assets/switchlangicon.png" alt="" width={76} height={76} /></div>
              <div><strong>SwitchLang</strong><span>Input utility</span></div>
            </a>

            <div className="portrait-wrap">
              <div className="portrait-halo" aria-hidden="true" />
              <Image className="portrait-image" src="/assets/avatar.png" alt="Аватарка iglakovmaks" fill priority sizes="(max-width: 700px) 82vw, 570px" />
            </div>
          </div>

          <div className="hero-footnote">
            <span>01 — 03</span>
            <span>Scroll to explore</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </section>

      <div className="project-strip" aria-label="Список приложений">
        <div className="project-strip-track">
          <span>CHESSHELPER <b>✦</b> SWITCHLANG <b>✦</b> ENGDECK <b>✦</b> CHESSHELPER <b>✦</b> SWITCHLANG <b>✦</b> ENGDECK <b>✦</b></span>
          <span aria-hidden="true">CHESSHELPER <b>✦</b> SWITCHLANG <b>✦</b> ENGDECK <b>✦</b> CHESSHELPER <b>✦</b> SWITCHLANG <b>✦</b> ENGDECK <b>✦</b></span>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Навигационное меню">
          <button className="menu-overlay-dismiss" type="button" aria-label="Закрыть меню" onClick={closeMenu} />
          <div className="menu-overlay-inner">
            <div className="menu-popover-top">
              <span>Navigation</span>
              <span>iglakovmaks</span>
            </div>
            <nav className="menu-links" aria-label="Меню сайта">
              <a href="#works" onClick={closeMenu}>My apps <span>01</span></a>
              <a href="https://t.me/iglmai" target="_blank" rel="noreferrer" onClick={closeMenu}>Telegram <span>↗</span></a>
              <a href="mailto:hello@iglakov.ru?subject=Application%20development" onClick={closeMenu}>Order application development <span>↗</span></a>
              <a href="mailto:hello@iglakov.ru" onClick={closeMenu}>Email <span>↗</span></a>
              <a href="https://github.com/iglakovmaks" target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub <span>↗</span></a>
            </nav>
            <div className="menu-popover-bottom">Available for selected collaborations <span>2026</span></div>
          </div>
        </div>
      )}

      <section className="catalog-section section" id="works">
        <div className="container">
          <div className="catalog-heading">
            <h2>My <span>apps.</span></h2>
            <p className="catalog-heading-note">Selected products<br />by iglakovmaks.</p>
          </div>
          <div className="catalog-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
            <article className="project-card project-card-coming">
              <div className="coming-symbol">+</div>
              <div className="project-card-body">
                <div className="project-number">04 / SOON</div>
                <h3>More to come</h3>
                <p>Новые эксперименты уже собираются в заметках и прототипах.</p>
                <span className="coming-line">THE ARCHIVE IS OPEN</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 iglakovmaks</span>
          <span className="footer-center">Built with curiosity</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
