import { useEffect, useState } from 'react';
import circuitPattern from '@/assets/circuit-pattern.png';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circuit Pattern Overlay - Top Right */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 opacity-10"
        style={{
          backgroundImage: `url(${circuitPattern})`,
          backgroundSize: 'cover',
          filter: 'blur(1px)',
        }}
      />
      
      {/* Circuit Pattern Overlay - Bottom Left */}
      <div 
        className="absolute -bottom-20 -left-20 w-96 h-96 opacity-10 rotate-180"
        style={{
          backgroundImage: `url(${circuitPattern})`,
          backgroundSize: 'cover',
          filter: 'blur(1px)',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Larger accent stars (electric blue) */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: '0 0 10px hsl(187 100% 50% / 0.8)',
          }}
        />
      ))}

      {/* Electric spark lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`spark-${i}`}
          className="absolute bg-primary/30"
          style={{
            left: `${20 + i * 15}%`,
            top: '0',
            width: '1px',
            height: '100%',
            opacity: 0.1,
            animation: `twinkle ${5 + i}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
