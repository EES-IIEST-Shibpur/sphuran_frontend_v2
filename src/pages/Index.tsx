import { lazy, Suspense } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';

const sphuranLogo = "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536102/sphuran-logo_a6mzzi.png";

// Lazy load heavy components for better performance
const HeroSection = lazy(() => import('@/components/HeroSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const EventsSection = lazy(() => import('@/components/EventsSection'));
const ScheduleSection = lazy(() => import('@/components/ScheduleSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const PastSponsers = lazy(() => import('@/components/PastSponsers'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Star Background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={sphuranLogo} alt="Loading" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={sphuranLogo} alt="Loading" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <EventsSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><img src={sphuranLogo} alt="Loading" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <ScheduleSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><img src={sphuranLogo} alt="Loading" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <ContactSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><img src={sphuranLogo} alt="Loading" className="h-16 w-16 object-contain animate-pulse" /></div>}>
          <PastSponsers />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[20vh]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
