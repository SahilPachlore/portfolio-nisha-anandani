import { useEffect, useState, useCallback } from 'react';
import type { Subpage } from './data';

// ---- Lightweight hash router (no dependency) ----
export function useRoute(): [Subpage | 'home', (r: Subpage | 'home') => void] {
  const parse = (): Subpage | 'home' => {
    const h = window.location.hash.replace(/^#\/?/, '');
    const valid: Subpage[] = ['about', 'brand-collabs', 'events', 'reels', 'press', 'contact'];
    return (valid as string[]).includes(h) ? (h as Subpage) : 'home';
  };
  const [route, setRoute] = useState<Subpage | 'home'>(parse);

  useEffect(() => {
    const onHash = () => {
      setRoute(parse());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((r: Subpage | 'home') => {
    window.location.hash = r === 'home' ? '/' : `/${r}`;
  }, []);

  return [route, navigate];
}

// ---- Scroll reveal hook for subpages ----
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
