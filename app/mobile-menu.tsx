'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function MobileMenu({ children }: { children: ReactNode }) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    function closeOnOutsidePress(event: PointerEvent) {
      if (menu?.open && !event.composedPath().includes(menu)) menu.open = false;
    }

    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress);
  }, []);

  function closeMenu() {
    const menu = menuRef.current;
    if (!menu?.open) return;

    toggleRef.current?.focus({ preventScroll: true });
    menu.open = false;
  }

  return (
    <details
      className="mobile-menu"
      ref={menuRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeMenu();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}
    >
      <summary ref={toggleRef} aria-label="Navigation menu">
        <span className="menu-icon" aria-hidden="true" />
      </summary>
      <div className="mobile-menu-backdrop" aria-hidden="true" onClick={closeMenu} />
      <nav
        className="mobile-menu-panel"
        aria-label="Main navigation"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest('a')) closeMenu();
        }}
      >
        {children}
      </nav>
    </details>
  );
}
