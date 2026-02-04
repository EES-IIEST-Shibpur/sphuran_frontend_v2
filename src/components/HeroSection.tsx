import { useEffect, useState } from 'react';
import sphuranLogo from '@/assets/sphuran-logo.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Floating Badges */}
      <div className="absolute top-32 left-8 md:left-16 z-20 animate-float">
        <div className="px-4 py-2 bg-card border border-border rounded-full font-body text-xs md:text-sm tracking-widest text-muted-foreground">
          2026
        </div>
      </div>
      
      <div className="absolute top-40 right-8 md:right-20 z-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-display text-xs md:text-sm tracking-wider font-bold">
          4TH EDITION
        </div>
      </div>

      <div className="absolute top-56 left-1/2 -translate-x-1/2 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="px-6 py-3 bg-card/80 backdrop-blur border border-primary/30 rounded-full font-body text-xs tracking-widest text-primary">
          EES IIEST SHIBPUR
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo positioned creatively */}
        <div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 lg:right-24 z-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <img 
            src={sphuranLogo} 
            alt="Sphuran Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain rounded-2xl shadow-2xl border-2 border-primary/30 animate-pulse-slow"
          />
        </div>

        {/* Massive Typography - SPHURAN */}
        <div className="relative mt-32 md:mt-24">
          <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black tracking-tighter text-foreground leading-none select-none">
            SPHU
            <span className="text-primary text-glow-strong">R</span>
            AN
          </h1>
          
          {/* 4.0 overlapping */}
          <div className="absolute -bottom-8 md:-bottom-16 right-0 md:right-20">
            <span className="font-display text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black text-primary text-glow-strong leading-none select-none opacity-90">
              4.0
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-20 md:mt-32 max-w-xl">
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Electrical Engineers' Society Presents
          </p>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground tracking-wide mb-6">
            WHERE INNOVATION<br/>
            MEETS <span className="text-primary">EXCELLENCE</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            The technical festival of the Electrical Engineering Department at IIEST Shibpur, 
            bringing together students, industry leaders, and researchers to showcase technical skills and innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#events"
            className="group px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong"
          >
            EXPLORE EVENTS
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-border text-foreground font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-8 md:gap-16 mt-16 md:mt-24">
          <div>
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-glow">4</div>
            <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Edition</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">9+</div>
            <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Events</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">1856</div>
            <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Est.</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">INI</div>
            <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Status</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
