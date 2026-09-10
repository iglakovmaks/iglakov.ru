import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M9.5 3.5 15 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M10.75 3H15v4.25M14.5 3.5 8.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10.5V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SwitchLangGlyph() {
  return (
    <div className="switchlang-glyph" aria-hidden="true">
      <span className="glyph-letter glyph-letter-left">A</span>
      <span className="glyph-arrow">↔</span>
      <span className="glyph-letter glyph-letter-right">Я</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="top">
      <header className="site-header site-header-dark">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="На главную">
            <span className="brand-mark">M</span>
            <span className="brand-name">Максим Иглаков</span>
          </Link>
          <nav className="main-nav" aria-label="Основная навигация">
            <a href="#works">Работы</a>
            <a href="#about">Обо мне</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a className="nav-status" href="mailto:hello@iglakov.ru">
            <span className="status-dot" /> На связи
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span>✦</span> Независимый разработчик <span className="eyebrow-year">2026</span></div>
            <h1>Приложения,<br /><em>которыми</em> хочется<br />пользоваться.</h1>
            <p className="hero-lede">Собираю идеи в аккуратные цифровые продукты — от первой строки кода до иконки на вашем экране.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#works">Смотреть проекты <ArrowIcon /></a>
              <a className="text-link text-link-light" href="mailto:hello@iglakov.ru">Написать мне <span>↗</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Превью приложения SwitchLang">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-project-card">
              <div className="card-topline"><span>01 / SELECTED</span><span>2026</span></div>
              <div className="hero-project-main">
                <span className="mini-label">SwitchLang</span>
                <SwitchLangGlyph />
                <p>Switch languages<br />without thinking.</p>
              </div>
              <div className="card-bottomline"><span>Utility</span><span>View project&nbsp; ↗</span></div>
            </div>
            <div className="floating-note note-top"><span className="note-dot note-dot-blue" /> Made with care</div>
            <div className="floating-note note-bottom">01 <span>/</span> 01</div>
          </div>
        </div>
        <div className="hero-scroll"><span className="scroll-line" /> Листайте, чтобы исследовать</div>
      </section>

      <div className="ticker" aria-label="Навигация по проектам">
        <div className="ticker-track">
          <span>Идея <b>✳</b> Дизайн <b>✳</b> Код <b>✳</b> Детали <b>✳</b> Идея <b>✳</b> Дизайн <b>✳</b> Код <b>✳</b> Детали <b>✳</b></span>
        </div>
      </div>

      <section className="section works-section" id="works">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span>01</span> Избранные работы</div>
              <h2>Маленькие продукты.<br /><span>Большое внимание.</span></h2>
            </div>
            <p className="section-intro">Коллекция приложений, которые появились из любопытства, боли и желания сделать привычные вещи чуть лучше.</p>
          </div>

          <article className="featured-project">
            <div className="featured-visual">
              <div className="visual-grid" aria-hidden="true" />
              <div className="app-window">
                <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>SwitchLang</span><span>⌘ K</span></div>
                <div className="window-content">
                  <span className="window-kicker">LANGUAGE SWITCHER</span>
                  <strong>One shortcut.<br /><span>Any language.</span></strong>
                  <div className="language-row"><span>English</span><span className="language-arrow">→</span><span>Русский</span></div>
                </div>
              </div>
              <div className="visual-badge">Built for flow <span>↗</span></div>
            </div>
            <div className="featured-info">
              <div className="project-index">01 <span>/</span> APP</div>
              <div>
                <div className="project-meta"><span>macOS utility</span><span>2025</span></div>
                <h3>SwitchLang</h3>
                <p>Переключение языка ввода в одно движение. Небольшая утилита, которая незаметно экономит время каждый день.</p>
              </div>
              <div className="project-footer">
                <Link className="button button-dark" href="/SwitchLang">О проекте <ArrowIcon /></Link>
                <a className="icon-link" href="https://iglakovmaks.github.io/SwitchLang/" target="_blank" rel="noreferrer">Открыть сайт <ExternalIcon /></a>
              </div>
            </div>
          </article>

          <div className="archive-row">
            <div className="archive-copy"><span className="archive-mark">+</span><div><strong>Архив пополняется</strong><p>Здесь появятся следующие приложения и эксперименты.</p></div></div>
            <span className="archive-count">01 / ∞</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-label"><div className="eyebrow"><span>02</span> Немного обо мне</div><div className="about-symbol">M<span>·</span></div></div>
          <div className="about-content">
            <h2>Создаю инструменты<br />для <em>больших привычек.</em></h2>
            <p>Мне нравится превращать сложное в очевидное. Исследовать, где интерфейс может исчезнуть, а продукт — просто работать. Каждый проект здесь — самостоятельный эксперимент в пользе, форме и ощущении от использования.</p>
            <div className="stats-row">
              <div className="stat"><strong>01</strong><span>опубликованный<br />проект</span></div>
              <div className="stat"><strong>∞</strong><span>идей<br />в заметках</span></div>
              <div className="stat"><strong>RU</strong><span>создано<br />с вниманием</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div className="eyebrow eyebrow-light"><span>03</span> Есть идея?</div>
          <h2>Давайте сделаем<br /><em>что-то хорошее.</em></h2>
          <a className="contact-email" href="mailto:hello@iglakov.ru">hello@iglakov.ru <ArrowIcon /></a>
          <div className="contact-orb orb-purple" aria-hidden="true" /><div className="contact-orb orb-orange" aria-hidden="true" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner"><span>© 2026 Максим Иглаков</span><span className="footer-center">Сделано с вниманием к деталям</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </main>
  );
}
