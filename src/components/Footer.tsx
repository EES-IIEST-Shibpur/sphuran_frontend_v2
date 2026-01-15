const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="font-display text-xl font-bold tracking-wider text-foreground">
            SPHURAN<span className="text-primary">4.0</span>
          </div>

          {/* Institute */}
          <div className="text-center">
            <p className="font-body text-sm text-muted-foreground">
              Organized by Electrical Engineers' Society
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              Department of Electrical Engineering, IIEST Shibpur
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#events" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="#schedule" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Schedule
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="font-body text-xs text-muted-foreground pt-4 border-t border-border w-full text-center">
            2025 Sphuran. All rights reserved. IIEST Shibpur.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
