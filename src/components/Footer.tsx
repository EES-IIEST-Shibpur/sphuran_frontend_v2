import sphuranLogo from '@/assets/sphuran-logo.jpg';

const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={sphuranLogo} 
                alt="Sphuran Logo" 
                className="w-14 h-14 object-contain rounded-xl border border-border"
              />
              <div>
                <div className="font-display text-2xl font-bold tracking-wider text-foreground">
                  SPHURAN<span className="text-primary">4.0</span>
                </div>
                <div className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-1">
                  March 2025
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
              The ultimate technical extravaganza by Electrical Engineers' Society, 
              Department of Electrical Engineering, IIEST Shibpur.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
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
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm tracking-widest uppercase text-foreground mb-6">Contact</h4>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p>Department of Electrical Engineering</p>
              <p>IIEST Shibpur, Howrah - 711103</p>
              <p>West Bengal, India</p>
              <a href="mailto:sphuran@eesiiests.org" className="block text-primary hover:underline mt-4">
                sphuran@eesiiests.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}{' '}
            <a 
              href="https://www.eesiiests.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              Electrical Engineers' Society
            </a>
            . All rights reserved.
          </div>
          <div className="font-body text-xs text-muted-foreground">
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
