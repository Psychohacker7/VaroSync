import React, { useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  transparent?: boolean;
}

export function Image({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy', 
  placeholder = '#E6E3FF',
  transparent = false 
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: transparent ? 'transparent' : placeholder }}
    >
      {!isLoaded && !error && !transparent && (
        <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: placeholder }} />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
} 