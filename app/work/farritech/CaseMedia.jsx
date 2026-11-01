"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Play, Quote, X } from "lucide-react";

// Media sections for the FarriTech case study. Content comes from ./media.js.

const glowCard = "shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_40px_-25px_rgba(168,85,247,0.45)]";

// Headline numbers under the hero. Hidden until there are results to show.
export function ResultsStrip({ results }) {
  if (!results.length) return null;
  return (
    <section aria-label="Results" className="mx-auto max-w-6xl px-4 sm:px-6">
      <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl border-2 border-purple-500 bg-purple-500/30 ${glowCard} ${results.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {results.map((r) => (
          <div key={r.label} className="flex flex-col-reverse bg-[#0c0e18] p-6 text-center">
            <dt className="mt-1 text-sm text-white/70">{r.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-fuchsia-300 sm:text-4xl">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// YouTube video that loads only when the visitor presses play (keeps the page fast),
// using YouTube's privacy-enhanced domain.
export function VideoSection({ video }) {
  const [playing, setPlaying] = useState(false);
  const src = video.featuredId
    ? `https://www.youtube-nocookie.com/embed/${video.featuredId}?autoplay=1&rel=0&list=${video.featuredPlaylistId || video.playlistId}`
    : `https://www.youtube-nocookie.com/embed/videoseries?list=${video.playlistId}&autoplay=1&rel=0`;
  const title = video.featuredId ? video.featuredTitle : "FarriTech training playlist";

  return (
    <div>
      <div className={`relative aspect-video overflow-hidden rounded-3xl border-2 border-purple-500 bg-black ${glowCard}`}>
        {playing ? (
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-fuchsia-300"
            aria-label={`Play video: ${title}`}
          >
            {video.featuredId ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`https://i.ytimg.com/vi/${video.featuredId}/hqdefault.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
            ) : (
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_40%,rgba(168,85,247,0.35),transparent)]" />
            )}
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-xl shadow-fuchsia-500/30 transition-transform group-hover:scale-105">
              <Play className="ml-1 h-9 w-9 fill-white text-white" aria-hidden="true" />
            </span>
            <span className="relative rounded-full bg-black/50 px-4 py-1.5 text-sm font-semibold text-white">{title}</span>
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-sm">
        <a
          href={`https://www.youtube.com/playlist?list=${video.playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-purple-300 hover:text-white"
        >
          Watch every tutorial on YouTube <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

// Vertical Facebook reels, loaded only when the visitor presses play.
function Reel({ reel }) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel.url)}&show_text=false&autoplay=true&width=360`;
  return (
    <figure className="w-full max-w-[300px]">
      <div className={`relative aspect-[9/16] overflow-hidden rounded-3xl border-2 border-purple-500 bg-black ${glowCard}`}>
        {playing ? (
          <iframe
            src={src}
            title={reel.title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-fuchsia-300"
            aria-label={`Play video: ${reel.title}`}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(20rem_20rem_at_50%_45%,rgba(168,85,247,0.35),transparent)]" />
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-xl shadow-fuchsia-500/30 transition-transform group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-white text-white" aria-hidden="true" />
            </span>
            <span className="relative px-4 text-center text-sm font-semibold text-white">{reel.title}</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm">
        <a href={reel.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-purple-300 hover:text-white">
          Watch on Facebook <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}

export function Reels({ items }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((r) => <Reel key={r.url} reel={r} />)}
    </div>
  );
}

// Image grid that opens a full-size viewer. Used for screenshots and photos.
export function Gallery({ items, label }) {
  const [open, setOpen] = useState(null); // index or null
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus();
    };
  }, [open, items.length]);

  if (!items.length) return null;
  const current = open === null ? null : items[open];

  return (
    <>
      <ul className={`grid gap-6 sm:grid-cols-2 ${items.length >= 3 ? "lg:grid-cols-3" : ""}`}>
        {items.map((it, i) => (
          <li key={it.src}>
            <figure>
              <button
                type="button"
                onClick={(e) => { lastFocus.current = e.currentTarget; setOpen(i); }}
                className={`group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 ${glowCard}`}
                aria-label={`Open full size: ${it.caption || it.alt}`}
              >
                <Image
                  src={it.src}
                  width={it.width}
                  height={it.height}
                  alt={it.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectPosition: it.position || "top" }}
                  className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
              {it.caption ? <figcaption className="mt-3 text-sm text-white/70">{it.caption}</figcaption> : null}
            </figure>
          </li>
        ))}
      </ul>

      {current ? (
        <div role="dialog" aria-modal="true" aria-label={`${label}: ${current.caption || current.alt}`} className="fixed inset-0 z-[60] flex flex-col bg-black/90 p-4 sm:p-8" onClick={() => setOpen(null)}>
          <div className="flex items-center justify-between gap-4 text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
            <span>{open + 1} of {items.length}</span>
            <button ref={closeRef} type="button" onClick={() => setOpen(null)} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-300" aria-label="Close">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} width={current.width} height={current.height} alt={current.alt} sizes="100vw" className="max-h-full w-auto max-w-full rounded-lg object-contain" />
            {items.length > 1 ? (
              <>
                <button type="button" onClick={() => setOpen((open - 1 + items.length) % items.length)} className="absolute left-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-300" aria-label="Previous image">
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => setOpen((open + 1) % items.length)} className="absolute right-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-300" aria-label="Next image">
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            ) : null}
          </div>
          {current.caption ? <p className="text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>{current.caption}</p> : null}
        </div>
      ) : null}
    </>
  );
}

// Customer quotes. Hidden until there are real testimonials.
export function Testimonials({ items }) {
  if (!items.length) return null;
  return (
    <div className={`grid gap-6 ${items.length >= 3 ? "lg:grid-cols-3" : items.length === 2 ? "md:grid-cols-2" : "mx-auto max-w-3xl"}`}>
      {items.map((t) => (
        <figure key={t.name} className={`flex flex-col rounded-3xl border-2 border-purple-500 bg-white/5 p-7 backdrop-blur ${glowCard}`}>
          <Quote className="h-8 w-8 text-fuchsia-300" aria-hidden="true" />
          <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-white">{t.quote}</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            {t.photo ? (
              <Image src={t.photo.src} width={t.photo.width} height={t.photo.height} alt="" className="h-12 w-12 rounded-full object-cover" />
            ) : null}
            <span>
              <span className="block font-semibold text-white">{t.name}</span>
              <span className="block text-sm text-white/60">{[t.role, t.location].filter(Boolean).join(", ")}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
