import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import sphuranLogo from '@/assets/sphuran-logo.jpg';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <img 
              src={sphuranLogo} 
              alt="Sphuran Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg border border-border"
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

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#events');
              }}
              className="hidden md:block px-5 py-2 bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/90 transition-all"
            >
              Register
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors border-b border-border last:border-b-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#events');
              }}
              className="block mt-4 py-3 text-center bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
