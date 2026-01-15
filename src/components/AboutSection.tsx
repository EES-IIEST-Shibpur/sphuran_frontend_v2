import electricalIcon from '@/assets/electrical-icon.png';
import sphuranLogo from '@/assets/sphuran-logo.jpg';

const stats = [
  { value: '5000+', label: 'Participants' },
  { value: '50+', label: 'Events' },
  { value: '100+', label: 'Colleges' },
  { value: '3', label: 'Days' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary text-sm tracking-widest uppercase">
            About The Fest
          </span>
          <div className="flex items-center justify-center gap-4 mt-4">
            <img 
              src={sphuranLogo} 
              alt="Sphuran Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
            />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              SPHURAN 4.0
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Electrical Icon */}
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={electricalIcon} 
                alt="Electrical Engineering" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  Electrical Engineers' Society
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  IIEST Shibpur, Est. 1856
                </p>
              </div>
            </div>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Sphuran, organized by the Electrical Engineers' Society (EES) of the 
              Department of Electrical Engineering at IIEST Shibpur, is the annual 
              technical festival that brings together the brightest minds from across the nation.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Now in its fourth edition, Sphuran 4.0 promises to be bigger, better, and more 
              innovative than ever before. With over 50 events spanning coding competitions, 
              robotics, hackathons, power systems challenges, circuit design contests, and 
              guest lectures from industry leaders.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Join us for three days of non-stop innovation, learning, and competition at 
              one of India's oldest and most prestigious engineering institutions. Push your 
              boundaries, challenge the status quo, and be part of something extraordinary.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 border border-border bg-card/50 rounded-lg text-center hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-glow">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-muted-foreground mt-2 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
