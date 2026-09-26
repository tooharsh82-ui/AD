import React, { useState } from 'react';
import { Play, Film, Clock, Eye } from 'lucide-react';
import { youtubeVideos, YouTubeVideo } from '../data/portfolioData';

interface VideoCardProps {
  video: YouTubeVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#130825] border border-purple-950/80 rounded-3xl overflow-hidden group hover:border-purple-800 transition-all duration-300 shadow-xl flex flex-col justify-between h-full">
      {/* Video Player Container */}
      <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
            {/* Lazy Loaded Thumbnail Image with Modern responsive sizes */}
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              width="600"
              height="338"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-75"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-purple-950/10 group-hover:bg-purple-950/20 transition-colors duration-300" />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-purple-600/90 group-hover:bg-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 border border-purple-400/30">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>

            {/* Video Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 text-gray-300 border border-purple-950/50">
              <Clock className="w-3 h-3 text-purple-400" />
              <span>{video.duration}</span>
            </div>

            {/* Category Tag */}
            <div className="absolute top-4 left-4 bg-[#1d0e34]/90 border border-purple-900/50 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-purple-300 uppercase">
              {video.category}
            </div>
          </div>
        ) : (
          /* Actual YouTube Frame Loaded on demand only */
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-purple-400 uppercase">
          <Film className="w-3.5 h-3.5 text-purple-500" />
          <span>CINEMATIC PREVIEW</span>
        </div>
        <h4 className="text-sm font-bold text-gray-100 group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
          {video.title}
        </h4>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div className="w-full">
      {/* Interactive Toggle for Video Portfolio Showcase (Keeps initial load weight 0 unless chosen) */}
      <div className="flex flex-col items-center justify-center text-center gap-4 py-8 px-4 border border-purple-950/40 bg-[#1d0e34]/10 rounded-3xl max-w-3xl mx-auto my-6">
        <div className="p-3 bg-purple-950/80 border border-purple-900/50 rounded-2xl text-purple-400">
          <Film className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white">Cinematic Video Showcase</h3>
          <p className="text-xs text-gray-400 max-w-md">
            Preview our state-of-the-art cinematic wedding highlights, reels, and stories in high-definition quality.
          </p>
        </div>
        
        <button
          onClick={() => setShowVideos(!showVideos)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-widest px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-lg shadow-purple-950/50"
        >
          <Eye className="w-4 h-4" />
          <span>{showVideos ? 'HIDE CINEMATIC GALLERY' : 'EXPLORE CINEMATIC GALLERY'}</span>
        </button>
      </div>

      {/* Lazy-loaded grid that only mounts/renders when toggled to maximize core performance */}
      {showVideos && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {youtubeVideos.map((video) => (
            <div key={video.id} className="h-full">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
