import React, { useState, useRef, useEffect } from 'react';

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  loading?: 'lazy' | 'eager';
}

export function Video({ 
  src, 
  className = '', 
  autoPlay = true, 
  loop = true, 
  muted = true, 
  playsInline = true,
  poster,
  loading = 'lazy'
}: VideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'lazy' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              videoRef.current.load();
              observerRef.current?.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      if (videoRef.current) {
        observerRef.current.observe(videoRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
} 