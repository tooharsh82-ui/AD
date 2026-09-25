import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  User, 
  Clock, 
  ArrowUp, 
  ArrowRight, 
  Eye, 
  Star, 
  X, 
  Menu, 
  Heart,
  ChevronRight,
  Sparkles,
  Map,
  Award
} from 'lucide-react';

// Interfaces
interface ServiceCard {
  id: string;
  category: string; // 'Weddings' | 'Portraits & Glamour' | 'Celebrations & Events' | 'Studio & Printing'
  tag: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  exif: string;
  details: string;
}

export default function App() {
  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Tab/Filter State for Specialities
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Lightbox Modal State
  const [activeLightbox, setActiveLightbox] = useState<PortfolioItem | null>(null);
  
  // Inquiry Form State
  const [occasion, setOccasion] = useState('Wedding Photography');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  // Brand Data Constants
  const PHONE_NUMBER = '+91 86770 16013';
  const PHONE_NUMBER_CLEAN = '918677016013';
  const STUDIO_LOCATION = 'Chanakya Nagar, Begusarai, Mohan Eghu, Bihar 851101, India';
  const PLUS_CODE = 'C47W+V3 Begusarai, Bihar';
  const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=25.4552467,86.11585255`;
  const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_NUMBER_CLEAN}`;

  // Helper to generate WhatsApp links
  const getWhatsAppLink = (text: string) => {
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
  };

  // Handle Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi The Ankit Photography, I would like to inquire about planning a session!
• Occasion: ${occasion}
• Name: ${name || 'Not provided'}
• Tentative Date: ${date || 'Not provided'}
• Notes: ${notes || 'None'}`;
    
    window.open(getWhatsAppLink(message), '_blank');
  };

  // Portfolio items matching screenshots but styled elegantly with verified assets
  const portfolioItems: PortfolioItem[] = [
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
  ];

  // Specialty services matching Screenshot 5 exactly
  const services: ServiceCard[] = [
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

  const serviceCategories = ['All', 'Weddings', 'Portraits & Glamour', 'Celebrations & Events', 'Studio & Printing'];

  const filteredServices = selectedFilter === 'All'
    ? services
    : services.filter(s => s.category === selectedFilter);

  // Scroll back to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f051d] text-white font-sans antialiased relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      
      {/* BACKGROUND GRAPHICS (SUBTLE PLUM GRADIENTS) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[600px] h-[600px] bg-fuchsia-950/10 rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-5 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* FIXED HEADER / NAVIGATION (SCREENSHOT 1) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f051d]/90 backdrop-blur-md border-b border-purple-950/50 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Zone (Top Bar Contract: Single text element) */}
          <a href="#" className="flex items-center gap-2 text-sm md:text-base font-extrabold tracking-widest text-white uppercase group">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full inline-block animate-pulse"></span>
            THE ANKIT <span className="text-purple-400 font-light">PHOTOGRAPHY</span>
          </a>

          {/* Nav links Zone 2 */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest text-gray-300">
            <a href="#" className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:rounded">HOME</a>
            <a href="#about" className="hover:text-white transition-colors py-1">ABOUT</a>
            <a href="#works" className="hover:text-white transition-colors py-1">WORKS</a>
            <a href="#specialities" className="hover:text-white transition-colors py-1">SPECIALITIES</a>
            <a href="#contact" className="hover:text-white transition-colors py-1">CONTACT</a>
          </nav>

          {/* Action Zone 3 */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="flex items-center gap-2 border border-purple-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-purple-950/30 transition-all text-gray-200"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a 
              href={getWhatsAppLink('Hi The Ankit Photography, I would like to book a photography session.')}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all shadow-md shadow-purple-950/50"
            >
              <span>WHATSAPP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0f051d] border-b border-purple-950 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider text-purple-400 border-b border-purple-950/20 pb-2"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider text-gray-300 hover:text-white border-b border-purple-950/20 pb-2"
            >
              ABOUT
            </a>
            <a 
              href="#works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider text-gray-300 hover:text-white border-b border-purple-950/20 pb-2"
            >
              WORKS
            </a>
            <a 
              href="#specialities" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider text-gray-300 hover:text-white border-b border-purple-950/20 pb-2"
            >
              SPECIALITIES
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider text-gray-300 hover:text-white pb-2"
            >
              CONTACT
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="flex items-center justify-center gap-2 border border-purple-950/60 py-3 rounded-xl text-sm font-semibold text-gray-200"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <a 
                href={getWhatsAppLink('Hi, I am looking to schedule a wedding/portrait session with you.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-xl text-sm font-bold tracking-wider"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION (SCREENSHOT 1) */}
      <section className="pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Rotated editorial left text (Visible in Screenshot 1) */}
          <div className="hidden xl:flex absolute left-4 top-[400px] -rotate-90 origin-left items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
            <span>PHOTOGRAPHY</span>
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span>BEGUSARAI, BIHAR</span>
          </div>

          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:pl-8">
            
            {/* Pill/Label */}
            <div className="inline-flex">
              <span className="bg-purple-950/60 border border-purple-900/50 text-[10px] md:text-xs font-bold tracking-widest text-purple-300 py-1.5 px-4 rounded-full uppercase">
                • LUXURY WEDDING & PORTRAIT ATELIER • BEGUSARAI, BIHAR
              </span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none flex flex-col gap-1">
              <span>Capturing</span>
              <span>moments</span>
              <span className="font-serif text-purple-300 italic font-medium pt-2 text-4xl md:text-6xl tracking-wide">
                that last a lifetime
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              Thoughtful photography that preserves genuine emotions, meaningful celebrations, and unforgettable moments through timeless imagery. Proudly serving Chanakya Nagar, Begusarai, Bihar.
            </p>

            {/* Trust Indicator Card (Screenshot 1: Preserving custom card aesthetic) */}
            <div className="bg-[#1d0e34]/70 border border-purple-950/80 p-5 rounded-2xl flex items-start gap-4 max-w-lg shadow-lg">
              <div className="p-3 bg-purple-950/80 border border-purple-900/50 rounded-xl text-purple-400 shrink-0">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">4.9 Star Google Business Rating</span>
                  <div className="flex items-center text-yellow-500 text-xs">
                    <Star className="w-3 h-3 fill-yellow-500" />
                    <span className="ml-0.5 text-xs font-bold text-yellow-500">4.9</span>
                  </div>
                </div>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  Highly acclaimed across 167+ verified client reviews for premium cinematic bridal portraits, candid celebrations, and heirloom album designs.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a 
                href={getWhatsAppLink('Hi The Ankit Photography, I saw your portfolio and would love to chat.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all shrink-0 shadow-lg shadow-purple-950/40"
              >
                <span>CHAT ON WHATSAPP ↗</span>
              </a>
              <a 
                href="#works"
                className="flex items-center justify-center border border-purple-900/60 hover:border-purple-600 px-8 py-4 rounded-full text-xs font-bold tracking-widest text-gray-200 hover:text-white transition-all shrink-0 bg-[#1d0e34]/20"
              >
                <span>VIEW SELECTED WORKS</span>
              </a>
            </div>
          </div>

          {/* Right Column Featured Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] rounded-[32px] overflow-hidden group shadow-2xl border border-purple-950/60 bg-[#1d0e34]/30">
              <img 
                src={portfolioItems[0].image} 
                alt="Beautiful Wedding Couple" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f051d]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Lightbox Trigger on Image */}
              <button 
                onClick={() => setActiveLightbox(portfolioItems[0])}
                className="absolute bottom-6 right-6 p-3 bg-[#0f051d]/90 backdrop-blur-md rounded-full text-purple-400 hover:text-white border border-purple-950 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl"
                aria-label="View Fullscreen"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST STATS BANNER (SCREENSHOT 2) */}
      <section className="py-12 bg-[#140827] border-y border-purple-950/50 my-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle Background 'PHOTO' word (Preserving Screenshot 2) */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 text-[150px] font-black tracking-[0.1em] text-purple-950/10 pointer-events-none uppercase font-sans select-none">
            PHOTO
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 shrink-0 relative z-10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">RATING</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight">4.9 / 5</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">REVIEWS</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight">167+ Google</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">STUDIO</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Begusarai</span>
            </div>
          </div>

          {/* View Portfolio Action Button */}
          <div className="relative z-10 shrink-0">
            <a 
              href="#works"
              className="flex items-center gap-2 bg-[#1d0e34] hover:bg-purple-950 border border-purple-900/40 text-xs font-extrabold tracking-widest text-white px-6 py-3.5 rounded-full transition-all"
            >
              <Eye className="w-4 h-4 text-purple-400" />
              <span>VIEW PORTFOLIO ↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* STORY & VISION SECTION (ABOUT) (SCREENSHOT 3) */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-purple-400">
              <span>// 01 STORY & VISION</span>
              <div className="w-10 h-[1px] bg-purple-900" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight flex flex-col">
              <span>Preserving</span>
              <span className="font-serif text-purple-300 italic font-medium">The Sacred & Real</span>
            </h2>

            <div className="text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-6 mt-4">
              <p>
                At <strong className="text-white font-semibold">The Ankit Photography</strong>, our studio in Chanakya Nagar, Begusarai, Bihar is built on quiet observation rather than stage direction. We believe the true spirit of an Indian wedding lives in the unscripted pauses—the quiet tear during the Kanyadaan, the grandfather’s gentle hand on the groom’s shoulder, and the sheer wedding celebration of the family.
              </p>
              <p>
                With every assignment, our dedicated team brings fine-art sensibilities, cinema-grade optics, and respectful cultural understanding to document your family’s heirloom milestones.
              </p>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-8">
            <p className="text-lg md:text-xl font-serif text-purple-200/95 italic leading-relaxed pt-6">
              "Founded on the belief that wedding memories should feel as vivid thirty years later as they felt in the split-second they occurred."
            </p>

            {/* Landscape Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-purple-950 bg-[#1d0e34]/30 mt-4 group">
              <img 
                src={portfolioItems[2].image} 
                alt="Studio sunset story" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0f051d]/20" />
              <button 
                onClick={() => {
                  const sunsetItem = portfolioItems.find(item => item.id === '03');
                  if (sunsetItem) setActiveLightbox(sunsetItem);
                }}
                className="absolute bottom-4 right-4 p-2 bg-[#0f051d]/90 backdrop-blur-md rounded-full text-purple-400 hover:text-white border border-purple-950 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                aria-label="View Fullscreen"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WORKS / CURATED ARCHIVE SECTION (SCREENSHOT 4) */}
      <section id="works" className="py-20 bg-[#0c0318] border-y border-purple-950/30 px-4 md:px-8 max-w-full scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-purple-400">
                <span>// 02 CURATED ARCHIVE</span>
                <div className="w-10 h-[1px] bg-purple-900" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Selected <span className="font-serif text-purple-300 italic font-medium">Stories</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A chronological glimpse of royal brides, quiet tears, laughter in the rain, and sacred heritage across Bihar.
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-purple-300 font-medium">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping inline-block" />
                <span>Click any photograph to view high-resolution editorial details</span>
              </div>
            </div>
          </div>

          {/* Image Grid Layout (Screenshot 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1 (Left - Wide Wedding Story) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div 
                onClick={() => setActiveLightbox(portfolioItems[0])}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-purple-950 cursor-pointer group bg-[#1d0e34]/20"
              >
                <img 
                  src={portfolioItems[0].image} 
                  alt="Wedding celebration" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Custom Metadata pill over image */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#7c3aed] text-white text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase">
                    01 • WEDDINGS
                  </span>
                </div>

                {/* Subtitle bottom panel overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase">WEDDING</span>
                    <h3 className="text-lg md:text-xl font-serif text-white">{portfolioItems[0].title}</h3>
                  </div>
                  <div className="p-3 bg-purple-600 rounded-full text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 (Right - Compact Candid Story) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div 
                onClick={() => setActiveLightbox(portfolioItems[1])}
                className="relative aspect-[4/3] lg:h-full rounded-3xl overflow-hidden shadow-lg border border-purple-950 cursor-pointer group bg-[#1d0e34]/20"
              >
                <img 
                  src={portfolioItems[1].image} 
                  alt="Candid bouquet walk" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="bg-purple-950/90 border border-purple-800/40 text-purple-300 text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase">
                    02 • CANDID
                  </span>
                </div>

                {/* Subtitle bottom panel overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase">CANDID</span>
                    <h3 className="text-lg md:text-xl font-serif text-white">{portfolioItems[1].title}</h3>
                  </div>
                  <div className="p-3 bg-purple-600 rounded-full text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mt-8">
            {portfolioItems.slice(2).map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-purple-950 cursor-pointer group bg-[#1d0e34]/20`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#1d0e34]/90 border border-purple-900/50 text-purple-300 text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Subtitle bottom panel */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">PORTFOLIO</span>
                    <h3 className="text-lg md:text-xl font-serif text-white">{item.title}</h3>
                  </div>
                  <div className="p-3 bg-purple-600 rounded-full text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SPECIALITIES / SERVICES SECTION (SCREENSHOT 5) */}
      <section id="specialities" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
        
        {/* Title row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Our Craft & <span className="font-serif text-purple-300 italic font-medium">Specialities</span>
            </h2>
          </div>
          <div className="shrink-0 flex items-center">
            <div className="bg-[#1d0e34] border border-purple-950/60 rounded-full px-5 py-2.5 flex items-center gap-2 text-xs font-semibold text-purple-300">
              <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400/20" />
              <span>Tailored Wedding Cinema · High Quality Google Review Standards</span>
            </div>
          </div>
        </div>

        {/* Categories Tab Selector (Interactive Tabs - NO Static Pills) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-purple-950/20 no-scrollbar overflow-x-auto">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/50' 
                  : 'bg-[#1d0e34]/60 hover:bg-[#1d0e34] text-gray-400 hover:text-white border border-purple-950/50'
              }`}
            >
              {cat} {cat === 'All' ? `(${services.length})` : ''}
            </button>
          ))}
        </div>

        {/* Services 4-Column Grid on desktop (Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => (
            <div 
              key={srv.id}
              className="bg-[#130825] border border-purple-950/80 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-800 transition-all group hover:-translate-y-1 duration-300"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-950/30 mb-4">
                  <span className="text-xs font-mono font-bold text-purple-500">{srv.id}</span>
                  <span className="text-[9px] font-bold tracking-widest text-purple-400 uppercase">{srv.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{srv.title}</h3>
                
                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6">{srv.description}</p>
              </div>

              {/* Inquire button */}
              <a 
                href={getWhatsAppLink(`Hi The Ankit Photography, I would like to inquire about your "${srv.title}" services.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[11px] font-extrabold tracking-widest text-purple-300 group-hover:text-purple-200 uppercase pt-2 transition-colors border-t border-purple-950/10"
              >
                <span>INQUIRE VIA WHATSAPP</span>
                <div className="p-1.5 bg-purple-950/80 border border-purple-900/50 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all text-purple-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          ))}
        </div>

      </section>

      {/* CONTACT & GET IN TOUCH SECTION (SCREENSHOT 6, 7, 8) */}
      <section id="contact" className="py-20 bg-[#0c0318] border-t border-purple-950/30 px-4 md:px-8 max-w-full scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Contact Details & Form */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-purple-400">
                  <span>// 04 GET IN TOUCH</span>
                  <div className="w-10 h-[1px] bg-purple-900" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-none">
                  Let's Create <br />
                  <span className="font-serif text-purple-300 italic font-medium leading-normal">Something Memorable.</span>
                </h2>
                <p className="text-gray-400 text-xs md:text-sm max-w-lg mt-2">
                  Have a special moment coming up? We'd love to help turn it into a memory you'll always have. Let's arrange a friendly discussion.
                </p>
              </div>

              {/* Direct Studio Card (Screenshot 6) */}
              <div className="bg-[#140827] border border-purple-950/80 p-6 rounded-3xl shadow-xl max-w-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">DIRECT STUDIO LINE & WHATSAPP</span>
                  <span className="bg-purple-950 border border-purple-900/50 text-[9px] font-bold text-purple-300 px-3 py-1 rounded-full">
                    OPEN DAILY
                  </span>
                </div>

                <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                  {PHONE_NUMBER}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href={getWhatsAppLink('Hi The Ankit Photography, I would like to book an appointment to talk about wedding planning.')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest px-6 py-3.5 rounded-full transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>CHAT ON WHATSAPP ↗</span>
                  </a>
                  <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-2 border border-purple-900/60 hover:border-purple-600 text-gray-200 hover:text-white text-xs font-bold tracking-widest px-6 py-3.5 rounded-full transition-all bg-[#1d0e34]/20"
                  >
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span>CALL DIRECTLY</span>
                  </a>
                </div>
              </div>

              {/* Two Column Small Cards (Hours & Location range) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div className="bg-[#140827]/60 border border-purple-950/40 p-5 rounded-2xl flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">STUDIO HOURS</h4>
                    <p className="text-xs text-gray-400">Mon - Sun: 9:00 AM - 8:30 PM</p>
                  </div>
                </div>
                <div className="bg-[#140827]/60 border border-purple-950/40 p-5 rounded-2xl flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">ON-LOCATION</h4>
                    <p className="text-xs text-gray-400">Available Across Bihar & India</p>
                  </div>
                </div>
              </div>

              {/* inquiry form / plan your session (Screenshot 8) */}
              <div className="bg-[#140827] border border-purple-950/80 p-6 md:p-8 rounded-3xl shadow-xl max-w-xl">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full inline-block" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">INSTANT SHOOT INQUIRY</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-6">Plan Your Session</h3>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Occasion</label>
                    <select 
                      value={occasion} 
                      onChange={(e) => setOccasion(e.target.value)}
                      className="bg-[#0f051d] border border-purple-950/80 rounded-xl px-4 py-3 text-xs text-white focus:border-purple-600 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Bridal Shoot">Bridal Portrait Shoot</option>
                      <option value="Candid Session">Candid Coverage</option>
                      <option value="Portrait Session">Portrait & Glamour Session</option>
                      <option value="Event Photography">Festive Event Coverage</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Name (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Priya Sharma" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#0f051d] border border-purple-950/80 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tentative Date</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Nov 2026" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-[#0f051d] border border-purple-950/80 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Short Note or Questions</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Looking for 2-day wedding & candid coverage in Begusarai" 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="bg-[#0f051d] border border-purple-950/80 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-widest py-4 rounded-xl transition-all shadow-md cursor-pointer mt-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SEND INQUIRY VIA WHATSAPP</span>
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column - Studio Location & Map (Screenshot 6, 7) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-4">
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">• // STUDIO LOCATION</span>
                <h3 className="text-3xl font-extrabold text-white">
                  Find <span className="font-serif text-purple-300 italic font-medium">Us</span>
                </h3>
              </div>

              {/* Location details container */}
              <div className="bg-[#140827] border border-purple-950/80 p-6 rounded-3xl shadow-xl flex items-start gap-4">
                <div className="p-3 bg-purple-950 border border-purple-900/50 rounded-2xl text-purple-400 shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-widest text-purple-400 uppercase">PLUS CODE: {PLUS_CODE.split(' ')[0]}</span>
                    <h4 className="text-base font-bold text-white mt-1">The Ankit Photography</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {STUDIO_LOCATION}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <a 
                      href={MAP_DIRECTIONS_URL}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-purple-400 hover:text-purple-300 transition-colors uppercase"
                    >
                      <span>Get Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map View Frame (Screenshot 7) */}
              <div className="bg-[#140827] border border-purple-950/80 p-2 rounded-3xl shadow-xl overflow-hidden aspect-[4/3] relative flex flex-col justify-between">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  
                  {/* Real Interactive Map via Iframe pointing to Begusarai */}
                  <iframe 
                    title="The Ankit Photography Location Map in Begusarai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3155353591963!2d86.11585255!3d25.4552467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f216ff255291b5%3A0x7d67ff9bdf9753c2!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale brightness-75 contrast-125"
                  />

                  {/* Little location card embedded on top-left of the map just like in screenshots */}
                  <div className="absolute top-4 left-4 bg-[#0f051d]/90 backdrop-blur-md border border-purple-950 p-3 rounded-xl max-w-[200px]">
                    <div className="flex flex-col">
                      <span className="font-extrabold text-[10px] text-white">Begusarai</span>
                      <span className="text-[9px] text-purple-400 mt-0.5">Bihar 851101, India</span>
                    </div>
                  </div>
                </div>
                
                {/* External map action line */}
                <div className="pt-3 pb-1 px-3 flex items-center justify-between text-[11px] font-bold text-purple-300">
                  <span>GOOGLE MAPS INTERACTIVE VIEW</span>
                  <a 
                    href={MAP_DIRECTIONS_URL}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Open full screen ↗</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION (SCREENSHOT 9) */}
      <footer className="bg-[#0b0317] border-t border-purple-950/60 pt-20 pb-8 relative overflow-hidden">
        
        {/* Giant faded background text (Preserving design in Screenshot 9) */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-black tracking-widest text-purple-950/5 pointer-events-none uppercase font-sans select-none whitespace-nowrap">
          THE ANKIT
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Main Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-purple-950/40">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="flex items-center gap-2 text-sm md:text-base font-extrabold tracking-widest text-white uppercase">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                THE ANKIT <span className="text-purple-400 font-light">PHOTOGRAPHY</span>
              </span>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm mt-1">
                Thoughtful visual storytelling turning genuine moments into timeless heirloom memories. Dedicated to documenting the beautiful heritage celebrations of Bihar and beyond.
              </p>
            </div>

            {/* Col 2: Location */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">LOCATION</span>
              <p className="text-xs text-gray-300 leading-relaxed">
                {STUDIO_LOCATION}
              </p>
            </div>

            {/* Col 3: Contact */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">CONTACT</span>
              <a href={`tel:${PHONE_NUMBER}`} className="text-xs text-white font-semibold hover:text-purple-400 transition-colors">
                {PHONE_NUMBER}
              </a>
              <span className="text-[9px] text-gray-500">Available on WhatsApp daily</span>
            </div>

            {/* Col 4: Specialities metadata indicators (Screenshot 9 style) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">SPECIALITIES</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-purple-950/80 border border-purple-900/40 text-purple-300 text-[8px] font-bold tracking-wider px-2.5 py-1 rounded-md">WEDDINGS</span>
                <span className="bg-purple-950/80 border border-purple-900/40 text-purple-300 text-[8px] font-bold tracking-wider px-2.5 py-1 rounded-md">PORTRAIT</span>
                <span className="bg-purple-950/80 border border-purple-900/40 text-purple-300 text-[8px] font-bold tracking-wider px-2.5 py-1 rounded-md">EVENTS</span>
                <span className="bg-purple-950/80 border border-purple-900/40 text-purple-300 text-[8px] font-bold tracking-wider px-2.5 py-1 rounded-md">CANDID</span>
              </div>
            </div>

          </div>

          {/* Quick Nav row (Screenshot 9) */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-purple-950/10">
            <nav className="flex items-center flex-wrap gap-6 text-[11px] font-bold tracking-widest text-gray-400">
              <a href="#" className="hover:text-white transition-colors">HOME</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              <a href="#works" className="hover:text-white transition-colors">WORKS</a>
              <a href="#specialities" className="hover:text-white transition-colors">SPECIALITIES</a>
              <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
            </nav>

            {/* Back to top (Screenshot 9) */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 border border-purple-950 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest text-gray-300 hover:text-white hover:bg-purple-950/20 transition-all cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
            <span>© 2026 THE ANKIT PHOTOGRAPHY</span>
            <div className="flex items-center gap-2">
              <span>ALL RIGHTS RESERVED</span>
              <span>•</span>
              <span>BEGUSARAI, BIHAR</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FIXED FLOATING WHATSAPP BUTTON (SCREENSHOTS 1-9) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href={getWhatsAppLink('Hi The Ankit Photography, I would like to inquire about your premium services.')}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#090214] hover:bg-[#130728] text-white border border-purple-950/80 px-4.5 py-3 rounded-full shadow-2xl transition-transform hover:-translate-y-1 duration-300 font-bold text-xs tracking-wider group"
        >
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] tracking-widest">WHATSAPP STUDIO</span>
          <MessageSquare className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
        </a>
      </div>

      {/* LIGHTBOX MODAL DIALOG (High Fidelity Dynamic Feature) */}
      {activeLightbox && (
        <div 
          className="fixed inset-0 z-50 bg-[#0f051d]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 p-3 bg-purple-950/80 rounded-full text-gray-300 hover:text-white hover:bg-purple-900 border border-purple-900/40 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox content block */}
          <div 
            className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#140827] border border-purple-950/80 p-5 md:p-8 rounded-[32px] shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Image panel */}
            <div className="lg:col-span-7 flex items-center justify-center bg-[#0c0318]/50 rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src={activeLightbox.image} 
                alt={activeLightbox.title} 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[60vh] object-contain rounded-xl"
              />
            </div>

            {/* Text description panel */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="flex flex-col gap-4">
                
                {/* Meta details */}
                <div className="flex items-center gap-2">
                  <span className="bg-[#7c3aed] text-white text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-md uppercase">
                    {activeLightbox.category}
                  </span>
                  <span className="text-[10px] font-bold text-purple-400">PORTFOLIO EXCLUSIVES</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {activeLightbox.title}
                </h3>

                {/* Narrative */}
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                  {activeLightbox.details}
                </p>

                {/* EXIF Data block - Very high fidelity photographic detail */}
                <div className="bg-[#0f051d]/80 border border-purple-950 p-4 rounded-xl mt-2 flex flex-col gap-1.5">
                  <div className="text-[9px] font-bold text-purple-400 tracking-wider uppercase">CAMERA METADATA</div>
                  <div className="text-xs text-gray-400 font-mono">
                    {activeLightbox.exif}
                  </div>
                </div>

              </div>

              {/* Inquiry Action */}
              <div className="pt-6 border-t border-purple-950/40 mt-6 flex flex-col gap-3">
                <a 
                  href={getWhatsAppLink(`Hi The Ankit Photography, I saw your beautiful photo "${activeLightbox.title}" in your archive and would love to ask some questions.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-widest py-3 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>INQUIRE ABOUT THIS STYLE</span>
                </a>
                <button 
                  onClick={() => setActiveLightbox(null)}
                  className="text-xs font-bold text-gray-400 hover:text-white transition-colors py-2 uppercase"
                >
                  Close details
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
