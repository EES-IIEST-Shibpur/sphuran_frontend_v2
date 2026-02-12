import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  date: string;
  prize: string;
  image?: string;
  onClick?: () => void;
}

const EventCard = memo(({ title, description, icon: Icon, category, date, prize, image, onClick }: EventCardProps) => {
  return (
    <div 
      className="group relative h-full bg-background border border-border hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
      onClick={onClick}
    >
      {/* Image Banner (if available) */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-card/50">
          <img 
            src={image} 
            alt={`${title} - SPHURAN 4.0 Competition Event at IIEST Shibpur`}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Top Bar with Category */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/50">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {category}
        </span>
        <span className="font-display text-xs font-bold text-primary">{prize}</span>
      </div>

      {/* Main Content */}
      <div className="p-5 flex-1">
        {/* Icon (only show if no image) */}
        {!image && (
          <div className="w-12 h-12 flex items-center justify-center bg-card border border-border mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
        )}

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t border-border bg-card/30">
        <div className="flex items-center justify-between">
          <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">{date}</span>
          <span className="font-body text-[10px] tracking-widest uppercase text-primary group-hover:translate-x-1 transition-transform">
            View Details →
          </span>
        </div>
      </div>

      {/* Bottom padding for absolute footer */}
      <div className="h-12" />

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
    </div>
  );
});

EventCard.displayName = 'EventCard';

export default EventCard;
