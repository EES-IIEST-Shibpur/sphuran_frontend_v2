import { useEffect, useState } from 'react';

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
      const starCount = 80;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5,
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
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/60"
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
      {[...Array(10)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: '0 0 8px hsl(var(--primary) / 0.6)',
          }}
        />
      ))}

      {/* Subtle vertical lines */}
      <div className="absolute left-[20%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute left-[80%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Ambient glow spots */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/2 rounded-full blur-[80px]" />
    </div>
  );
};

export default StarField;
