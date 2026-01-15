import { useState } from 'react';
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
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
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg"
            />
            <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-foreground">
              SPHURAN<span className="text-primary">4.0</span>
            </span>
          </a>

          {/* Desktop & Mobile Menu Button - Right Side */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-slide-up z-50">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors font-body text-sm tracking-wide border-b border-border last:border-b-0"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
