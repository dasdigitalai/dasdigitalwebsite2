// Everything visual on the FarriTech case study lives here, so new videos, screenshots,
// photos, testimonials and results can be added without touching the page layout.
// Sections with an empty list stay hidden on the page.
//
// Images: put files in public/work/farritech/ and list them with their real pixel size.
// Testimonials: real customers only, quoted word for word, with their permission.

export const VIDEO = {
  // The main demo video's YouTube ID (the part after "v=" in the link). When set, it plays
  // first; until then the training playlist plays.
  // The "How to Use FarriTech" tour from the FarriTech mobile app (farrier-pro repo, mobile.html
  // TOUR_VIDEO_ID). Keep the chapters in sync with the app's tourChapters.
  featuredId: "LSOIA3beYqg",
  featuredTitle: "How to Use FarriTech",
  chapters: [
    { time: 0, label: "New Customer" },
    { time: 59, label: "New Invoice" },
    { time: 97, label: "Pay Invoice" },
    { time: 147, label: "New Appointment" },
  ],
  // The full training playlist, linked under the player and played when there's no featured video.
  playlistId: "PL8TxJEnhh3p2JLOoCTJA4csE61z-9vvPw",
};

// Short vertical videos (Facebook reels) shown under the main video. Each must be public on
// Facebook for the embed to play. { url, title }
export const REELS = [
  { url: "https://www.facebook.com/reel/1254735413525347", title: "FarriTech on Facebook" },
];

// Headline numbers shown under the hero, e.g. { value: "120+", label: "farriers using FarriTech" }.
export const RESULTS = [];

// Product screenshots for the gallery.
export const SCREENSHOTS = [
  {
    src: "/work/farritech/app-login.jpg",
    width: 1893,
    height: 906,
    alt: "FarriTech app sign-in page with the headline Run Your Hoof Care Business Like a Pro, a login form, Google sign-in and a Client Login button",
    caption: "app.farritech.com: farriers sign in here, and their clients have their own login to view and pay invoices",
  },
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
// `position` is where to anchor the crop in the grid ("center", "top", ...).
export const PHOTOS = [
  {
    src: "/work/farritech/field-barn-aisle.jpg",
    width: 1600,
    height: 1200,
    alt: "Farrier in leather chaps standing beside a bay horse in a barn aisle",
    caption: "Between horses in the barn aisle",
    position: "center",
  },
  {
    src: "/work/farritech/field-hoof-stand.jpg",
    width: 1200,
    height: 1600,
    alt: "Farrier's gloved hands steadying a freshly shod hoof on a green hoof stand while a dog watches",
    caption: "Finishing on the hoof stand, with supervision",
    position: "center",
  },
  {
    src: "/work/farritech/field-nailing-shoe.jpg",
    width: 1200,
    height: 1600,
    alt: "Farrier holding a horse's hoof between his knees and nailing on a new shoe",
    caption: "Nailing on a new shoe",
    position: "center",
  },
  {
    src: "/work/farritech/field-finished-shoes.jpg",
    width: 1600,
    height: 1200,
    alt: "Two horseshoes held up in a farrier's gloved hands",
    caption: "Shoes shaped and ready to fit",
    position: "center",
  },
  {
    src: "/work/farritech/field-app-in-barn.jpg",
    width: 1200,
    height: 1600,
    alt: "Farrier holding a phone with the FarriTech app open, a horse's head in the background",
    caption: "FarriTech in the barn: it syncs when there's signal and keeps working offline",
    position: "top",
  },
];

// { quote, name, role, location, photo: { src, width, height } | null }
// Tom R.'s wording was drafted from his feedback: confirm he approves it, word for word,
// before this goes live.
export const TESTIMONIALS = [
  {
    quote:
      "FarriTech didn't change how I work. It just took the paperwork off my plate. No more paper invoices, the scheduling takes care of itself, and clients pay me faster. I'm shoeing more horses and getting time back every day, because I'm focused on the job instead of chasing clients.",
    name: "Tom R.",
    role: "Farrier",
    location: "Wellington, FL",
    photo: null,
  },
];
