import { Play, Heart, Repeat2, ArrowUpRight, MessageCircle } from 'lucide-react';
import {
  CREATOR,
  TWEETS,
  REELS,
  BRANDS,
  INDEX_STACK,
  type Subpage,
} from './data';
import {
  Eyebrow,
  ArrowLink,
  MarqueeX,
  MarqueeY,
  HalftoneCorners,
  VideoPanel,
} from './components';

export function Homepage({ navigate }: { navigate: (r: Subpage | 'home') => void }) {
  const latestBrand = BRANDS[0];

  return (
    <div className="no-scroll-viewport bg-cream flex flex-col">
      {/* ===== BENTO GRID ===== */}
      {/* Desktop (lg+): explicit 12-col placement.
          Cols:  1-5      6-8        9-11       12
          Rows 1-3:  Hero     Collab     Tweets     Index
          Rows 4-6:  Hero     Reels      Reels      Index
          Rows 7-8:  Hero     Headline   Headline   Index
      */}
      <main className="flex-1 min-h-0 grid grid-cols-6 grid-rows-[repeat(16,minmax(0,1fr))] auto-rows-fr gap-1.5 p-1.5 sm:gap-2 sm:p-2 lg:grid-cols-12 lg:grid-rows-8 lg:gap-2.5 lg:p-3">
        {/* 1. CENTER HERO — VIDEO */}
        <section
          onClick={() => navigate('about')}
          className="panel group col-span-6 row-span-5 sm:col-span-3 sm:row-span-7 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-8 bg-ink rounded-xl cursor-pointer border-2 border-pink"
        >
          <VideoPanel className="absolute inset-0" />
          <HalftoneCorners color="text-pink" />
          <div className="absolute top-3 right-3 z-10 animate-stamp-in">
            <div className="hanko rotate-[-8deg]" style={{ width: 52, height: 52, fontSize: 22 }}>
              {CREATOR.katakana.slice(0, 2)}
            </div>
          </div>
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-cream/90 backdrop-blur-sm rounded-full">
            <span className="font-narrow text-[10px] uppercase tracking-label font-bold text-ink">
              Hi, I'm {CREATOR.short}
            </span>
            <ArrowUpRight className="w-3 h-3 text-pink arrow-nudge" strokeWidth={2.5} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
        </section>

        {/* 2. TOP-LEFT — LATEST BRAND COLLAB */}
        <section
          onClick={() => navigate('brand-collabs')}
          className="panel group col-span-3 row-span-3 sm:col-span-3 sm:row-span-3 lg:col-span-3 lg:col-start-6 lg:row-start-1 lg:row-span-3 bg-cream-2 rounded-xl cursor-pointer border border-ink/10 hover:border-pink transition-colors"
        >
          <div className="relative h-full flex flex-col">
            <div className="relative h-[55%] overflow-hidden">
              <img src={latestBrand.img} alt={latestBrand.name} className="w-full h-full object-cover duotone-pink" />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-2 to-transparent" />
              <div className="absolute top-2 left-2">
                <Eyebrow className="text-pink">Latest Collab</Eyebrow>
              </div>
            </div>
            <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between">
              <div>
                <div className="font-display text-lg sm:text-xl tracking-tight leading-none text-ink">{latestBrand.name}</div>
                <div className="font-body text-[10px] text-ink/50 mt-0.5">{latestBrand.date} · {latestBrand.category}</div>
              </div>
              <ArrowLink className="mt-1">View case</ArrowLink>
            </div>
          </div>
        </section>

        {/* 3. TWEET FEED — vertical marquee */}
        <section className="panel col-span-3 row-span-3 sm:col-span-3 sm:row-span-3 lg:col-span-3 lg:col-start-9 lg:row-start-1 lg:row-span-3 bg-ink rounded-xl border border-ink/10 flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-cream/10">
            <Eyebrow className="text-pink-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink animate-pulse-dot inline-block mr-1" />
              Latest on X
            </Eyebrow>
          </div>
          <div className="flex-1 min-h-0 bg-ink-2">
            <MarqueeY className="h-full">
              {TWEETS.map((t, i) => (
                <div key={i} className="rounded-xl bg-ink-2 border border-cream/10 p-2.5 mx-2 my-1.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-pink flex items-center justify-center text-cream font-jp text-[10px] font-bold shrink-0">美</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-narrow text-[10px] font-bold text-cream leading-none">{CREATOR.name}</div>
                      <div className="font-body text-[9px] text-cream/40 leading-none mt-0.5">{t.time} ago</div>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-cream/30 shrink-0" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </div>
                  <p className="font-body text-[10px] leading-snug text-cream/80 mb-1.5">{t.text}</p>
                  <div className="flex items-center gap-3 font-body text-[9px] text-cream/40">
                    <span className="flex items-center gap-1"><Heart className="w-2.5 h-2.5" /> {t.likes}</span>
                    <span className="flex items-center gap-1"><Repeat2 className="w-2.5 h-2.5" /> {t.rts}</span>
                  </div>
                </div>
              ))}
            </MarqueeY>
          </div>
        </section>

        {/* 4. REELS — horizontal marquee */}
        <section
          onClick={() => navigate('reels')}
          className="panel group col-span-6 row-span-2 sm:col-span-6 sm:row-span-2 lg:col-span-6 lg:col-start-6 lg:row-start-4 lg:row-span-3 bg-cream-2 rounded-xl cursor-pointer border border-ink/10 hover:border-pink transition-colors flex flex-col"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <Eyebrow className="text-pink">Reel Rush</Eyebrow>
            <ArrowLink>View all</ArrowLink>
          </div>
          <div className="flex-1 min-h-0">
            <MarqueeX speed="fast" className="h-full">
              {REELS.map((r) => (
                <div key={r.id} className="relative h-full w-28 sm:w-32 lg:w-36 mx-1 rounded-lg overflow-hidden border border-ink/10 shrink-0 group/reel">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover duotone" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-pink/90 flex items-center justify-center">
                    <Play className="w-3 h-3 text-cream fill-cream" />
                  </div>
                  <div className="absolute bottom-1.5 left-1.5 right-1.5">
                    <div className="font-narrow text-[9px] font-bold text-cream leading-tight line-clamp-1">{r.title}</div>
                    <div className="font-body text-[8px] text-cream/70 mt-0.5">{r.views} views</div>
                  </div>
                </div>
              ))}
            </MarqueeX>
          </div>
        </section>

        {/* 5. RIGHT VERTICAL INDEX STACK */}
        <section className="panel col-span-6 row-span-3 sm:col-span-3 sm:row-span-7 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-8 bg-cream rounded-xl border border-ink/10 flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b border-ink/10">
            <Eyebrow className="text-pink">The Index</Eyebrow>
          </div>
          <div className="flex-1 flex flex-col justify-between min-h-0">
            {INDEX_STACK.map((item, i) => {
              const toneClasses = {
                pink: 'bg-pink text-cream hover:bg-pink-600',
                cream: 'bg-cream-2 text-ink hover:bg-pink-100',
                dark: 'bg-ink text-cream hover:bg-ink-2',
              }[item.tone];
              return (
                <button
                  key={i}
                  onClick={() => navigate(item.page)}
                  className={`${toneClasses} flex items-center justify-between px-3 py-2 sm:py-2.5 transition-colors group/bar border-b border-ink/5 last:border-b-0 flex-1`}
                >
                  <span className="font-display text-sm sm:text-base lg:text-lg tracking-tight leading-none uppercase">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-2">
                    {item.value && (
                      <span className="font-display text-sm sm:text-base lg:text-lg tracking-tight leading-none">
                        {item.value}
                      </span>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 arrow-nudge opacity-60 group-hover/bar:opacity-100" strokeWidth={2.5} />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 6. SECONDARY HEADLINE PANEL */}
        <section
          onClick={() => navigate('about')}
          className="panel group col-span-6 row-span-2 sm:col-span-6 sm:row-span-2 lg:col-span-6 lg:col-start-6 lg:row-start-7 lg:row-span-2 bg-pink rounded-xl cursor-pointer relative overflow-hidden flex flex-col justify-center px-4 sm:px-6"
        >
          <div className="absolute inset-0 tex-seigaiha text-pink-600 opacity-20 pointer-events-none" />
          <div className="relative">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tightest leading-[0.9] text-cream">
              SHE POSTS.<br />
              BRANDS LISTEN.<br />
              <span className="text-cream/80">THE INTERNET SHOWS UP.</span>
            </div>
            <div className="flex items-center justify-between mt-2 sm:mt-3">
              <p className="font-body text-[10px] sm:text-xs text-cream/80 max-w-md leading-snug hidden sm:block">
                {CREATOR.bio}
              </p>
              <ArrowLink tone="light" className="shrink-0">More about me</ArrowLink>
            </div>
          </div>
        </section>
      </main>

      {/* 7. BOTTOM TICKER — BRAND LOGOS */}
      <div className="h-10 sm:h-12 bg-ink flex items-center shrink-0 overflow-hidden">
        <MarqueeX>
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i} className="flex items-center gap-2 px-6 shrink-0">
              <span className="font-display text-lg sm:text-xl tracking-tight text-cream/80 hover:text-pink transition-colors">
                {b.name}
              </span>
              <span className="text-pink text-xs">●</span>
            </div>
          ))}
        </MarqueeX>
      </div>

      {/* 8. FLOATING DM BUTTON */}
      <button
        onClick={() => navigate('contact')}
        className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 animate-floaty"
        aria-label="DM me"
      >
        <div className="hanko rotate-[-8deg] shadow-lg hover:scale-110 transition-transform" style={{ width: 56, height: 56, fontSize: 18 }}>
          <span className="flex flex-col items-center leading-none">
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="font-narrow text-[7px] uppercase tracking-label">DM</span>
          </span>
        </div>
      </button>
    </div>
  );
}
