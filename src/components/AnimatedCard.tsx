import { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className = '' }: AnimatedCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
