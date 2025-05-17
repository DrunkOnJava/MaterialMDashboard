import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  threshold?: number;
  rootMargin?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23f3f4f6%22%2F%3E%3C%2Fsvg%3E',
  threshold = 0.1,
  rootMargin = '50px',
  fallbackSrc,
  onLoad,
  onError,
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageLoading, setImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the actual image
            const img = new Image();
            img.src = src;
            
            img.onload = () => {
              setImageSrc(src);
              setImageLoading(false);
              if (onLoad) onLoad();
            };
            
            img.onerror = () => {
              setHasError(true);
              setImageLoading(false);
              if (fallbackSrc) {
                setImageSrc(fallbackSrc);
              }
              if (onError) onError();
            };

            // Disconnect observer once image starts loading
            if (imgRef.current) {
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, placeholderSrc, threshold, rootMargin, fallbackSrc, onLoad, onError]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        imageLoading ? 'opacity-50' : 'opacity-100',
        hasError && 'grayscale',
        className
      )}
      {...props}
    />
  );
};

// Lazy background image component for div elements
interface LazyBackgroundImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  placeholderSrc?: string;
  threshold?: number;
  rootMargin?: string;
  fallbackSrc?: string;
}

export const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  src,
  placeholderSrc = '',
  threshold = 0.1,
  rootMargin = '50px',
  fallbackSrc,
  className,
  style,
  children,
  ...props
}) => {
  const [backgroundImage, setBackgroundImage] = useState(
    placeholderSrc ? `url(${placeholderSrc})` : ''
  );
  const [isLoading, setIsLoading] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Preload the image
            const img = new Image();
            img.src = src;
            
            img.onload = () => {
              setBackgroundImage(`url(${src})`);
              setIsLoading(false);
            };
            
            img.onerror = () => {
              if (fallbackSrc) {
                setBackgroundImage(`url(${fallbackSrc})`);
              }
              setIsLoading(false);
            };

            // Disconnect observer
            if (divRef.current) {
              observer.unobserve(divRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [src, placeholderSrc, threshold, rootMargin, fallbackSrc]);

  return (
    <div
      ref={divRef}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-50' : 'opacity-100',
        className
      )}
      style={{
        ...style,
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      {...props}
    >
      {children}
    </div>
  );
};