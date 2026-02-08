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

  // Sponsor Logos
  sponsors: {
    zomato: {
      src: `${CLOUDINARY_BASE}/v1770536010/Zomato-Logo_qcolki.png`,
      alt: "Zomato",
      href: "https://www.zomato.com"
    },
    wowMomo: {
      src: `${CLOUDINARY_BASE}/v1770536010/Wow_Momo_Logo_bt8zdk.png`,
      alt: "Wow! Momo",
      href: "https://www.wowmomofoods.in"
    },
    vikramSolar: {
      src: `${CLOUDINARY_BASE}/v1770536009/Vikram_Solar_Logo_rcbs4y.png`,
      alt: "Vikram Solar",
      href: "https://www.vikramsolar.com"
    },
    tataPower: {
      src: `${CLOUDINARY_BASE}/v1770536009/Tata_Power_logo_mnd5ud.png`,
      alt: "Tata Power",
      href: "https://www.tatapower.com"
    },
    tcs: {
      src: `${CLOUDINARY_BASE}/v1770536008/Tata_Consultancy_Services_old_logo_qrbffk.png`,
      alt: "Tata Consultancy Services",
      href: "https://www.tcs.com"
    },
    reacro: {
      src: `${CLOUDINARY_BASE}/v1770536007/Reacro_Logo_zb1z1j.png`,
      alt: "Reacro",
      href: "https://www.reacro.com"
    },
    pidilite: {
      src: `${CLOUDINARY_BASE}/v1770536007/Pidilite_logo_wsr0gf.png`,
      alt: "Pidilite",
      href: "https://www.pidilite.com"
    },
    gateforum: {
      src: `${CLOUDINARY_BASE}/v1770536007/Gateforum_Logo_qi6qug.png`,
      alt: "GateForum",
      href: "https://www.gateforum.com"
    },
    nikon: {
      src: `${CLOUDINARY_BASE}/v1770536007/Nikon_Logo.svg_wnndep.png`,
      alt: "Nikon",
      href: "https://www.nikon.com"
    },
    glocalHealthcare: {
      src: `${CLOUDINARY_BASE}/v1770536006/Glocal_Healthcare_Logo_veqjqh.png`,
      alt: "Glocal Healthcare",
      href: "https://www.glocalhealthcare.com"
    },
    madeEasy: {
      src: `${CLOUDINARY_BASE}/v1770536006/MadeEasy_Logo_fxttls.png`,
      alt: "Made Easy",
      href: "https://www.madeeasy.in"
    },
    edugraph: {
      src: `${CLOUDINARY_BASE}/v1770536006/Edugraph_logo_su10en.png`,
      alt: "Edugraph",
      href: "https://www.edugraph.in"
    },
    cesc: {
      src: `${CLOUDINARY_BASE}/v1770536006/CESC_Logo_ddmhsa.png`,
      alt: "CESC Limited",
      href: "https://www.cesc.co.in"
    },
    bengalBeverages: {
      src: `${CLOUDINARY_BASE}/v1770536006/Bengal_Beverages_la4ir2.png`,
      alt: "Bengal Beverages",
      href: "https://www.bengalbeverages.com"
    },
  },
};

// Helper to get all sponsors as an array
export const getAllSponsors = () => {
  return Object.values(IMAGES.sponsors);
};
