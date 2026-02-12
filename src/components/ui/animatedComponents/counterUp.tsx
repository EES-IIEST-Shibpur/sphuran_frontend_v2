import { useEffect, useRef, useState } from 'react';

interface CounterUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const CounterUp = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 2000, 
  className = '',
  decimals = 0 
}: CounterUpProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const progress = 1 - remaining / duration;

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (remaining > 0) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : count.toString();

  return (
    <div ref={counterRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
};
