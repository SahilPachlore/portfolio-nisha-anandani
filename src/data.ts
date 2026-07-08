// Central content for the creator hub. Edit here to update the whole site.

export const CREATOR = {
  name: 'Miyuki Tanaka',
  short: 'Miyuki',
  handle: '@miyuki',
  handleX: '@miyuki_x',
  katakana: 'ミユキ',
  tagline: 'Creator · Host · Ex-Amazon JP',
  bio: 'Tokyo-based creator turning brand campaigns into cultural moments. 2.4M on Instagram, 180K on X, and a habit of making the internet show up.',
  stats: {
    ig: '2.4M',
    x: '180K',
    tiktok: '920K',
    youtube: '410K',
  },
  email: 'hello@miyuki.studio',
  location: 'Tokyo, JP',
};

export type Subpage =
  | 'about'
  | 'brand-collabs'
  | 'events'
  | 'reels'
  | 'press'
  | 'contact';

export const NAV: { key: Subpage; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'brand-collabs', label: 'Brand Collabs' },
  { key: 'events', label: 'Events' },
  { key: 'reels', label: 'Reels' },
  { key: 'press', label: 'Press' },
  { key: 'contact', label: 'Contact' },
];

// Vertical index stack on homepage
export const INDEX_STACK: {
  label: string;
  value?: string;
  page: Subpage;
  tone: 'pink' | 'cream' | 'dark';
}[] = [
  { label: 'Brand Collabs', value: '48+', page: 'brand-collabs', tone: 'pink' },
  { label: 'Event Hosting', value: '30+', page: 'events', tone: 'cream' },
  { label: 'Instagram Reach', value: '2.4M', page: 'reels', tone: 'dark' },
  { label: 'Twitter Influence', value: '180K', page: 'reels', tone: 'pink' },
  { label: 'Ex-Amazon JP Escalations', page: 'about', tone: 'cream' },
  { label: 'Press Features', value: '24', page: 'press', tone: 'dark' },
];

export type Tweet = {
  handle: string;
  text: string;
  likes: string;
  rts: string;
  time: string;
};

export const TWEETS: Tweet[] = [
  { handle: CREATOR.handleX, text: "the algorithm doesn't owe you anything. the audience does. give them a reason to stay.", likes: '12.4K', rts: '2.1K', time: '2h' },
  { handle: CREATOR.handleX, text: 'shipped a campaign today that sold out in 9 minutes. the secret? we made it feel like a secret.', likes: '8.9K', rts: '1.4K', time: '6h' },
  { handle: CREATOR.handleX, text: 'ex-amazon taught me one thing: every metric is a story. learn to read the story, not the number.', likes: '15.2K', rts: '3.8K', time: '1d' },
  { handle: CREATOR.handleX, text: 'tokyo at 2am hits different. editing a reel about why brands keep missing the point on "authenticity."', likes: '6.7K', rts: '920', time: '1d' },
  { handle: CREATOR.handleX, text: 'hot take: most "viral" content is just well-packaged honesty. the packaging is the hard part.', likes: '21.3K', rts: '4.7K', time: '2d' },
  { handle: CREATOR.handleX, text: "hosted an event for 400 people tonight. my feet hurt, my heart is full, my dm's are chaos. perfect.", likes: '9.1K', rts: '1.2K', time: '3d' },
  { handle: CREATOR.handleX, text: 'a brand asked me to "go viral." i asked them to go interesting. we compromised on going honest.', likes: '18.6K', rts: '5.1K', time: '4d' },
  { handle: CREATOR.handleX, text: "reminder: your audience is not a metric. it's a room full of people who chose you. act accordingly.", likes: '24.8K', rts: '6.3K', time: '5d' },
];

export type Reel = {
  id: string;
  title: string;
  category: 'Beauty' | 'Fashion' | 'Lifestyle' | 'Food' | 'Tech' | 'Travel';
  views: string;
  img: string;
};

export const REELS: Reel[] = [
  { id: 'r1', title: 'Tokyo Night Walk', category: 'Lifestyle', views: '2.1M', img: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r2', title: 'Pink Makeup Tutorial', category: 'Beauty', views: '3.4M', img: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r3', title: 'Shibuya Fashion Haul', category: 'Fashion', views: '1.8M', img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r4', title: 'Ramen Tour Osaka', category: 'Food', views: '4.2M', img: 'https://images.pexels.com/photos/2871758/pexels-photo-2871758.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r5', title: 'Unboxing New Gadget', category: 'Tech', views: '920K', img: 'https://images.pexels.com/photos/3560564/pexels-photo-3560564.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r6', title: 'Kyoto Day Trip', category: 'Travel', views: '2.7M', img: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r7', title: 'Morning Routine ASMR', category: 'Lifestyle', views: '1.5M', img: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'r8', title: 'Street Style Lookbook', category: 'Fashion', views: '3.1M', img: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export type Brand = {
  name: string;
  category: string;
  date: string;
  img: string;
  metric: string;
  blurb: string;
  testimonial: string;
  person: string;
  role: string;
};

export const BRANDS: Brand[] = [
  { name: 'Shiseido', category: 'Beauty', date: 'Mar 2025', img: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '9-min sellout · 4.2M reach', blurb: 'A limited-edition lipstick drop turned into a cultural moment. We built the campaign around a single confession: "I bought this because she made me feel seen."', testimonial: "Miyuki didn't just post our product. She translated our brand into a language her audience already speaks.", person: 'Aiko Yamamoto', role: 'CMO, Shiseido JP' },
  { name: 'Uniqlo', category: 'Fashion', date: 'Jan 2025', img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '180% lift in store visits', blurb: 'A winter capsule collection launched through a 3-part reel series shot across Tokyo at dawn. The campaign drove the highest foot-traffic spike Uniqlo JP measured that quarter.', testimonial: "She treats every campaign like it's her own product. That's rare and it shows in the numbers.", person: 'Kenji Sato', role: 'Brand Director, Uniqlo' },
  { name: 'Sony', category: 'Tech', date: 'Nov 2024', img: 'https://images.pexels.com/photos/3560564/pexels-photo-3560564.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '1.1M pre-orders attributed', blurb: 'A headphone launch reimagined as a "sound diary" — Miyuki recorded the city she loves, then let her audience hear it. Pre-orders broke the product\'s previous record.', testimonial: "The most prepared creator we've worked with. She came with a thesis, not a rate card.", person: 'Daichi Mori', role: 'Product Marketing, Sony' },
  { name: 'Muji', category: 'Lifestyle', date: 'Sep 2024', img: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '6.8M impressions', blurb: 'A "quiet luxury for real life" series reframed Muji\'s everyday objects as the antidote to algorithm fatigue. The campaign became Muji JP\'s most-shared content of the year.', testimonial: "She found the story in products we'd stopped noticing. That's a gift.", person: 'Yuki Nakamura', role: 'Head of Content, Muji' },
  { name: 'Lexus', category: 'Auto', date: 'Jul 2024', img: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '3-day test-drive spike', blurb: 'A cinematic Tokyo night drive reel positioned a new model as the city\'s quietest luxury. Dealerships reported a 3-day test-drive booking spike immediately after the drop.', testimonial: 'Miyuki made a car feel like a feeling. That\'s exactly what we needed.', person: 'Takeshi Ito', role: 'Marketing Lead, Lexus JP' },
  { name: 'Rakuten', category: 'Retail', date: 'May 2024', img: 'https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg?auto=compress&cs=tinysrgb&w=1000', metric: '2.3M app installs', blurb: 'A "shopping secrets" reel series drove the largest single-quarter app install lift Rakuten attributed to any creator partnership.', testimonial: "She doesn't sell. She recommends, and her audience trusts it. The difference is everything.", person: 'Hana Watanabe', role: 'Growth, Rakuten' },
];

export type EventItem = {
  title: string;
  date: string;
  venue: string;
  city: string;
  type: 'Host' | 'Appearance' | 'Panel';
  img: string;
  blurb: string;
};

export const EVENTS: EventItem[] = [
  { title: 'Tokyo Creator Summit', date: 'Jun 14, 2025', venue: 'Shibuya Hikarie', city: 'Tokyo', type: 'Host', img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: "Hosted a 400-person summit bringing together Japan's top creators and the brands trying to reach them." },
  { title: 'Beauty Brand Night', date: 'Apr 02, 2025', venue: 'Andaz Tokyo', city: 'Tokyo', type: 'Host', img: 'https://images.pexels.com/photos/3756885/pexels-photo-3756885.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: 'An intimate industry night pairing beauty founders with the creators who move their numbers.' },
  { title: 'Asia Influencer Forum', date: 'Feb 20, 2025', venue: 'Marina Bay Sands', city: 'Singapore', type: 'Panel', img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: "Keynote panel on building audiences that actually convert, not just follow." },
  { title: 'Tokyo Fashion Week', date: 'Oct 18, 2024', venue: 'Omotesando Hills', city: 'Tokyo', type: 'Appearance', img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: 'Front-row appearance and backstage content series for three showing brands.' },
  { title: 'Tech & Creator Mixer', date: 'Sep 05, 2024', venue: 'Google Shibuya', city: 'Tokyo', type: 'Panel', img: 'https://images.pexels.com/photos/3560564/pexels-photo-3560564.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: "Panel on how ex-corporate creators bring a different edge to brand storytelling." },
  { title: 'Osaka Pop-Up Launch', date: 'Jul 22, 2024', venue: 'Grand Front Osaka', city: 'Osaka', type: 'Host', img: 'https://images.pexels.com/photos/2871758/pexels-photo-2871758.jpeg?auto=compress&cs=tinysrgb&w=1000', blurb: 'Hosted a 3-day pop-up launch event drawing 2,000+ attendees across the weekend.' },
];

export type PressItem = {
  outlet: string;
  title: string;
  date: string;
  type: 'Feature' | 'Interview' | 'List';
  url: string;
};

export const PRESS: PressItem[] = [
  { outlet: 'Vogue Japan', title: 'The New Faces of Digital Influence', date: 'May 2025', type: 'Feature', url: '#' },
  { outlet: 'Forbes Asia', title: '30 Under 30: Media & Marketing', date: 'Apr 2025', type: 'List', url: '#' },
  { outlet: 'Nikkei', title: 'From Amazon Escalations to 2.4M Followers', date: 'Mar 2025', type: 'Interview', url: '#' },
  { outlet: 'WWD Japan', title: 'How Miyuki Sells Out a Lipstick in 9 Minutes', date: 'Mar 2025', type: 'Feature', url: '#' },
  { outlet: 'TechCrunch JP', title: "The Creator Economy's Quiet Strategist", date: 'Jan 2025', type: 'Interview', url: '#' },
  { outlet: "Harper's Bazaar JP", title: "Tokyo's Most Watched Women", date: 'Dec 2024', type: 'List', url: '#' },
  { outlet: 'GQ Japan', title: "The Ex-Amazon Creator Brands Can't Stop Booking", date: 'Nov 2024', type: 'Feature', url: '#' },
  { outlet: 'AdAge', title: "Why Miyuki's Campaigns Outperform Super Bowl Spots", date: 'Oct 2024', type: 'Feature', url: '#' },
];

export const TIMELINE = [
  { year: '2025', text: 'Crossed 2.4M on Instagram. Hosted the Tokyo Creator Summit for 400 attendees.' },
  { year: '2024', text: 'Forbes Asia 30 Under 30. Six brand campaigns, three sellouts, one very tired phone.' },
  { year: '2023', text: 'Left Amazon JP escalations team to go full-time as a creator. Never looked back.' },
  { year: '2021', text: 'Started posting on the side while managing enterprise escalations at Amazon JP.' },
  { year: '2019', text: 'Joined Amazon Japan. Learned that every metric is a story waiting to be read.' },
];

export const SKILLS = [
  'Brand Strategy',
  'Content Direction',
  'Event Hosting',
  'Audience Growth',
  'Campaign Analytics',
  'Cultural Translation',
];
