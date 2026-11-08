import "./polo.css";

// Sample design by DAS Digital. Meridian Polo Club is a fictional club, for illustration only.
// Kept out of search results so it is never mistaken for a real club's website.
export const metadata = {
  title: "Meridian Polo Club | Sample Design",
  description: "A sample website design for a prestigious polo club. Fictional club, for illustration purposes only.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/samples/meridian-polo-club" },
};

const NAV = [
  ["The Club", "#club"],
  ["The Season", "#season"],
  ["Membership", "#membership"],
  ["Grounds", "#grounds"],
  ["Events", "#events"],
];

const FACTS = [
  ["1924", "Founded"],
  ["9", "Championship fields"],
  ["140", "Stabled ponies"],
  ["12", "Goal tournament play"],
];

const FIXTURES = [
  { d: "10", m: "Jan", t: "Opening Day", p: "The season begins with an exhibition match and champagne on the lawn.", g: "Exhibition", at: "3:00 PM" },
  { d: "31", m: "Jan", t: "Club Championship", p: "The members' title, contested by four home teams.", g: "8 Goal", at: "2:00 PM" },
  { d: "14", m: "Feb", t: "The Ladies’ Cup", p: "An afternoon of hats, fast ponies and a handsome silver trophy.", g: "6 Goal", at: "2:30 PM" },
  { d: "28", m: "Feb", t: "Founders’ Trophy", p: "Played in honour of the club’s founders, with a seated luncheon.", g: "10 Goal", at: "2:00 PM" },
  { d: "14", m: "Mar", t: "The Meridian Cup", p: "The finest teams in the region meet for the club’s premier prize.", g: "12 Goal", at: "3:00 PM" },
  { d: "28", m: "Mar", t: "Season Finale & Closing Gala", p: "The final chukker, then a black-tie dinner on the clubhouse terrace.", g: "Gala", at: "4:00 PM" },
];

const TIERS = [
  {
    name: "Associate",
    sub: "Friends of the club",
    desc: "For those who love the game and the company that surrounds it.",
    perks: ["Sunday polo with reserved lawn seating", "Clubhouse dining and the terrace bar", "Two guest passes each month", "Invitations to select club events"],
    cta: "Enquire",
  },
  {
    name: "Polo Member",
    sub: "Full playing membership",
    desc: "The complete club experience, from the stables to the trophy room.",
    perks: ["Full use of all nine fields and the practice arena", "Stabling, grooms and veterinary care on site", "Priority table at every match", "Member tournaments and the Club Championship", "Reciprocal clubs in England, Argentina and Dubai"],
    cta: "Request an invitation",
    feature: true,
  },
  {
    name: "Patron",
    sub: "Private box & hospitality",
    desc: "A private pavilion for you and your guests, with service all afternoon.",
    perks: ["Private box for up to twelve guests", "Dedicated concierge and host", "Naming of a trophy or tournament day", "Private use of the clubhouse, by arrangement"],
    cta: "Enquire",
  },
];

const GROUNDS = [
  { t: "Nine Turf Fields", p: "Tended all year by our grounds team, from the stadium field to the practice pitches." , i: "field" },
  { t: "The Stables", p: "Climate-controlled stabling for 140 ponies, with farriers and a full-time veterinarian." , i: "stable" },
  { t: "Riding School", p: "Lessons for every age and level, taught by professionals on our school ponies." , i: "mallet" },
  { t: "The Clubhouse", p: "A Georgian-inspired house with a dining room, library, bar and a wide terrace." , i: "house" },
];

const ICONS = {
  field: <><rect x="4" y="10" width="40" height="28" /><path d="M24 10v28" /><circle cx="24" cy="24" r="5" /><path d="M4 18h6v12H4M44 18h-6v12h6" /></>,
  stable: <><path d="M6 42V20L24 8l18 12v22" /><path d="M16 42V28h16v14" /><path d="M16 28l16 14M32 28L16 42" /></>,
  mallet: <><path d="M10 40L36 8" /><rect x="30" y="4" width="14" height="6" rx="3" transform="rotate(52 37 7)" /><circle cx="12" cy="38" r="5" /></>,
  house: <><path d="M4 22L24 6l20 16" /><path d="M10 20v22h28V20" /><path d="M20 42V30h8v12" /><path d="M16 24h2M30 24h2" /></>,
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

// Two crossed mallets and a ball over a shield: drawn here so the page needs no photography.
function Mallet({ angle }) {
  // Shaft runs through the centre of the shield so the two mallets cross in an X, heads at the bottom.
  return (
    <g transform={`rotate(${angle} 200 225)`}>
      <rect x="196" y="112" width="8" height="218" rx="4" fill="#dcc08a" />
      <rect x="191" y="104" width="18" height="34" rx="8" fill="#b8924f" />
      <rect x="166" y="320" width="68" height="24" rx="12" fill="#dcc08a" stroke="#8a6a30" strokeWidth="1.5" />
    </g>
  );
}

function Crest({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 480" role="img" aria-label="Meridian Polo Club crest: two crossed polo mallets and a ball on a green shield">
      <path d="M200 14 L376 62 V232 C376 340 300 424 200 466 C100 424 24 340 24 232 V62 Z" fill="#102f21" stroke="#dcc08a" strokeWidth="3" />
      <path d="M200 34 L356 76 V232 C356 330 288 406 200 444 C112 406 44 330 44 232 V76 Z" fill="none" stroke="#b8924f" strokeWidth="1.2" />
      <path d="M200 34 L356 76 V150 H44 V76 Z" fill="#16392a" />
      <Mallet angle={42} />
      <Mallet angle={-42} />
      <circle cx="200" cy="225" r="26" fill="#f5efe2" stroke="#b8924f" strokeWidth="2.5" />
      <path d="M182 217c10 5 26 5 36 0M182 235c10-5 26-5 36 0" stroke="#b8924f" strokeWidth="1.5" fill="none" />
      <g fill="#dcc08a">
        <path d="M200 62l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z" />
        <path d="M120 98l3 7 8 .6-6 5 2 8-7-4-7 4 2-8-6-5 8-.6z" transform="translate(-6 -6) scale(1)" />
        <path d="M280 98l3 7 8 .6-6 5 2 8-7-4-7 4 2-8-6-5 8-.6z" transform="translate(6 -6) scale(1)" />
      </g>
      <text x="200" y="372" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" letterSpacing="7" fill="#dcc08a">MERIDIAN</text>
      <text x="200" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" letterSpacing="8" fill="#b8924f">MCMXXIV</text>
    </svg>
  );
}

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Meridian Polo Club, home">
      <svg viewBox="0 0 400 480" aria-hidden="true">
        <path d="M200 14 L376 62 V232 C376 340 300 424 200 466 C100 424 24 340 24 232 V62 Z" fill="#16392a" stroke="#dcc08a" strokeWidth="14" />
        <Mallet angle={42} />
        <Mallet angle={-42} />
        <circle cx="200" cy="225" r="32" fill="#f5efe2" />
      </svg>
      <span>
        <b>Meridian</b>
        <small>Polo Club</small>
      </span>
    </a>
  );
}

export default function MeridianPoloClub() {
  return (
    <div className="polo" id="top">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
      />

      <div className="announce">The 2027 season opens Sunday, 10 January &middot; Polo every Sunday at 3 o&rsquo;clock</div>

      <header className="header">
        <div className="wrap" style={{ position: "relative" }}>
          <Brand />
          <nav className="nav" aria-label="Main">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="#invitation" className="btn btn-gold">Request an invitation</a>
          </nav>
          <details className="menu">
            <summary aria-label="Menu"><span /></summary>
            <div className="panel">
              {NAV.map(([label, href]) => (
                <a key={href} href={href}>{label}</a>
              ))}
              <a href="#invitation" className="btn btn-gold">Request an invitation</a>
            </div>
          </details>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div>
              <div className="rule rule-l"><i /><span className="eyebrow light">Established 1924</span></div>
              <h1 id="hero-title">A century of polo, <em>beautifully</em> kept.</h1>
              <p className="lede">
                Meridian is a private polo club set among nine acres of immaculate turf. Come for the Sunday match,
                stay for the lawn, the luncheon and the company of people who love the game.
              </p>
              <div className="cta">
                <a href="#invitation" className="btn btn-gold">Request an invitation</a>
                <a href="#season" className="btn btn-line">View the 2027 season</a>
              </div>
            </div>
            <Crest className="crest" />
          </div>
        </section>

        <section className="facts" aria-label="The club at a glance">
          <div className="wrap">
            <ul>
              {FACTS.map(([n, l]) => (
                <li key={l}><b>{n}</b><span>{l}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Heritage */}
        <section className="section heritage" id="club" aria-labelledby="club-title">
          <div className="wrap">
            <div className="plate" aria-hidden="true">
              <div className="inner">
                <div>
                  <span className="num">100</span>
                  <span className="num-l">Years of the game</span>
                  <p className="cap">&ldquo;Played hard, and always with grace.&rdquo;</p>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">The Club</span>
              <h2 id="club-title">Tradition on every chukker</h2>
              <div className="body">
                <p>
                  Meridian was founded in 1924 by a handful of riders who wanted a proper place to play. A hundred years
                  on, the same spirit runs through the club: respect for the horse, for the game and for one another.
                </p>
                <p>
                  Today we welcome members from across the region, and from Buenos Aires to Berkshire, to play, to learn,
                  and to spend a long Sunday afternoon on the lawn with good company and a glass in hand.
                </p>
              </div>
              <div className="sig">
                The Committee of Meridian Polo Club
                <small>Est. MCMXXIV</small>
              </div>
            </div>
          </div>
        </section>

        {/* Season */}
        <section className="section season" id="season" aria-labelledby="season-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Spring 2027</span></div>
              <h2 id="season-title">The Season</h2>
              <p>Six Sundays of fine polo. Gates open at noon; the first throw-in is at the time shown.</p>
            </div>
            <ul className="fixtures">
              {FIXTURES.map((f) => (
                <li key={f.t} className="fixture">
                  <div className="date"><b>{f.d}</b> <span>{f.m} 2027</span></div>
                  <div>
                    <h3>{f.t}</h3>
                    <p>{f.p}</p>
                  </div>
                  <span className="goal">{f.g}</span>
                  <span className="time">{f.at}</span>
                </li>
              ))}
            </ul>
            <p className="note">Smart-casual dress for matches. Hats are encouraged, and champagne is always welcome.</p>
          </div>
        </section>

        {/* Membership */}
        <section className="section" id="membership" aria-labelledby="membership-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Join us</span></div>
              <h2 id="membership-title">Membership</h2>
              <p>Membership is by invitation and is limited, so that every member has a place on the field and a seat at the table.</p>
            </div>
            <div className="tiers">
              {TIERS.map((t) => (
                <article key={t.name} className={`tier${t.feature ? " feature" : ""}`}>
                  {t.feature ? <span className="flag">Most chosen</span> : null}
                  <h3>{t.name}</h3>
                  <div className="sub">{t.sub}</div>
                  <p className="desc">{t.desc}</p>
                  <ul>
                    {t.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a href="#invitation" className={`btn ${t.feature ? "btn-gold" : "btn-dark"}`}>{t.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grounds */}
        <section className="section on-dark" id="grounds" aria-labelledby="grounds-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow light">The Grounds</span></div>
              <h2 id="grounds-title">Everything the game deserves</h2>
              <p>From the turf to the tack room, every detail is kept to a standard we would be proud to ride on ourselves.</p>
            </div>
            <ul className="grounds-grid">
              {GROUNDS.map((g) => (
                <li key={g.t} className="ground">
                  <Icon name={g.i} />
                  <h3>{g.t}</h3>
                  <p>{g.p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Clubhouse and events */}
        <section className="section" id="events" aria-labelledby="events-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Clubhouse &amp; Events</span></div>
              <h2 id="events-title">Long lunches, grand evenings</h2>
              <p>The clubhouse is the heart of Meridian, and it is available for members&rsquo; celebrations and private occasions.</p>
            </div>
            <div className="events-grid">
              <article className="feat">
                <svg className="glyph" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                  <path d="M14 6h20l-3 14a7 7 0 01-14 0z" /><path d="M24 27v13M16 42h16" />
                </svg>
                <div>
                  <span className="eyebrow light">Every Sunday</span>
                  <h3>Brunch &amp; Polo on the Terrace</h3>
                  <p>A three-course seasonal luncheon served at your table with a view across the main field, timed to finish just before the first throw-in.</p>
                  <a className="link" href="#invitation">Reserve a table</a>
                </div>
              </article>
              <div className="ev-list">
                <article className="ev">
                  <span className="eyebrow">Weddings &amp; Celebrations</span>
                  <h3>A lawn made for the day</h3>
                  <p>Ceremony on the lawn, dinner in the clubhouse and a last dance under the lanterns.</p>
                  <a className="link" href="#invitation">Plan an event</a>
                </article>
                <article className="ev">
                  <span className="eyebrow">Corporate Hospitality</span>
                  <h3>Entertain at the match</h3>
                  <p>Private pavilions, hosted tables and a polo clinic for your guests, arranged by our events team.</p>
                  <a className="link" href="#invitation">Enquire</a>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Invitation */}
        <section className="section invite" id="invitation" aria-labelledby="invite-title">
          <div className="wrap">
            <div className="invite-box">
              <div className="rule"><i /><span className="eyebrow light">By invitation</span></div>
              <h2 id="invite-title">Join us on the lawn</h2>
              <p>
                New members are welcomed on the sponsorship of two current members. If you do not yet know one, our
                membership secretary will be glad to introduce you over a Sunday luncheon.
              </p>
              <div className="cta">
                <a href="mailto:membership@meridianpoloclub.example" className="btn btn-gold">Request an invitation</a>
                <a href="#season" className="btn btn-line">Come to a match</a>
              </div>
              <p className="contact">membership@meridianpoloclub.example</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="cols">
            <div>
              <Brand />
              <p className="about">A private polo club in Palm Beach County, Florida, welcoming members and their guests since 1924.</p>
            </div>
            <div>
              <h4>The Club</h4>
              <ul>
                {NAV.map(([label, href]) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li>Gates open at noon</li>
                <li>Polo Sundays, 3 PM</li>
                <li>Dining by reservation</li>
                <li>Smart-casual dress</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>membership@meridianpoloclub.example</li>
                <li>Palm Beach County, Florida</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>&copy; 2027 Meridian Polo Club. All rights reserved.</span>
            <span>
              Sample design by <a href="/website-design">DAS Digital</a>. Meridian Polo Club is a fictional club, shown for illustration only.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
