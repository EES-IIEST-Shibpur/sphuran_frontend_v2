import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import ScheduleSection from '@/components/ScheduleSection';
import ContactSection from '@/components/ContactSection';
import PastSponsers from '@/components/PastSponsers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Star Background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <ContactSection />
        <PastSponsers />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
