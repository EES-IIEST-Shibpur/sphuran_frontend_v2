import sphuranLogo from '@/assets/sphuran-logo.jpg';
import { getYear } from 'date-fns';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative py-8 md:py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="flex justify-center items-center gap-20 space-y-12 mb-16">
          {/* Brand Column - Full Width */}
          <div className='flex-1'>
            <div className="flex justify-center items-center gap-4 mb-6">
              <img
                src={sphuranLogo}
                alt="Sphuran Logo"
                className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-xl"
              />
              <div>
                <div className="font-display text-2xl font-bold tracking-wider text-foreground">
                  SPHURAN<span className="text-primary">4.0</span>
                </div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-1">
                  2026
                </div>
              </div>
            </div>
            <p className="font-body text-center text-sm text-muted-foreground leading-relaxed max-w-2xl">
              The technical festival of the Electrical Engineering Department at IIEST Shibpur,
              bringing together students, industry leaders, and researchers to showcase technical skills and innovations.
            </p>
          </div>

          {/* Three Column Grid - Quick Links, Contact, Social Media */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-foreground mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Events', 'Schedule', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <Link
                  to="/team"
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
                <Link
                  to="/sponsor"
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sponsors
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-foreground mb-6">Contact</h4>
              <div className="space-y-3 font-body text-sm text-muted-foreground">
                <p>Department of Electrical Engineering</p>
                <p>IIEST Shibpur, Howrah - 711103</p>
                <p>West Bengal, India</p>
                <a href="mailto:sphuran.ees@gmail.com" className="block text-primary hover:underline mt-4">
                  sphuran.ees@gmail.com
                </a>
                <a href="mailto:contact@eesiiests.org" className="block text-primary hover:underline mt-4">
                  contact@eesiiests.org
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-foreground mb-6">Social Media</h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/_sphuran.ees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/sphuran-iiest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/sphuran.ees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Facebook</span>
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Va5VWG95dTnNOBYQvB0L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>WhatsApp Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <div className="font-body text-xs text-muted-foreground">
            &copy; {getYear(new Date())} <s></s>
            <a
              href="https://www.eesiiests.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Electrical Engineers' Society
            </a>
            {' | '}
            Designed by <span className="text-primary">EES Web Team</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};

export default Footer;
