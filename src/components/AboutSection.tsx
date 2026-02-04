import electricalIcon from '@/assets/electrical-icon.png';
import sphuranLogo from '@/assets/sphuran-logo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative vertical text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="font-display text-8xl font-black text-muted/10 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          SPHURAN
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Bold Editorial Style */}
        <div className="relative mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            About The Fest
          </span>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-4">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none">
              BEYOND
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow leading-none">
              LIMITS
            </h2>
          </div>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Content Grid - Magazine Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Large Quote */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <span className="absolute -left-4 -top-4 text-8xl font-display text-primary/20">"</span>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-tight pl-8">
                Where Innovation Meets Excellence
              </p>
            </div>
            
            {/* Logo & Badge */}
            <div className="flex items-center gap-6 pt-8 border-t border-border">
              <img 
                src={sphuranLogo} 
                alt="Sphuran Logo" 
                className="w-20 h-20 object-contain rounded-xl border border-border"
              />
              <div>
                <div className="font-display text-lg font-bold text-foreground">SPHURAN 4.0</div>
                <div className="font-body text-sm text-muted-foreground mt-1">March 2025</div>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full">4th Edition</span>
                </div>
              </div>
            </div>

            {/* EES Info */}
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <img 
                src={electricalIcon} 
                alt="Electrical Engineering" 
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  Electrical Engineers' Society
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Department of Electrical Engineering<br/>
                  IIEST Shibpur, Est. 1856
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">SPHURAN</span>, organized by the Electrical Engineers' Society (EES) 
              of the Department of Electrical Engineering at IIEST Shibpur, is the annual 
              technical festival that brings together the brightest minds from across the nation.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Now in its fourth edition, Sphuran 4.0 promises to be bigger, better, and more 
              innovative than ever before. With over 15 events spanning coding competitions, 
              robotics, hackathons, power systems challenges, circuit design contests, and 
              guest lectures from industry leaders.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Join us for three days of non-stop innovation, learning, and competition at 
              one of India's oldest and most prestigious engineering institutions.
            </p>

            {/* Stats Row - Inline Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-primary text-glow">4+</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Years</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">15+</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Events</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">100+</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Colleges</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">3</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default AboutSection;
