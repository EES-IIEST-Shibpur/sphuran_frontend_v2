import LogoLoop from './ui/animatedComponents/logoLoop';

// Import sponsor logos
import ZomatoLogo from '@/assets/Sponsors/Zomato-Logo.png';
import WowMomoLogo from '@/assets/Sponsors/Wow_Momo_Logo.png';
import TataPowerLogo from '@/assets/Sponsors/Tata_Power_logo.png';
import TCSLogo from '@/assets/Sponsors/Tata_Consultancy_Services_old_logo.png';
import PidiliteLogo from '@/assets/Sponsors/Pidilite_logo.png';
import NikonLogo from '@/assets/Sponsors/Nikon_Logo.svg.png';
import EdugraphLogo from '@/assets/Sponsors/Edugraph_logo.png';
import CESCLogo from '@/assets/Sponsors/CESC_Logo.png';
import BengalBeveragesLogo from '@/assets/Sponsors/Bengal_Beverages.png';
import GateforumLogo from '@/assets/Sponsors/Gateforum_Logo.png';
import GlocalHealthcareLogo from '@/assets/Sponsors/Glocal_Healthcare_Logo.png';
import MadeEasyLogo from '@/assets/Sponsors/MadeEasy_Logo.png';
import ReacroLogo from '@/assets/Sponsors/Reacro_Logo.png';
import VikramSolarLogo from '@/assets/Sponsors/Vikram_Solar_Logo.png';


const sponsorLogos = [
  { src: ZomatoLogo, alt: "Zomato", href: "#" },
  { src: WowMomoLogo, alt: "Wow Momo", href: "#" },
  { src: TataPowerLogo, alt: "Tata Power", href: "#" },
  { src: TCSLogo, alt: "Tata Consultancy Services", href: "#" },
  { src: PidiliteLogo, alt: "Pidilite", href: "#" },
  { src: NikonLogo, alt: "Nikon", href: "#" },
  { src: EdugraphLogo, alt: "Edugraph", href: "#" },
  { src: CESCLogo, alt: "CESC", href: "#" },
  { src: BengalBeveragesLogo, alt: "Bengal Beverages", href: "#" },
  { src: GateforumLogo, alt: "Gateforum", href: "#" },
  { src: GlocalHealthcareLogo, alt: "Glocal Healthcare", href: "#" },
  { src: MadeEasyLogo, alt: "Made Easy", href: "#" },
  { src: ReacroLogo, alt: "Reacro", href: "#" },
  { src: VikramSolarLogo, alt: "Vikram Solar", href: "#" },
];

const PastSponsers = () => {
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
};

export default PastSponsers;