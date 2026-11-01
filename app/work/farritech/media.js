// Everything visual on the FarriTech case study lives here, so new videos, screenshots,
// photos, testimonials and results can be added without touching the page layout.
// Sections with an empty list stay hidden on the page.
//
// Images: put files in public/work/farritech/ and list them with their real pixel size.
// Testimonials: real customers only, quoted word for word, with their permission.

export const VIDEO = {
  // The main demo video's YouTube ID (the part after "v=" in the link). When set, it plays
  // first; until then the training playlist plays.
  featuredId: "gNW-B_LfBnc",
  featuredTitle: "FarriTech walkthrough",
  // The playlist that keeps playing after the featured video (the one it was shared from).
  featuredPlaylistId: "PL8TxJEnhh3p3yM_rh6N8famBAuZd1W0_u",
  // The full training playlist, linked under the player and played when there's no featured video.
  playlistId: "PL8TxJEnhh3p2JLOoCTJA4csE61z-9vvPw",
};

// Headline numbers shown under the hero, e.g. { value: "120+", label: "farriers using FarriTech" }.
export const RESULTS = [];

// Product screenshots for the gallery.
export const SCREENSHOTS = [
  {
    src: "/work/farritech-landing-page.jpg",
    width: 1337,
    height: 633,
    alt: "FarriTech website home page introducing booking, invoicing and payments for farriers",
    caption: "FarriTech.com: the marketing site farriers sign up from",
  },
  {
    src: "/builder/farritech-dashboard.png",
    width: 476,
    height: 480,
    alt: "FarriTech dashboard showing upcoming appointments and horses coming due",
    caption: "The dashboard: today's schedule and horses coming due",
  },
];

// Real-world photos (farriers in the barn, the app on a phone at work).
export const PHOTOS = [];

// { quote, name, role, location, photo: { src, width, height } | null }
export const TESTIMONIALS = [];
