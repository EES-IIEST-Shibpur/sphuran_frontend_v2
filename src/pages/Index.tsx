import { lazy, Suspense } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';

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
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" /></div>}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" /></div>}>
          <EventsSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" /></div>}>
          <ScheduleSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" /></div>}>
          <ContactSection />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[30vh] flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" /></div>}>
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
