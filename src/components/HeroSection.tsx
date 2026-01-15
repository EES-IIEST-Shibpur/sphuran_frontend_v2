import heroElectricalBg from '@/assets/hero-electrical-bg.png';
import sphuranLogo from '@/assets/sphuran-logo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroElectricalBg} 
          alt="Electrical Engineering Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Organizer Badge */}
        <div className="animate-slide-up inline-block mb-4">
          <span className="px-4 py-2 text-xs md:text-sm font-body tracking-widest uppercase border border-primary/50 text-primary rounded-full">
            March 2025
          </span>
        </div>

        {/* Department Info */}
        <p 
          className="font-body text-sm md:text-base text-muted-foreground tracking-wider uppercase mb-6 animate-slide-up"
          style={{ animationDelay: '0.05s' }}
        >
          Electrical Engineers' Society Presents
        </p>

        {/* Sphuran Logo */}
        <div 
          className="animate-slide-up mb-6"
          style={{ animationDelay: '0.08s' }}
        >
          <img 
            src={sphuranLogo} 
            alt="Sphuran Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto object-contain rounded-2xl shadow-2xl border-2 border-primary/30 animate-pulse-slow"
          />
        </div>

        {/* Main Title */}
        <h1 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wider text-foreground mb-4 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          SPHURAN
        </h1>
        
        {/* Version Number */}
        <div 
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-primary text-glow-strong animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          4.0
        </div>

        {/* Tagline */}
        <p 
          className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mt-8 mb-4 tracking-wide animate-fade-in-delay"
        >
          Where Innovation Meets Excellence. The Ultimate Technical Extravaganza.
        </p>

        {/* Institute Info */}
        <p 
          className="font-body text-sm md:text-base text-primary/80 tracking-wide animate-fade-in-delay mb-12"
          style={{ animationDelay: '0.35s' }}
        >
          Department of Electrical Engineering, IIEST Shibpur
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#events"
            className="px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong rounded-sm"
          >
            Explore Events
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-foreground/30 text-foreground font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
          >
            Learn More
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
