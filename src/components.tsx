import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowLeft, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import { CREATOR, NAV, type Subpage } from './data';

// ---- Hanko stamp logo ----
export function Hanko({ size = 40, label = 'M' }: { size?: number; label?: string }) {
  return (
    <span
      className="hanko select-none"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      {label}
    </span>
  );
}

// ---- Eyebrow label with bullet ----
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-narrow text-[10px] sm:text-[11px] uppercase tracking-label2 ${className}`}>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

// ---- Arrow link ----
export function ArrowLink({
  children,
  onClick,
  className = '',
  tone = 'dark',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-1.5 font-narrow text-[11px] sm:text-xs uppercase tracking-label font-semibold transition-colors ${
        tone === 'dark' ? 'text-ink hover:text-pink' : 'text-cream hover:text-pink-100'
      } ${className}`}
    >
      {children}
      <ArrowUpRight className="w-3.5 h-3.5 arrow-nudge" strokeWidth={2.5} />
    </button>
  );
}

// ---- Navbar ----
export function Navbar({
  route,
  navigate,
  onHome,
}: {
  route: Subpage | 'home';
  navigate: (r: Subpage | 'home') => void;
  onHome?: () => void;
}) {
  const isSub = route !== 'home';
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 sm:h-16 bg-cream/90 backdrop-blur-md border-b border-ink/10">
      {/* Logo */}
      <button
        onClick={() => (onHome ? onHome() : navigate('home'))}
        className="flex items-center gap-2.5 group"
        aria-label="Back to hub"
      >
        <Hanko size={36} label="美" />
        <span className="font-display text-xl tracking-tight leading-none text-ink group-hover:text-pink transition-colors">
          MIYUKI
        </span>
      </button>

      {/* Center nav */}
      <nav className="hidden md:flex items-center gap-1 lg:gap-2">
        {isSub && (
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-1 px-2.5 py-1.5 font-narrow text-[11px] uppercase tracking-label font-semibold text-ink/60 hover:text-pink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            Hub
          </button>
        )}
        {NAV.map((n) => (
          <button
            key={n.key}
            onClick={() => navigate(n.key)}
            className={`px-2.5 py-1.5 font-narrow text-[11px] lg:text-xs uppercase tracking-label font-semibold transition-colors ${
              route === n.key ? 'text-pink' : 'text-ink/70 hover:text-pink'
            }`}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {/* Right CTA */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('contact')}
          className="hidden sm:inline-flex items-center gap-1 font-narrow text-[11px] uppercase tracking-label font-semibold text-ink/60 hover:text-pink transition-colors"
        >
          Inquire
        </button>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 bg-pink text-cream font-narrow text-[11px] sm:text-xs uppercase tracking-label font-bold rounded-full hover:bg-pink-600 transition-colors"
        >
          Work With Me
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}

// ---- Footer ----
export function Footer({ navigate }: { navigate: (r: Subpage | 'home') => void }) {
  return (
    <footer className="bg-ink text-cream px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Hanko size={44} label="美" />
              <div>
                <div className="font-display text-2xl tracking-tight leading-none">MIYUKI</div>
                <div className="font-jp text-sm text-pink-100 mt-0.5">{CREATOR.katakana}</div>
              </div>
            </div>
            <p className="font-body text-sm text-cream/70 max-w-sm leading-relaxed">
              {CREATOR.bio}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <div className="font-narrow text-[11px] uppercase tracking-label2 text-cream/50 mb-4">Explore</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((n) => (
                <button
                  key={n.key}
                  onClick={() => navigate(n.key)}
                  className="font-narrow text-sm text-cream/80 hover:text-pink-300 transition-colors text-left"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="font-narrow text-[11px] uppercase tracking-label2 text-cream/50 mb-4">Connect</div>
            <a href={`mailto:${CREATOR.email}`} className="flex items-center gap-2 font-body text-sm text-cream/80 hover:text-pink-300 transition-colors mb-2">
              <Mail className="w-4 h-4" /> {CREATOR.email}
            </a>
            <div className="flex items-center gap-2 font-body text-sm text-cream/60 mb-4">
              <MapPin className="w-4 h-4" /> {CREATOR.location}
            </div>
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-pink hover:border-pink hover:text-cream transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-body text-xs text-cream/50">
            © {new Date().getFullYear()} {CREATOR.name}. All rights reserved.
          </div>
          <div className="font-narrow text-[10px] uppercase tracking-label2 text-cream/40">
            Built in Tokyo · Made for the internet
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---- Marquee (horizontal, duplicates children for seamless loop) ----
export function MarqueeX({
  children,
  speed = 'normal',
  reverse = false,
  className = '',
  pauseOnHover = false,
}: {
  children: ReactNode;
  speed?: 'normal' | 'fast';
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const anim = reverse ? 'animate-marquee-x-rev' : speed === 'fast' ? 'animate-marquee-x-fast' : 'animate-marquee-x';
  return (
    <div className={`overflow-hidden ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}>
      <div className={`marquee-track ${anim}`}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

// ---- Vertical marquee (for tweet feed) ----
export function MarqueeY({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden pause-on-hover ${className}`}>
      <div className="marquee-track-y animate-marquee-y">
        <div className="flex flex-col shrink-0">{children}</div>
        <div className="flex flex-col shrink-0" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

// ---- Halftone corner decoration ----
export function HalftoneCorners({ color = 'text-pink', className = '' }: { color?: string; className?: string }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-10 h-10 tex-halftone ${color} opacity-40 pointer-events-none ${className}`} />
      <div className={`absolute bottom-0 right-0 w-10 h-10 tex-halftone ${color} opacity-40 pointer-events-none ${className}`} />
    </>
  );
}

// ---- Section heading for subpages ----
export function SectionHeading({
  eyebrow,
  title,
  className = '',
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`}>
      <Eyebrow className="text-pink mb-3">{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tightest leading-[0.95] text-ink">
        {title}
      </h2>
    </div>
  );
}

// ---- Video panel with mute toggle ----
export function VideoPanel({ className = '' }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  // Fallback: if video fails, show poster image
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!failed ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1200"
          onError={() => setFailed(true)}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-in-her-room-1080p.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1200"
          className="w-full h-full object-cover duotone-pink"
          alt="Miyuki intro"
        />
      )}
      {/* Mute toggle */}
      <button
        onClick={toggle}
        className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-ink/70 backdrop-blur-sm text-cream font-narrow text-[10px] uppercase tracking-label font-semibold rounded-full hover:bg-pink transition-colors"
      >
        {muted ? 'Tap to unmute' : 'Sound on'}
        <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
      </button>
    </div>
  );
}

// ---- Scroll-to-top on route change (used in App) ----
export function useScrollTop(dep: unknown) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dep]);
}
