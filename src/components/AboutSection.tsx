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
                <div className="font-body text-sm text-muted-foreground mt-1">2026</div>
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
            {/* About Sphuran */}
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">About Sphuran</h3>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Sphuran</span>, the technical festival of the Electrical Engineering 
                Department at IIEST Shibpur, brings together students, industry leaders, and researchers to showcase 
                technical skills and innovations. It serves as a dynamic platform that highlights creativity, 
                innovation, and excellence in the field of electrical engineering.
              </p>
            </div>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Known for intellectually stimulating events such as paper presentations, project exhibitions, 
              robotics, and hackathons, Sphuran encourages creative and critical thinking while enabling 
              students to network, build strong portfolios, and gain exposure to the latest trends and technologies.
            </p>

            {/* About EES */}
            <div className="p-6 bg-card/50 border border-border rounded-lg">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">About EES</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                The Electrical Engineers' Society (EES) of IIEST Shibpur was founded with the vision of uniting 
                bright and driven minds passionate about electrical engineering. EES serves as a platform that 
                inspires learning, collaboration and innovation—encouraging students to explore beyond classroom 
                boundaries and develop both technical and leadership abilities.
              </p>
            </div>

            {/* Stats Row - Inline Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-primary text-glow">4</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Edition</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">9+</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Events</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">1856</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Est.</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">INI</div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2">Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* About IIEST Section */}
        <div className="mt-20 p-8 md:p-12 border border-border bg-card/30 rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary font-display text-sm tracking-wider rounded-full">
              ESTD 1856
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground">IIEST, Shibpur</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="font-body text-muted-foreground leading-relaxed">
              Indian Institute of Engineering Science and Technology, Shibpur (formerly Bengal Engineering College), 
              established in 1856, is one of the oldest and most respected engineering institutions in India. 
              With a strong legacy of excellence, the institute provides a multidisciplinary research environment, 
              nurturing innovation and technological advancement aimed at contributing to a developed India.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              As an Institution of National Importance, IIEST is committed to producing skilled engineers, 
              researchers, and innovators equipped for global challenges. The institute blends rigorous academics 
              with hands-on exposure, leadership opportunities, and vibrant campus culture—empowering students to 
              excel in their chosen fields and make meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default AboutSection;
