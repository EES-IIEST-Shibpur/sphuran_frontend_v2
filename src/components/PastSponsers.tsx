import { memo } from 'react';
import LogoLoop from './ui/animatedComponents/logoLoop';

// Sponsor logos from Cloudinary
const sponsorLogos = [
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536010/Zomato-Logo_qcolki.png", 
    alt: "Zomato", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536010/Wow_Momo_Logo_bt8zdk.png", 
    alt: "Wow Momo", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536009/Vikram_Solar_Logo_rcbs4y.png", 
    alt: "Vikram Solar", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536009/Tata_Power_logo_mnd5ud.png", 
    alt: "Tata Power", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536008/Tata_Consultancy_Services_old_logo_qrbffk.png", 
    alt: "Tata Consultancy Services", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536007/Reacro_Logo_zb1z1j.png", 
    alt: "Reacro", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536007/Pidilite_logo_wsr0gf.png", 
    alt: "Pidilite", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536007/Gateforum_Logo_qi6qug.png", 
    alt: "Gateforum", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536007/Nikon_Logo.svg_wnndep.png", 
    alt: "Nikon", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536006/Glocal_Healthcare_Logo_veqjqh.png", 
    alt: "Glocal Healthcare", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536006/MadeEasy_Logo_fxttls.png", 
    alt: "Made Easy", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536006/Edugraph_logo_su10en.png", 
    alt: "Edugraph", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536006/CESC_Logo_ddmhsa.png", 
    alt: "CESC", 
    href: "#" 
  },
  { 
    src: "https://res.cloudinary.com/dwr8472qb/image/upload/v1770536006/Bengal_Beverages_la4ir2.png", 
    alt: "Bengal Beverages", 
    href: "#" 
  },
];

const PastSponsers = memo(() => {
  return (
    <section id="sponsors" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Our Partners
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            PAST SPONSORS
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-8" />
        </div>

        {/* Logo Loop */}
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={sponsorLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Past sponsors and partners"
          />
        </div>
      </div>
    </section>
  );
});

PastSponsers.displayName = 'PastSponsers';

export default PastSponsers;