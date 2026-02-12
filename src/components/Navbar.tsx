import { useState, useEffect, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipsTab from './ui/tabs/ChipsTab';
import { StaggeredMenu } from './ui/tabs/StaggeredMenu';
import { SocialLinks } from '@/lib/utils';
import { IMAGES } from '@/lib/assets';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '#contact' },
  { label: 'Sponsors', href: '/sponsor' },
  { label: 'Team', href: '/team' },
];

const staggeredMenuItems = navItems.map((item) => ({
  label: item.label,
  ariaLabel: `Navigate to ${item.label}`,
  link: item.href,
}));

const socialLinks = SocialLinks.map((social) => ({
  label: social.label,
  link: social.link,
}));

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Handle menu item clicks from StaggeredMenu for smooth scrolling
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a.sm-panel-item');
      if (link && link instanceof HTMLAnchorElement) {
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href);
          
          // Close the StaggeredMenu by clicking the toggle button
          const toggleButton = document.querySelector('.sm-toggle') as HTMLButtonElement;
          if (toggleButton && isOpen) {
            toggleButton.click();
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to other pages like /team or /sponsor
      navigate(href);
    } else if (href.startsWith('#')) {
      // Handle hash navigation
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first with hash
        navigate('/' + href);
        // Small delay to let the navigation complete
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile StaggeredMenu - Only visible on mobile */}
      <div className="lg:hidden fixed inset-0 z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          colors={['#1a1a2e', '#16213e', '#0f3460']}
          items={staggeredMenuItems}
          socialItems={socialLinks}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl={IMAGES.logos.sphuran}
          menuButtonColor={scrolled ? '#ffffff' : '#ffffff'}
          openMenuButtonColor="#000000"
          accentColor="#6366f1"
          isFixed={false}
          changeMenuColorOnOpen={true}
          closeOnClickAway={true}
          onMenuOpen={() => setIsOpen(true)}
          onMenuClose={() => setIsOpen(false)}
        />
      </div>

      {/* Desktop Navbar */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Hidden on mobile since StaggeredMenu has its own logo */}
            <a 
              href="#home" 
              className="hidden lg:flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              <img 
                src={IMAGES.logos.sphuran} 
                alt="SPHURAN Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg "
              />
              <div className="hidden sm:block">
                <span className="font-display text-lg md:text-xl font-bold tracking-wider text-foreground">
                  SPHURAN
                </span>
                <span className="font-display text-lg md:text-xl font-bold tracking-wider text-primary ml-1">
                  4.0
                </span>
              </div>
            </a>

            {/* Desktop Navigation with ChipsTab - Hidden on mobile */}
            <div className="hidden lg:block">
              <ChipsTab
                tabs={navItems}
                onSelect={(tab) => scrollToSection(tab.href ?? '')}
              />
            </div>

            {/* CTA Button - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#events"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#events');
                }}
                className="px-5 py-2 bg-primary text-white font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-all"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
