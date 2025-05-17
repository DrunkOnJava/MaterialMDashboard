import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { cn } from '../../lib/utils';

interface LazyAvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  className?: string;
  placeholderSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyAvatar: React.FC<LazyAvatarProps> = ({
  src,
  alt = '',
  fallback,
  className,
  placeholderSrc = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23f3f4f6%22%2F%3E%3C%2Fsvg%3E',
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = React.useState(placeholderSrc);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const avatarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            
            img.onload = () => {
              setImageSrc(src);
              setImageLoaded(true);
              if (onLoad) onLoad();
            };
            
            img.onerror = () => {
              setHasError(true);
              if (onError) onError();
            };

            // Disconnect observer once image starts loading
            if (avatarRef.current) {
              observer.unobserve(avatarRef.current);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (avatarRef.current) {
      observer.observe(avatarRef.current);
    }

    return () => {
      if (avatarRef.current) {
        observer.unobserve(avatarRef.current);
      }
    };
  }, [src, placeholderSrc, onLoad, onError]);

  return (
    <Avatar ref={avatarRef} className={className}>
      {!hasError && src ? (
        <AvatarImage 
          src={imageSrc} 
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            imageLoaded ? 'opacity-100' : 'opacity-50'
          )}
        />
      ) : null}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};