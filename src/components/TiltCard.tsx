import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  options?: {
    max?: number;
    speed?: number;
    glare?: boolean;
    'max-glare'?: number;
    scale?: number;
  };
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  options = {} 
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
    scale: 1.05,
    ...options
  };

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, defaultOptions);
    }

    return () => {
      if (tiltRef.current && 'vanillaTilt' in tiltRef.current) {
        (tiltRef.current as any).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={`tilt-card ${className}`}>
      <div className="tilt-card-inner">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;