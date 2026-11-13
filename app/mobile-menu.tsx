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
    >
      <summary ref={toggleRef}>
        Menu <span className="menu-icon" aria-hidden="true" />
      </summary>
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
