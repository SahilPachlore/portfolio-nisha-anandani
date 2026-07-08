import { useState } from 'react';
import { Play, Quote, ArrowUpRight, MapPin, ExternalLink, Mail, Instagram, Twitter, Youtube, Check } from 'lucide-react';
import {
  CREATOR,
  BRANDS,
  REELS,
  EVENTS,
  PRESS,
  TIMELINE,
  SKILLS,
  type Subpage,
  type Reel,
} from './data';
import { Eyebrow, ArrowLink, SectionHeading, Hanko } from './components';
import { useReveal } from './hooks';

// ---- Shared subpage shell ----
function SubShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return <div className="min-h-screen bg-cream flex flex-col">{children}</div>;
}

// ---- Shared hero banner ----
function HeroBanner({
  eyebrow,
  title,
  subtitle,
  katakana,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  katakana?: string;
}) {
  return (
    <section className="relative bg-ink text-cream px-6 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 tex-seigaiha text-pink opacity-10 pointer-events-none" />
      <div className="absolute top-8 right-6 lg:right-12">
        <div className="hanko rotate-[-8deg] animate-stamp-in" style={{ width: 64, height: 64, fontSize: 26 }}>
          {katakana || CREATOR.katakana.slice(0, 2)}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Eyebrow className="text-pink-300 mb-4">{eyebrow}</Eyebrow>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tightest leading-[0.9] text-cream">
          {title}
        </h1>
        <p className="font-body text-base sm:text-lg text-cream/70 max-w-2xl mt-5 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// ============== ABOUT ==============
export function AboutPage({ navigate }: { navigate: (r: Subpage | 'home') => void }) {
  return (
    <SubShell>
      <HeroBanner
        eyebrow="About"
        title={`HI, I'M ${CREATOR.short.toUpperCase()}.`}
        subtitle={CREATOR.bio}
      />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24 space-y-20 lg:space-y-28">
        {/* Bio + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-2xl overflow-hidden border-2 border-pink">
              <img
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt={CREATOR.name}
                className="w-full aspect-[4/5] object-cover duotone-pink"
              />
              <div className="absolute top-3 right-3">
                <Hanko size={56} label={CREATOR.katakana.slice(0, 2)} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <Eyebrow className="text-pink mb-4">The Story</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-[0.95] text-ink mb-6">
              FROM ESCALATION DESKS TO 2.4M FOLLOWERS.
            </h2>
            <div className="space-y-4 font-body text-base text-ink/75 leading-relaxed">
              <p>
                I spent four years on Amazon Japan's enterprise escalations team — the desk where the hardest problems landed. Broken accounts, furious vendors, metrics that wouldn't move. I learned to read the story inside every number.
              </p>
              <p>
                In 2021 I started posting on the side. In 2023 I left to do it full-time. Today I run campaigns for brands across beauty, fashion, tech, and auto — and I host the events where Japan's creator economy actually meets.
              </p>
              <p>
                My approach is simple: treat the audience like a room full of people who chose you, not a metric on a dashboard. The brands that get that are the ones who sell out in nine minutes.
              </p>
            </div>
            <div className="mt-8">
              <ArrowLink onClick={() => navigate('contact')}>Work with me</ArrowLink>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal">
          <SectionHeading eyebrow="By the Numbers" title="THE REACH." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {[
              { label: 'Instagram', value: CREATOR.stats.ig, tone: 'bg-pink text-cream' },
              { label: 'X / Twitter', value: CREATOR.stats.x, tone: 'bg-ink text-cream' },
              { label: 'TikTok', value: CREATOR.stats.tiktok, tone: 'bg-cream-2 text-ink' },
              { label: 'YouTube', value: CREATOR.stats.youtube, tone: 'bg-pink-100 text-ink' },
            ].map((s) => (
              <div key={s.label} className={`${s.tone} rounded-2xl p-6 lg:p-8`}>
                <div className="font-narrow text-[11px] uppercase tracking-label2 opacity-70 mb-2">{s.label}</div>
                <div className="font-display text-4xl lg:text-5xl tracking-tightest leading-none">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="reveal">
          <SectionHeading eyebrow="What I Do" title="THE TOOLKIT." />
          <div className="flex flex-wrap gap-2.5 mt-8">
            {SKILLS.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream-2 border border-ink/10 rounded-full font-narrow text-sm font-semibold text-ink">
                <Check className="w-4 h-4 text-pink" strokeWidth={3} /> {s}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal">
          <SectionHeading eyebrow="The Journey" title="THE TIMELINE." />
          <div className="mt-8 space-y-0">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-6 lg:gap-10 py-5 border-b border-ink/10 last:border-b-0 group">
                <div className="font-display text-3xl lg:text-4xl tracking-tightest text-pink w-20 lg:w-28 shrink-0 leading-none pt-1">
                  {t.year}
                </div>
                <div className="flex-1">
                  <p className="font-body text-base lg:text-lg text-ink/75 leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubShell>
  );
}

// ============== BRAND COLLABS ==============
export function BrandCollabsPage() {
  return (
    <SubShell>
      <HeroBanner
        eyebrow="Brand Collabs"
        title="CAMPAIGNS THAT SELL OUT."
        subtitle="48+ brand partnerships across beauty, fashion, tech, and auto. Here are the ones that moved the numbers."
      />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24 space-y-20 lg:space-y-28">
        {BRANDS.map((b, i) => (
          <div key={b.name} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-ink/10">
                <img src={b.img} alt={b.name} className="w-full aspect-[4/3] object-cover duotone-pink" />
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-cream/90 backdrop-blur-sm rounded-full">
                  <span className="font-narrow text-[10px] uppercase tracking-label font-bold text-ink">{b.category}</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="px-3 py-1.5 bg-pink rounded-full">
                    <span className="font-narrow text-[10px] uppercase tracking-label font-bold text-cream">{b.date}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="lg:col-span-6">
              <Eyebrow className="text-pink mb-3">Case Study</Eyebrow>
              <h3 className="font-display text-4xl lg:text-5xl tracking-tightest leading-[0.95] text-ink mb-4">{b.name.toUpperCase()}</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 rounded-full mb-5">
                <span className="font-display text-base tracking-tight text-pink-700">{b.metric}</span>
              </div>
              <p className="font-body text-base text-ink/75 leading-relaxed mb-6">{b.blurb}</p>
              {/* Testimonial */}
              <div className="relative bg-ink text-cream rounded-2xl p-6 lg:p-7">
                <Quote className="w-8 h-8 text-pink mb-3" />
                <p className="font-body text-base lg:text-lg leading-relaxed text-cream/90 mb-4">"{b.testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center font-jp text-cream font-bold text-sm">
                    {b.person.slice(0, 1)}
                  </div>
                  <div>
                    <div className="font-narrow text-sm font-bold text-cream">{b.person}</div>
                    <div className="font-body text-xs text-cream/50">{b.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SubShell>
  );
}

// ============== EVENTS ==============
export function EventsPage() {
  return (
    <SubShell>
      <HeroBanner
        eyebrow="Events"
        title="I HOST THE ROOM."
        subtitle="30+ events hosted and appeared at — from 400-person summits to intimate brand nights. Here's the calendar."
      />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Gallery strip */}
        <div className="reveal mb-16 lg:mb-20">
          <div className="flex gap-3 overflow-x-auto no-bar pb-2">
            {EVENTS.map((e) => (
              <div key={e.title} className="relative w-64 h-40 rounded-xl overflow-hidden border border-ink/10 shrink-0">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover duotone" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="font-narrow text-[9px] uppercase tracking-label text-pink-100">{e.type}</div>
                  <div className="font-display text-base tracking-tight text-cream leading-tight">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionHeading eyebrow="The Calendar" title="UPCOMING & PAST." />
        <div className="mt-8 space-y-3">
          {EVENTS.map((e, i) => (
            <div key={i} className="reveal grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center p-5 lg:p-6 bg-cream-2 rounded-2xl border border-ink/10 hover:border-pink transition-colors group">
              <div className="sm:col-span-2">
                <div className="font-display text-2xl lg:text-3xl tracking-tight text-pink leading-none">{e.date.split(',')[0]}</div>
                <div className="font-body text-xs text-ink/50 mt-1">{e.date.split(',')[1]}</div>
              </div>
              <div className="sm:col-span-5">
                <div className="font-narrow text-[10px] uppercase tracking-label text-pink mb-1">{e.type}</div>
                <div className="font-display text-xl lg:text-2xl tracking-tight text-ink leading-tight">{e.title}</div>
                <p className="font-body text-sm text-ink/60 mt-1.5 leading-snug">{e.blurb}</p>
              </div>
              <div className="sm:col-span-3 flex items-center gap-2 font-body text-sm text-ink/70">
                <MapPin className="w-4 h-4 text-pink shrink-0" />
                <div>
                  <div>{e.venue}</div>
                  <div className="text-xs text-ink/50">{e.city}</div>
                </div>
              </div>
              <div className="sm:col-span-2 flex sm:justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink text-cream rounded-full font-narrow text-[10px] uppercase tracking-label font-bold">
                  {e.type === 'Host' ? 'Hosted' : e.type === 'Panel' ? 'Panelist' : 'Attended'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubShell>
  );
}

// ============== REELS ==============
export function ReelsPage() {
  const categories = ['All', 'Beauty', 'Fashion', 'Lifestyle', 'Food', 'Tech', 'Travel'] as const;
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const filtered = filter === 'All' ? REELS : REELS.filter((r) => r.category === filter);

  return (
    <SubShell>
      <HeroBanner
        eyebrow="Reels"
        title="ON REPEAT."
        subtitle="A full grid of my most-watched reels. Filter by category, click to play."
      />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full font-narrow text-xs uppercase tracking-label font-bold transition-colors ${
                filter === c ? 'bg-pink text-cream' : 'bg-cream-2 text-ink/70 hover:bg-pink-100 border border-ink/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {filtered.map((r: Reel) => (
            <div key={r.id} className="reveal group relative aspect-[9/16] rounded-xl overflow-hidden border border-ink/10 cursor-pointer">
              <img src={r.img} alt={r.title} className="w-full h-full object-cover duotone group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink/90 flex items-center justify-center group-hover:bg-pink transition-colors">
                <Play className="w-4 h-4 text-cream fill-cream" />
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 bg-ink/60 backdrop-blur-sm rounded-full">
                <span className="font-narrow text-[9px] uppercase tracking-label font-bold text-cream">{r.category}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-display text-lg tracking-tight text-cream leading-tight">{r.title}</div>
                <div className="font-body text-xs text-cream/70 mt-0.5">{r.views} views</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubShell>
  );
}

// ============== PRESS ==============
export function PressPage() {
  return (
    <SubShell>
      <HeroBanner
        eyebrow="Press"
        title="THE HEADLINES."
        subtitle="24 features, interviews, and lists across Vogue, Forbes, Nikkei, and more."
      />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="space-y-3">
          {PRESS.map((p, i) => (
            <a
              key={i}
              href={p.url}
              className="reveal group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center p-5 lg:p-6 bg-cream-2 rounded-2xl border border-ink/10 hover:border-pink transition-colors"
            >
              <div className="sm:col-span-3">
                <div className="font-display text-xl lg:text-2xl tracking-tight text-ink leading-none">{p.outlet}</div>
                <div className="font-body text-xs text-ink/50 mt-1.5">{p.date}</div>
              </div>
              <div className="sm:col-span-7">
                <div className="font-narrow text-[10px] uppercase tracking-label text-pink mb-1">{p.type}</div>
                <div className="font-body text-base lg:text-lg text-ink/80 leading-snug group-hover:text-pink transition-colors">{p.title}</div>
              </div>
              <div className="sm:col-span-2 flex sm:justify-end">
                <span className="inline-flex items-center gap-1.5 font-narrow text-[10px] uppercase tracking-label font-bold text-ink/60 group-hover:text-pink transition-colors">
                  Read <ExternalLink className="w-3.5 h-3.5 arrow-nudge" strokeWidth={2.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SubShell>
  );
}

// ============== CONTACT ==============
export function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SubShell>
      <HeroBanner
        eyebrow="Contact"
        title="LET'S TALK."
        subtitle="Brand partnerships, event hosting, press inquiries — or just a hello. I read every DM."
      />
      <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            {sent ? (
              <div className="bg-ink text-cream rounded-2xl p-10 text-center">
                <div className="hanko mx-auto mb-4 rotate-[-8deg]" style={{ width: 64, height: 64, fontSize: 26 }}>
                  {CREATOR.katakana.slice(0, 2)}
                </div>
                <h3 className="font-display text-3xl tracking-tight mb-2">MESSAGE SENT.</h3>
                <p className="font-body text-cream/70">I'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
                </div>
                <Field label="Company / Brand" name="company" placeholder="Brand name" />
                <div>
                  <label className="font-narrow text-[10px] uppercase tracking-label2 text-ink/60 font-bold block mb-2">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {['Brand Collab', 'Event Hosting', 'Press', 'Other'].map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input type="radio" name="type" value={t} className="peer sr-only" defaultChecked={t === 'Brand Collab'} />
                        <span className="inline-block px-4 py-2 rounded-full font-narrow text-xs uppercase tracking-label font-bold bg-cream-2 border border-ink/10 peer-checked:bg-pink peer-checked:text-cream peer-checked:border-pink transition-colors">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-narrow text-[10px] uppercase tracking-label2 text-ink/60 font-bold block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your campaign, timeline, and goals..."
                    className="w-full px-4 py-3 bg-cream-2 border border-ink/10 rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-pink focus:bg-cream transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pink text-cream font-narrow text-sm uppercase tracking-label font-bold rounded-full hover:bg-pink-600 transition-colors"
                >
                  Send Message <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5 reveal space-y-6">
            <div className="bg-cream-2 rounded-2xl p-6 border border-ink/10">
              <Eyebrow className="text-pink mb-4">Direct</Eyebrow>
              <a href={`mailto:${CREATOR.email}`} className="flex items-center gap-3 font-body text-base text-ink hover:text-pink transition-colors mb-3">
                <Mail className="w-5 h-5 text-pink" /> {CREATOR.email}
              </a>
              <div className="flex items-center gap-3 font-body text-base text-ink/70">
                <MapPin className="w-5 h-5 text-pink" /> {CREATOR.location}
              </div>
            </div>
            <div className="bg-ink rounded-2xl p-6">
              <Eyebrow className="text-pink-300 mb-4">Social</Eyebrow>
              <div className="space-y-3">
                {[
                  { Icon: Instagram, label: 'Instagram', handle: `@${CREATOR.handle.replace('@', '')} · ${CREATOR.stats.ig}` },
                  { Icon: Twitter, label: 'X / Twitter', handle: `${CREATOR.handleX} · ${CREATOR.stats.x}` },
                  { Icon: Youtube, label: 'YouTube', handle: `${CREATOR.stats.youtube} subscribers` },
                ].map((s) => (
                  <a key={s.label} href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-cream">
                      <s.Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-narrow text-xs uppercase tracking-label font-bold text-cream/90 group-hover:text-pink-300 transition-colors">{s.label}</div>
                      <div className="font-body text-xs text-cream/50">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-pink rounded-2xl p-6 text-cream">
              <div className="font-jp text-2xl mb-2">{CREATOR.katakana}</div>
              <p className="font-body text-sm text-cream/80 leading-relaxed">
                Based in Tokyo. Available for travel worldwide. Typical response time: under 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubShell>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-narrow text-[10px] uppercase tracking-label2 text-ink/60 font-bold block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-cream-2 border border-ink/10 rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-pink focus:bg-cream transition-colors"
      />
    </div>
  );
}
