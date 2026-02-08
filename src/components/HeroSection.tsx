import { useEffect, useState } from 'react';
import Hyperspeed from './ui/animatedComponents/hyperSpeed';
import TextType from './ui/animatedComponents/textType';
import ShinyText from './ui/animatedComponents/shinyText';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile-optimized settings (reduced quality for performance)
  const mobileOptions = {
    "distortion": "turbulentDistortion",
    "length": 300,
    "roadWidth": 9,
    "islandWidth": 1.5,
    "lanesPerRoad": 2,
    "fov": 90,
    "fovSpeedUp": 150,
    "speedUp": 2,
    "carLightsFade": 0.4,
    "totalSideLightSticks": 8,
    "lightPairsPerRoadWay": 15,
    "shoulderLinesWidthPercentage": 0.05,
    "brokenLinesWidthPercentage": 0.1,
    "brokenLinesLengthPercentage": 0.5,
    "lightStickWidth": [0.12, 0.4] as [number, number],
    "lightStickHeight": [1.2, 1.5] as [number, number],
    "movingAwaySpeed": [50, 70] as [number, number],
    "movingCloserSpeed": [-100, -140] as [number, number],
    "carLightsLength": [12, 60] as [number, number],
    "carLightsRadius": [0.05, 0.12] as [number, number],
    "carWidthPercentage": [0.3, 0.5] as [number, number],
    "carShiftX": [-0.8, 0.8] as [number, number],
    "carFloorSeparation": [0, 3] as [number, number],
    "colors": {
      "roadColor": 526344,
      "islandColor": 657930,
      "background": 0,
      "shoulderLines": 1250072,
      "brokenLines": 1250072,
      "leftCars": [14177983, 6770850, 12732332],
      "rightCars": [242627, 941733, 3294549],
      "sticks": 242627
    },
    "onSpeedUp": (ev: any) => ev.preventDefault(),
    "onSlowDown": (ev: any) => ev.preventDefault()
  };

  // Desktop settings (full quality)
  const desktopOptions = {
    "distortion": "turbulentDistortion",
    "length": 400,
    "roadWidth": 10,
    "islandWidth": 2,
    "lanesPerRoad": 3,
    "fov": 90,
    "fovSpeedUp": 150,
    "speedUp": 2.5,
    "carLightsFade": 0.4,
    "totalSideLightSticks": 20,
    "lightPairsPerRoadWay": 40,
    "shoulderLinesWidthPercentage": 0.05,
    "brokenLinesWidthPercentage": 0.1,
    "brokenLinesLengthPercentage": 0.5,
    "lightStickWidth": [0.12, 0.5] as [number, number],
    "lightStickHeight": [1.3, 1.7] as [number, number],
    "movingAwaySpeed": [60, 80] as [number, number],
    "movingCloserSpeed": [-120, -160] as [number, number],
    "carLightsLength": [12, 80] as [number, number],
    "carLightsRadius": [0.05, 0.14] as [number, number],
    "carWidthPercentage": [0.3, 0.5] as [number, number],
    "carShiftX": [-0.8, 0.8] as [number, number],
    "carFloorSeparation": [0, 5] as [number, number],
    "colors": {
      "roadColor": 526344,
      "islandColor": 657930,
      "background": 0,
      "shoulderLines": 1250072,
      "brokenLines": 1250072,
      "leftCars": [14177983, 6770850, 12732332],
      "rightCars": [242627, 941733, 3294549],
      "sticks": 242627
    },
    "onSpeedUp": (ev: any) => ev.preventDefault(),
    "onSlowDown": (ev: any) => ev.preventDefault()
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* HyperSpeed Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40" style={{ pointerEvents: 'none' }}>
        <div className="w-full h-full" style={{ pointerEvents: 'auto' }}>
          <Hyperspeed effectOptions={isMobile ? mobileOptions : desktopOptions} />
        </div>
      </div>

      {/* Floating Badges */}
      {/* <div className="absolute top-32 left-8 md:left-16 z-20 animate-float">
        <div className="px-4 py-2 bg-card border border-border rounded-full font-body text-xs md:text-sm tracking-widest text-muted-foreground">
          2026
        </div>
      </div> */}

      <div className="absolute top-24 sm:top-32 md:top-40 right-4 sm:right-8 md:right-20 z-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-full font-display text-[10px] sm:text-xs md:text-sm tracking-wider font-bold">
          4TH EDITION
        </div>
      </div>

      {/* <div className="absolute top-56 left-1/2 -translate-x-1/2 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="px-6 py-3 bg-card/80 backdrop-blur border border-primary/30 rounded-full font-body text-xs tracking-widest text-primary">
          EES IIEST SHIBPUR
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo positioned creatively */}
        {/* <div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 lg:right-24 z-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <img 
            src={sphuranLogo} 
            alt="Sphuran Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain rounded-2xl shadow-2xl border-2 border-primary/30 animate-pulse-slow"
          />
        </div> */}

        {/* Massive Typography - SPHURAN */}
        <div className="relative mt-2 sm:mt-16 md:mt-24 lg:mt-32">
          <h1 className="font-display text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black tracking-tighter text-foreground leading-none select-none">
            <ShinyText
              text="SPHURAN"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>

          {/* 4.0 overlapping */}
          <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-72 right-4 sm:right-8 md:right-20">
            <span className="font-display text-[3rem] sm:text-[5rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black text-primary text-glow-strong leading-none select-none opacity-90">
              4.0
            </span>
          </div>
          {/* Coming Soon */}
          <div className='absolute -bottom-8 sm:-bottom-32 md:-bottom-[370px] left-0 sm:left-auto sm:right-8 md:right-48 text-sm sm:text-lg md:text-2xl lg:text-3xl text-white font-display text-glow font-bold tracking-wide px-2 sm:px-4 py-1 sm:py-2 rounded-lg'>
            <TextType
              text={["Coming Soon!", "Prepare to Outsmart", "Stay Wired!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={{ min: 60, max: 120 }}
              cursorBlinkDuration={0.5}
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 sm:mt-20 md:mt-32 max-w-xl">
          <p className="font-body text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4">
            Electrical Engineers' Society Presents
          </p>
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground tracking-wide mb-4 md:mb-6">
            WHERE INNOVATION<br />
            MEETS <span className="text-primary">EXCELLENCE</span>
          </h2>
          <p className="font-body text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
            The technical festival of the Electrical Engineering Department at IIEST Shibpur,
            bringing together students, industry leaders, and researchers to showcase technical skills and innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12">
          <a
            href="#events"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-display text-xs sm:text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong"
          >
            EXPLORE EVENTS
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-16 mt-12 sm:mt-16 md:mt-24">
          <div>
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-glow">4</div>
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Edition</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">9+</div>
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Events</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">1856</div>
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Est.</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">INI</div>
            <div className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1 sm:mt-2">Status</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
