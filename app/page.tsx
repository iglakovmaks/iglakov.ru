import Image from 'next/image';
import Link from 'next/link';

type Project = {
  number: string;
  name: string;
  kind: string;
  description: string;
  icon: string;
  href: string;
  action: string;
  tags: string[];
  internal?: boolean;
};

const projects: Project[] = [
  {
    number: '01',
    name: 'SwitchLang',
    kind: 'macOS utility',
    description: 'Переключение языка ввода в одно движение. Маленький инструмент для большого потока.',
    icon: '/assets/switchlangicon.png',
    href: '/SwitchLang',
    action: 'О проекте',
    tags: ['Swift', 'macOS'],
    internal: true,
  },
  {
    number: '02',
    name: 'EngDeck',
    kind: 'Language learning',
    description: 'Карточки и быстрые повторения для тех, кто хочет сделать английский ежедневной привычкой.',
    icon: '/assets/EngDeckicon.png',
    href: 'https://iglakovmaks.github.io/EngDeck/',
    action: 'Открыть сайт',
    tags: ['Swift', 'Education'],
  },
  {
    number: '03',
    name: 'ChessHelper',
    kind: 'Chess companion',
    description: 'Спокойный помощник для разбора шахматных позиций, партий и следующих сильных ходов.',
    icon: '/assets/ChessHelpericon.png',
    href: 'https://iglakovmaks.github.io/chess_helper_site/',
    action: 'Открыть сайт',
    tags: ['Python', 'Chess'],
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
  const linkProps = project.internal ? {} : { target: '_blank', rel: 'noreferrer' };

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-kind">{project.kind}</span>
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
          <Link className="card-arrow" href={project.href} {...linkProps} aria-label={`${project.action}: ${project.name}`}>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <header className="site-header site-header-dark">
          <div className="container nav-wrap">
            <Link className="brand" href="/" aria-label="На главную">
              <span className="brand-mark">i</span>
              <span className="brand-name">iglakovmaks</span>
            </Link>
            <nav className="main-nav" aria-label="Основная навигация">
              <a href="#works">Проекты</a>
              <a href="#about">Обо мне</a>
              <a href="#contact">Контакты</a>
            </nav>
            <a className="nav-status" href="mailto:hello@iglakov.ru">
              <span className="status-dot" /> На связи
            </a>
          </div>
        </header>

        <div className="container hero-content">
          <div className="hero-kicker"><span className="blue-dot" /> Independent developer <span>—</span> 2026</div>
          <h1>iglakovmaks</h1>
          <p className="hero-subtitle">Digital products, quiet interfaces<br />and useful little ideas.</p>

          <div className="hero-stage">
            <div className="stage-ring stage-ring-one" aria-hidden="true" />
            <div className="stage-ring stage-ring-two" aria-hidden="true" />
            <div className="stage-cross stage-cross-one" aria-hidden="true">+</div>
            <div className="stage-cross stage-cross-two" aria-hidden="true">+</div>

            <a className="floating-app floating-app-left" href="https://iglakovmaks.github.io/chess_helper_site/" target="_blank" rel="noreferrer">
              <div className="floating-app-icon"><Image src="/assets/ChessHelpericon.png" alt="" width={76} height={76} /></div>
              <div><strong>ChessHelper</strong><span>Chess companion</span></div>
            </a>
            <a className="floating-app floating-app-right" href="https://iglakovmaks.github.io/EngDeck/" target="_blank" rel="noreferrer">
              <div className="floating-app-icon"><Image src="/assets/EngDeckicon.png" alt="" width={76} height={76} /></div>
              <div><strong>EngDeck</strong><span>Language learning</span></div>
            </a>
            <Link className="floating-app floating-app-bottom" href="/SwitchLang">
              <div className="floating-app-icon"><Image src="/assets/switchlangicon.png" alt="" width={76} height={76} /></div>
              <div><strong>SwitchLang</strong><span>macOS utility</span></div>
            </Link>

            <div className="portrait-wrap">
              <div className="portrait-halo" aria-hidden="true" />
              <Image className="portrait-image" src="/assets/avae.png" alt="Аватарка iglakovmaks" fill priority sizes="(max-width: 700px) 72vw, 430px" />
              <div className="portrait-label">MADE WITH CURIOSITY <span>↗</span></div>
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
        </div>
      </div>

      <section className="catalog-section section" id="works">
        <div className="container">
          <div className="section-topline">
            <div className="section-index">01 <span>/</span> WORKS</div>
            <p>Приложения, которые я создаю<br />из любопытства и практической пользы.</p>
          </div>
          <div className="catalog-heading">
            <h2>Каталог<br /><span>приложений.</span></h2>
            <p className="catalog-heading-note">Каждый проект — отдельный мир<br />со своим характером.</p>
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

      <section className="about-section section" id="about">
        <div className="container about-layout">
          <div className="section-index">02 <span>/</span> ABOUT</div>
          <div className="about-copy">
            <h2>Убираю лишнее,<br /><span>оставляю главное.</span></h2>
            <p>Я создаю небольшие цифровые продукты с большим вниманием к деталям. Мне нравится, когда технология не просит внимания, а просто делает день немного легче.</p>
            <div className="about-facts">
              <div><strong>03</strong><span>apps in<br />the archive</span></div>
              <div><strong>∞</strong><span>ideas in<br />progress</span></div>
              <div><strong>RU</strong><span>made with<br />attention</span></div>
            </div>
          </div>
          <div className="about-side-note">Designing the<br /><span>next useful thing.</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid-mark" aria-hidden="true" />
        <div className="container contact-inner">
          <div className="section-index section-index-light">03 <span>/</span> CONTACT</div>
          <h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2>
          <a className="contact-email" href="mailto:hello@iglakov.ru">hello@iglakov.ru <ArrowIcon /></a>
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
