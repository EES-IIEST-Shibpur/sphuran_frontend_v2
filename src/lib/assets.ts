/**
 * Centralized Image Assets
 * All image URLs for the application in a single location
 */

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dwr8472qb/image/upload';

export const IMAGES = {
  // Logos
  logos: {
    sphuran: `${CLOUDINARY_BASE}/v1770536102/sphuran-logo_a6mzzi.png`,
    ees: `${CLOUDINARY_BASE}/v1770536100/ees-logo_vjjwxn.png`,
  },

  // Event Images
  events: {
    alumniMeeting: `${CLOUDINARY_BASE}/v1770546216/undraw_meeting_dunc_dctfbx.svg`,
    icche: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    rxb: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
  },

  // Merchandise Images
  merchandise: {
    tshirtFront: `${CLOUDINARY_BASE}/v1772303518/tshirt_front_b1ecjb.jpg`,
    tshirtBack: `${CLOUDINARY_BASE}/v1772303699/thsirt_back_zfdijj.jpg`,
  },

  // Sponsor Logos
  sponsors: {
    zomato: {
      src: `${CLOUDINARY_BASE}/v1770536010/Zomato-Logo_qcolki.png`,
      alt: "Zomato - Food Delivery Partner of SPHURAN",
      href: "https://www.zomato.com"
    },
    wowMomo: {
      src: `${CLOUDINARY_BASE}/v1770536010/Wow_Momo_Logo_bt8zdk.png`,
      alt: "Wow! Momo - Food Partner SPHURAN 4.0",
      href: "https://www.wowmomofoods.in"
    },
    vikramSolar: {
      src: `${CLOUDINARY_BASE}/v1770536009/Vikram_Solar_Logo_rcbs4y.png`,
      alt: "Vikram Solar - Renewable Energy Sponsor SPHURAN",
      href: "https://www.vikramsolar.com"
    },
    tataPower: {
      src: `${CLOUDINARY_BASE}/v1770536009/Tata_Power_logo_mnd5ud.png`,
      alt: "Tata Power - Energy Sector Partner SPHURAN 4.0",
      href: "https://www.tatapower.com"
    },
    tcs: {
      src: `${CLOUDINARY_BASE}/v1770536008/Tata_Consultancy_Services_old_logo_qrbffk.png`,
      alt: "Tata Consultancy Services (TCS) - Technology Partner SPHURAN",
      href: "https://www.tcs.com"
    },
    reacro: {
      src: `${CLOUDINARY_BASE}/v1770536007/Reacro_Logo_zb1z1j.png`,
      alt: "Reacro - Innovation Partner SPHURAN 4.0",
      href: "https://www.reacro.com"
    },
    pidilite: {
      src: `${CLOUDINARY_BASE}/v1770536007/Pidilite_logo_wsr0gf.png`,
      alt: "Pidilite Industries - Corporate Sponsor SPHURAN",
      href: "https://www.pidilite.com"
    },
    gateforum: {
      src: `${CLOUDINARY_BASE}/v1770536007/Gateforum_Logo_qi6qug.png`,
      alt: "GateForum - Education Partner SPHURAN 4.0",
      href: "https://www.gateforum.com"
    },
    nikon: {
      src: `${CLOUDINARY_BASE}/v1770536007/Nikon_Logo.svg_wnndep.png`,
      alt: "Nikon - Imaging Technology Partner SPHURAN",
      href: "https://www.nikon.com"
    },
    glocalHealthcare: {
      src: `${CLOUDINARY_BASE}/v1770536006/Glocal_Healthcare_Logo_veqjqh.png`,
      alt: "Glocal Healthcare - Healthcare Partner SPHURAN 4.0",
      href: "https://www.glocalhealthcare.com"
    },
    madeEasy: {
      src: `${CLOUDINARY_BASE}/v1770536006/MadeEasy_Logo_fxttls.png`,
      alt: "Made Easy - Educational Partner SPHURAN Technical Festival",
      href: "https://www.madeeasy.in"
    },
    edugraph: {
      src: `${CLOUDINARY_BASE}/v1770536006/Edugraph_logo_su10en.png`,
      alt: "Edugraph - Skill Development Partner SPHURAN 4.0",
      href: "https://www.edugraph.in"
    },
    cesc: {
      src: `${CLOUDINARY_BASE}/v1770536006/CESC_Logo_ddmhsa.png`,
      alt: "CESC Limited - Power Utility Partner SPHURAN",
      href: "https://www.cesc.co.in"
    },
    bengalBeverages: {
      src: `${CLOUDINARY_BASE}/v1770536006/Bengal_Beverages_la4ir2.png`,
      alt: "Bengal Beverages - Beverage Partner SPHURAN 4.0",
      href: "https://www.bengalbeverages.com"
    },
  },
};

// Gallery Images
export const GALLERY_IMAGES = [
  {
    src: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    alt: 'SPHURAN x ICCHE Collaboration Event',
    title: 'SPHURAN x ICCHE',
    description: 'A memorable collaboration showcasing innovation and creativity'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
    alt: 'SPHURAN x RXB Event Highlights',
    title: 'SPHURAN x RXB',
    description: 'Exciting moments from the RXB collaboration event'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770536102/sphuran-logo_a6mzzi.png`,
    alt: 'SPHURAN 4.0 Official Logo',
    title: 'SPHURAN 4.0 Branding',
    description: 'The official logo representing our technical festival'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770536100/ees-logo_vjjwxn.png`,
    alt: 'Electrical Engineering Society Logo',
    title: 'EES IIEST Shibpur',
    description: 'Electrical Engineering Society - The organizing body'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546216/undraw_meeting_dunc_dctfbx.svg`,
    alt: 'Alumni Meeting Illustration',
    title: 'Alumni Meet',
    description: 'Connecting generations of electrical engineers'
  },
  // Add more gallery images here
  {
    src: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    alt: 'Technical Workshop Session',
    title: 'Workshop Moments',
    description: 'Hands-on learning and skill development sessions'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
    alt: 'Competition Highlights',
    title: 'Tech Competitions',
    description: 'Students showcasing their technical prowess'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    alt: 'Opening Ceremony',
    title: 'Grand Opening',
    description: 'The spectacular inauguration of SPHURAN 4.0'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
    alt: 'Cultural Evening',
    title: 'Cultural Night',
    description: 'An evening filled with music, dance, and entertainment'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    alt: 'Guest Lecture',
    title: 'Guest Speakers',
    description: 'Industry experts sharing their knowledge and experience'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546105/sphuran-x-rxb_vhuylt.jpg`,
    alt: 'Team Activities',
    title: 'Team Building',
    description: 'Collaborative activities fostering teamwork and creativity'
  },
  {
    src: `${CLOUDINARY_BASE}/v1770546806/sphuran-x-icche_gkfhoq.jpg`,
    alt: 'Prize Distribution Ceremony',
    title: 'Award Ceremony',
    description: 'Celebrating the achievements of talented participants'
  },
];

// Helper to get all sponsors as an array
export const getAllSponsors = () => {
  return Object.values(IMAGES.sponsors);
};
