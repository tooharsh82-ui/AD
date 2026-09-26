export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  exif: string;
  details: string;
}

export interface ServiceCard {
  id: string;
  category: string; // 'Weddings' | 'Portraits & Glamour' | 'Celebrations & Events' | 'Studio & Printing'
  tag: string;
  title: string;
  description: string;
}

export interface YouTubeVideo {
  id: string;
  videoId: string; // YouTube Video ID (e.g. 'dQw4w9WgXcQ')
  title: string;
  category: string;
  duration: string;
  thumbnail: string; // Optimized thumbnail URL
}

// Current portfolio items (with easily editable structure to add up to 20 images later)
export const portfolioItems: PortfolioItem[] = [
  {
    id: '01',
    title: 'Eternal Wedding Vows',
    category: '01 • WEDDINGS',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    exif: 'Focal Length: 85mm · Aperture: f/1.4 · ISO: 200 · Shutter: 1/250s',
    details: 'A timeless moment captured amidst falling white rose petals in an elegant outdoor celebration, reflecting raw emotion and classic style.'
  },
  {
    id: '02',
    title: 'Unfiltered Celebration',
    category: '02 • CANDID',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
    exif: 'Focal Length: 35mm · Aperture: f/1.8 · ISO: 400 · Shutter: 1/160s',
    details: 'A beautiful candid close-up capturing the couple hand-in-hand, emphasizing the delicate details of the bride\'s bouquet and sunrays piercing through old trees.'
  },
  {
    id: '03',
    title: 'Vows at Golden Hour',
    category: '03 • WEDDINGS',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    exif: 'Focal Length: 24mm · Aperture: f/2.8 · ISO: 100 · Shutter: 1/500s',
    details: 'An epic wide-angle portrait capturing the couple standing tall against a dramatic sky at dusk, silhouetted beautifully by the rich orange glow.'
  },
  {
    id: '04',
    title: 'The Royal Bride',
    category: '04 • PORTRAITS',
    image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80',
    exif: 'Focal Length: 50mm · Aperture: f/1.2 · ISO: 100 · Shutter: 1/200s',
    details: 'A dramatic, fine-art portrait of the bride adorned in traditional gold jewelry, spotlighted by natural window light highlighting the intricate lehenga details.'
  }
  // FUTURE CAPABILITY: Simply add up to 20 items here like:
  /*
  ,
  {
    id: '05',
    title: 'Elegant Heritage Couple',
    category: '01 • WEDDINGS',
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=800&q=80',
    exif: 'Focal Length: 50mm · Aperture: f/1.4 · ISO: 100 · Shutter: 1/320s',
    details: 'A premium, candid moment of pure joy and royal grace during the main ceremony.'
  }
  */
];

// Specialty services matching Screenshot 5 exactly
export const services: ServiceCard[] = [
  {
    id: '01',
    category: 'Weddings',
    tag: 'WEDDINGS',
    title: 'Bridal Photography',
    description: 'Timeless bridal portraits capturing grace, heirloom ornamentation, and quiet anticipation before the vows.'
  },
  {
    id: '02',
    category: 'Celebrations & Events',
    tag: 'CELEBRATIONS',
    title: 'Candid Shots',
    description: 'Unscripted, genuine laughter and heartfelt glimpses that occur naturally between the planned events.'
  },
  {
    id: '03',
    category: 'Weddings',
    tag: 'WEDDINGS',
    title: 'Wedding Photography',
    description: 'Comprehensive ceremonial documentation honoring the grandeur, heritage, and emotional depth of your main day.'
  },
  {
    id: '04',
    category: 'Portraits & Glamour',
    tag: 'PORTRAITS',
    title: 'Portrait Photography',
    description: 'Fine-art natural light and studio compositions focused on authentic expressions and professional lighting setups.'
  },
  {
    id: '05',
    category: 'Weddings',
    tag: 'WEDDINGS',
    title: 'Pre-Wedding Shoots',
    description: 'Scenic, story-driven couple sessions tailored to your shared history, capturing pure romance in stunning locations.'
  },
  {
    id: '06',
    category: 'Celebrations & Events',
    tag: 'CELEBRATIONS',
    title: 'Cinematic Videography',
    description: '4K filmic storytelling with balanced color grading, drone perspectives, and custom background music scores.'
  },
  {
    id: '07',
    category: 'Weddings',
    tag: 'WEDDINGS',
    title: 'Destination Weddings',
    description: 'Multi-day coverage anywhere across India, adapting seamlessly to local traditions, lighting, and cultural heritage.'
  },
  {
    id: '08',
    category: 'Weddings',
    tag: 'WEDDINGS',
    title: 'Weddings Candid',
    description: 'Stealthy, non-intrusive lens craft capturing genuine family embraces, silent tears, and spontaneous festive joy.'
  }
];

// FUTURE CAPABILITY: Prepared YouTube structure for up to 5 cinematic videos
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'V01',
    videoId: 'dQw4w9WgXcQ', // Rick Astley placeholder or client YouTube Video ID
    title: 'Cinematic Wedding Film | Luxury Highlight Reel',
    category: 'WEDDING CINEMA',
    duration: '4:15',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'V02',
    videoId: 'dQw4w9WgXcQ',
    title: 'Traditional Wedding Teaser | Emotional Moments',
    category: 'BRIDAL CINEMA',
    duration: '2:30',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'V03',
    videoId: 'dQw4w9WgXcQ',
    title: 'Pre-Wedding Love Story | Scenic Outdoor Shoot',
    category: 'PRE-WEDDING',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'V04',
    videoId: 'dQw4w9WgXcQ',
    title: 'Grand Celebrations | Candid Highlight Reel',
    category: 'FESTIVE EVENTS',
    duration: '5:10',
    thumbnail: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'V05',
    videoId: 'dQw4w9WgXcQ',
    title: 'Editorial Portrait Session | Creative Showcase',
    category: 'PORTRAIT FILM',
    duration: '3:05',
    thumbnail: 'https://images.unsplash.com/photo-1595878714503-c6c1d1ee33e0?auto=format&fit=crop&w=600&q=80'
  }
];
