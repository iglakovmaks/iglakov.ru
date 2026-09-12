import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SwitchLang',
  description: 'SwitchLang — небольшая macOS-утилита для быстрого переключения языка ввода.',
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M9.5 3.5 15 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SwitchLangPage() {
  return (
    <main className="project-page">
      <header className="site-header project-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="На главную"><span className="brand-mark">i</span><span className="brand-name">iglakovmaks</span></Link>
          <Link className="back-link" href="/"><span>←</span> Все проекты</Link>
          <a className="nav-status" href="mailto:hello@iglakov.ru"><span className="status-dot" /> На связи</a>
        </div>
      </header>

      <section className="project-hero">
        <div className="container project-hero-grid">
          <div className="project-hero-copy">
            <div className="eyebrow"><span>01 / APP</span> macOS utility</div>
            <h1>Switch<span>Lang</span></h1>
            <p>Переключайте язык ввода в одно движение — быстро, спокойно, без лишнего интерфейса.</p>
            <div className="hero-actions"><a className="button button-dark" href="https://iglakovmaks.github.io/SwitchLang/" target="_blank" rel="noreferrer">Открыть сайт <ArrowIcon /></a><a className="text-link" href="https://github.com/iglakovmaks/SwitchLang" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
          </div>
          <div className="project-product-art">
            <div className="product-glow" />
            <div className="product-device">
              <div className="product-device-top"><span>SwitchLang</span><span>⌘ K</span></div>
              <div className="product-device-body"><Image className="switchlang-detail-icon" src="/assets/switchlangicon.png" alt="SwitchLang icon" width={70} height={70} /><span className="device-caption">CURRENT INPUT</span><strong>Русский</strong><div className="device-switch"><span>Я</span><i /><span>A</span></div><span className="device-hint">Press shortcut to switch</span></div>
            </div>
            <div className="product-orbit orbit-a" /><div className="product-orbit orbit-b" />
          </div>
        </div>
      </section>

      <section className="project-details section">
        <div className="container details-grid">
          <div className="details-label"><div className="eyebrow"><span>О проекте</span></div><span className="details-year">2025—26</span></div>
          <div className="details-body"><p className="details-lede">SwitchLang — маленькая утилита для тех, кто живёт между двумя языками и не хочет каждый раз отвлекаться на переключение раскладки.</p><div className="detail-columns"><div><span>Роль</span><strong>Design + Development</strong></div><div><span>Платформа</span><strong>macOS</strong></div><div><span>Статус</span><strong>Доступно</strong></div></div></div>
        </div>
      </section>

      <section className="project-quote"><div className="container quote-inner"><span className="quote-mark">“</span><p>Хороший инструмент<br /><em>не требует объяснений.</em></p></div></section>

      <footer className="site-footer"><div className="container footer-inner"><span>© 2026 iglakovmaks</span><Link href="/">Все проекты ↗</Link></div></footer>
    </main>
  );
}
