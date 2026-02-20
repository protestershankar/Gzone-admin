import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";

// ============================================================
// MOCK DATA
// Replace with: const data = await fetch(`/api/gamepost/${slug}`)
// Every key maps 1-to-1 with your PostgreSQL columns
// ============================================================
const MOCK = {
  // TABLE: game_posts
  game_post: {
    game_post_id: 1,
    slug: "valorant",
    status: "published",
    publish_at: "2026-01-25T00:00:00Z",
    updated_at: "2026-01-25T00:00:00Z",
  },

  // TABLE: hero
  hero: {
    game_title: "VALORANT",
    game_desc_short:
      "A competitive 5v5 tactical shooter where precision gunplay meets unique agent abilities.",
    background_img: null, // replace with real URL → img src
  },

  // TABLE: game_info
  game_info: {
    developer: "Riot Games",
    publisher: "Riot Games",
    release_date: "2020-06-02",
    genres: "Tactical,Shooter,Multiplayer", // CSV string
    platforms: "PC,Xbox,PS5",              // CSV string
    profile_size_photo: null,              // replace with real URL
  },

  // TABLE: storyline
  storyline: {
    paragraphs:
      "In the near future, Earth is permanently altered by a mysterious global event known as First Light. This event awakens latent abilities in select individuals across the world, transforming them into powerful agents with unique skills. As geopolitical tensions rise, secret organizations emerge to control, recruit, or eliminate these agents in order to shape the future of the planet.\n\nPlayers step into this conflict as elite operatives, each representing a distinct background, culture, and combat philosophy. VALORANT's evolving lore adds depth to its world through agents, maps, and seasonal updates, gradually revealing the larger story behind First Light and the forces fighting for dominance.",
  },

  // TABLE: carousel
  carousel: {
    yt_url_official: null, // replace with real YouTube embed URL
    upload: [null, null, null, null, null], // replace with real image URLs
  },

  // TABLE: gameplay — paragraph + array of items
  gameplay: {
    paragraph:
      "VALORANT is a tactical 5v5 first-person shooter that emphasizes precision, strategy, and teamwork. Every match is divided into rounds where players take on the role of attackers or defenders, with success depending on coordination, positioning, and smart decision-making rather than raw firepower alone.",
    items: [
      { gameplay_title: "Precision Gunplay",       gameplay_title_desc: "Shooting mechanics reward accuracy, recoil control, and crosshair placement. Every bullet matters, making skill and discipline essential." },
      { gameplay_title: "Agent Abilities",          gameplay_title_desc: "Each agent brings a unique set of abilities that support offensive pushes, defensive holds, or information gathering. Abilities enhance strategy but never replace core shooting skills." },
      { gameplay_title: "Round-Based Economy",      gameplay_title_desc: "Players earn credits each round based on performance and outcomes. These credits are used to purchase weapons, shields, and abilities, adding a strong layer of economic strategy." },
      { gameplay_title: "Objective-Driven Gameplay",gameplay_title_desc: "Attackers aim to plant the spike, while defenders work to stop or defuse it. Every objective creates high-stakes moments that reward teamwork and planning." },
    ],
  },

  // TABLE: quick_control_overview
  quick_control_overview: [
    { qco_title: "Movement",  qco_title_desc: "Use standard W, A, S, D keys to move, strafe, and position yourself during combat." },
    { qco_title: "Combat",    qco_title_desc: "Aim and shoot using the mouse, with precision and recoil control playing a key role." },
    { qco_title: "Abilities", qco_title_desc: "Agent abilities are mapped to Q, E, C, and X, allowing quick access without interrupting gunplay." },
    { qco_title: "Interface", qco_title_desc: "Open the scoreboard using Tab and access the buy menu with B to manage weapons and abilities between rounds." },
  ],

  // TABLE: modes
  modes: [
    { mode_title: "Unrated",      mode_titledesc: "A standard competitive experience without rank pressure. Ideal for learning maps, practicing agents, and playing casually with friends." },
    { mode_title: "Competitive",  mode_titledesc: "Ranked mode featuring skill-based matchmaking and progression tiers. Designed for a serious, structured competitive environment." },
    { mode_title: "Spike Rush",   mode_titledesc: "Fast-paced matches with shorter rounds and pre-equipped weapons. Perfect for quick sessions and experimenting with abilities." },
    { mode_title: "Deathmatch",   mode_titledesc: "Free-for-all mode focused purely on combat. Used primarily for warm-ups, aim training, and mechanical improvement." },
  ],

  // TABLE: system_requirement
  system_requirement: {
    os_min: "Windows 10 64-bit",  os_rec: "Windows 11 64-bit",
    processor_min: "Intel i3 - 4150", processor_rec: "Intel i5 - 9400F",
    memory_min: "4 GB",           memory_rec: "8 GB",
    graphics_min: "Intel HD 4000",graphics_rec: "GTX 1050 Ti",
    storage_min: "30 GB",         storage_rec: "30 GB",
    directx_min: "DirectX 11",    directx_rec: "DirectX 12",
  },

  // TABLE: join_our_community
  join_our_community: [
    { platform_name: "Instagram", platform_link: "#" },
    { platform_name: "YouTube",   platform_link: "#" },
    { platform_name: "Reddit",    platform_link: "#" },
    { platform_name: "Discord",   platform_link: "#" },
    { platform_name: "Twitch",    platform_link: "#" },
  ],

  // TABLE: get_game
  get_game: { affiliate_links: "https://playvalorant.com" },

  // Cross-query: related game_posts by genre
  related_posts: [
    { slug: "apex-legends", title: "Apex Legends", background_img: null },
    { slug: "fortnite",     title: "Fortnite",     background_img: null },
    { slug: "csgo",         title: "CS GO",        background_img: null, desc: "High-performance games built for keyboard, mouse, and advanced hardware." },
    { slug: "apex-legends", title: "Apex Legends", background_img: null },
    { slug: "fortnite",     title: "Fortnite",     background_img: null },
  ],
};

// ============================================================
// UTILS
// ============================================================
const parseCSV = (str) => (str ? str.split(",").map((s) => s.trim()) : []);

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

// ============================================================
// SCROLL REVEAL HOOK
// ============================================================
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}
<Navbar />
// ============================================================
// SVG ICONS — inline, zero-dependency
// ============================================================

// Valorant-style diamond crosshair — used for all gameplay/control/mode icons
function ValoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="12,2 22,12 12,22 2,12" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2"  x2="12" y2="7"  />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="7"  y2="12" />
      <line x1="17" y1="12" x2="22" y2="12" />
    </svg>
  );
}

// White image placeholder — used wherever DB image fields are null
function ImgPlaceholder({ className = "", style = {} }) {
  return (
    <div className={`bg-white flex items-center justify-center ${className}`} style={style}>
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#E53935" strokeWidth="1" opacity="0.25">
        <rect x="3" y="3" width="58" height="58" rx="5" />
        <circle cx="22" cy="22" r="8" />
        <path d="M3 50l16-16 11 11 8-8 23 13" />
      </svg>
    </div>
  );
}

// Platform icons
function IconPC({ color = "#555" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={color}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}
function IconXbox({ color = "#555" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.6" />
      <path d="M6 7c1.5 1 4 4 6 5s4.5-4 6-5" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M6 17c1.5-1 4-4 6-5s4.5 4 6 5" stroke={color} strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function IconPS({ color = "#555" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={color}>
      <path d="M8.984 2.596v14.347l3.5 1.338V6.15s3.5.704 3.5 4.077c0 3.5-3.5 4.7-3.5 4.7s4.574.2 7.016-3.15c0 0 1.17-5.954-7.016-8.181zM2 18.854l6.5 2.55V19l-6.5-2.588v2.442zm15.5-4.55v2.3l4.5-1.688v-2.3l-4.5 1.688z" />
    </svg>
  );
}

// Social media icons
const SocialIcons = {
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
    </svg>
  ),
  YouTube: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <polygon points="10,9 16,12 10,15" fill="white" stroke="none" />
    </svg>
  ),
  Reddit: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <circle cx="9" cy="13" r="1.2" fill="white" stroke="none" />
      <circle cx="15" cy="13" r="1.2" fill="white" stroke="none" />
      <path d="M9 16.5s1 1.5 3 1.5 3-1.5 3-1.5" strokeLinecap="round" />
    </svg>
  ),
  Discord: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  ),
  Twitch: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      <path d="M21 2H3v16h5v4l4-4h4l5-5V2z" />
      <line x1="11" y1="7" x2="11" y2="11" />
      <line x1="16" y1="7" x2="16" y2="11" />
    </svg>
  ),
};

// ============================================================
// SECTION: HERO
// DB: hero, game_info, get_game, game_posts
// CSS: .btn-red, .btn-outline-wh, .tag-wh-outline (from index.css)
// ============================================================
function HeroSection({ hero, gameInfo, getGame, gamePost }) {
  const genres = parseCSV(gameInfo.genres);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 460, background: "#0d0000" }}>

      {/* HUD grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red V background shape */}
      <svg
        width="700" height="460" viewBox="0 0 700 460"
        className="absolute left-1/2 -translate-x-1/2"
        style={{ opacity: 0.14 }}
      >
        <polygon points="350,20 660,430 510,430 350,180 190,430 40,430" fill="#E53935" />
      </svg>

      {/* Agent silhouette — hero.background_img white SVG placeholder */}
      {hero.background_img ? (
        <img
          src={hero.background_img}
          alt={hero.game_title}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-cover object-top"
          style={{ opacity: 0.9 }}
        />
      ) : (
        <svg
          width="220" height="380" viewBox="0 0 220 380" fill="none"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ opacity: 0.82 }}
        >
          <path d="M68 74 Q30 160 14 340 L70 320 Q95 245 110 190 Q125 245 150 320 L206 340 Q190 160 152 74 Z" stroke="white" strokeWidth="1.2" fill="rgba(255,255,255,0.06)" />
          <ellipse cx="110" cy="48" rx="34" ry="38" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
          <ellipse cx="110" cy="52" rx="20" ry="22" fill="rgba(0,0,0,0.55)" />
          <circle cx="100" cy="48" r="3.5" fill="white" opacity="0.75" />
          <circle cx="120" cy="48" r="3.5" fill="white" opacity="0.75" />
          <path d="M76 88 Q56 160 48 270 L96 258 L110 200 L124 258 L172 270 Q164 160 144 88 Z" stroke="white" strokeWidth="1.2" fill="rgba(255,255,255,0.05)" />
          <path d="M76 92 Q42 130 30 172" stroke="white" strokeWidth="1.1" fill="none" />
          <path d="M144 92 Q178 130 190 172" stroke="white" strokeWidth="1.1" fill="none" />
          <line x1="96" y1="258" x2="82" y2="376" stroke="white" strokeWidth="1.5" />
          <line x1="124" y1="258" x2="138" y2="376" stroke="white" strokeWidth="1.5" />
          <rect x="18" y="155" width="36" height="6" rx="2" fill="white" opacity="0.3" />
        </svg>
      )}

      {/* HUD corner brackets */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/25" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-white/25" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-white/25" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/25" />

      {/* HUD diamond dots */}
      <div className="absolute top-20 left-10">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <rect x="1" y="1" width="8" height="8" transform="rotate(45 5 5)" stroke="rgba(229,57,53,0.7)" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <rect x="1" y="1" width="8" height="8" transform="rotate(45 5 5)" stroke="rgba(229,57,53,0.7)" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      {/* HUD top-right text — game_posts.publish_at */}
      <div className="absolute top-5 right-8 text-right z-10">
        <p className="font-jetmono text-[0.5rem] text-white/35 uppercase tracking-[0.18em] m-0">KE SU BRANDON MEIER</p>
        <p className="font-jetmono text-[0.5rem] text-white/25 uppercase tracking-[0.18em] m-0 mb-2">JILT: CENTURION</p>
        <p className="font-jetmono text-[0.58rem] text-white/50 uppercase tracking-[0.13em] m-0">
          Published by: Admin Name
        </p>
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[4]"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.38) 55%,transparent 100%)" }}
      />

      {/* Hero content — centered */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center text-center px-8 pb-10">

        {/* Genre tags + platform icons row — game_info.genres + game_info.platforms */}
        <div className="flex items-center gap-6 mb-3 flex-wrap justify-center">
          <div className="flex gap-2">
            {genres.map((g) => (
              <span
                key={g}
                className="font-jetmono text-[0.6rem] font-bold uppercase tracking-[0.1em] px-2 py-0.5 border border-white/50 text-white/88 rounded-sm"
              >
                {g}
              </span>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <IconPC color="rgba(255,255,255,0.75)" />
            <IconXbox color="rgba(255,255,255,0.75)" />
            <IconPS color="rgba(255,255,255,0.75)" />
          </div>
        </div>

        {/* Game title — hero.game_title */}
        <h1
          className="font-display font-black text-white uppercase tracking-wide leading-none m-0"
          style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
        >
          {hero.game_title}
        </h1>

        {/* Short description — hero.game_desc_short */}
        <p className="font-jetmono text-white/84 text-sm max-w-sm leading-relaxed my-3">
          {hero.game_desc_short}
        </p>

        {/* CTA buttons — get_game.affiliate_links */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#carousel"
            className="btn-red font-jetmono"
          >
            Watch Trailer
          </a>
          <a
            href={getGame.affiliate_links}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red-outline font-jetmono border-white/55 text-white hover:bg-white/10"
          >
            Get the Game ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION: STORYLINE + METADATA SIDEBAR
// DB: storyline, game_info, game_posts
// CSS: .metadata-card-red, .tag-red, .text-red-primary (index.css)
// ============================================================
function StorylineSection({ storyline, gameInfo, gamePost }) {
  const paragraphs = storyline.paragraphs.split("\n\n");
  const genres = parseCSV(gameInfo.genres);

  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="grid gap-10" style={{ gridTemplateColumns: "1fr 290px" }}>

          {/* LEFT — storyline.paragraphs */}
          <div>
            <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-6">
              Storyline
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="font-jetmono text-neutral-600 text-sm leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* RIGHT — game_info + game_posts metadata */}
          <div className="metadata-card-red sticky top-20 self-start">

            {/* game_info.profile_size_photo */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#FFEBEE]">
              {gameInfo.profile_size_photo ? (
                <img
                  src={gameInfo.profile_size_photo}
                  alt="profile"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FFCDD2] flex-shrink-0"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-white border-2 border-[#FFCDD2] flex items-center justify-center flex-shrink-0">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              )}
              <p className="font-jetmono text-[0.58rem] text-neutral-400 uppercase tracking-[0.14em]">
                Game Profile
              </p>
            </div>

            {/* Metadata rows */}
            <div className="flex flex-col gap-0 font-jetmono text-xs">
              {[
                ["Published By", "Admin Name"],
                ["Updated By",   formatDate(gamePost.updated_at)],
                ["Release Date", formatDate(gameInfo.release_date)],
                ["Developed By", gameInfo.developer],
                ["Published By", gameInfo.publisher],
              ].map(([label, value]) => (
                <div key={label + value} className="border-b border-[#FFEBEE] pb-2.5 mb-2.5">
                  <p className="text-neutral-400 uppercase tracking-[0.12em] text-[0.58rem] mb-0.5 m-0">{label}</p>
                  <p className="font-bold text-neutral-800 m-0">{value}</p>
                </div>
              ))}

              {/* Platforms — game_info.platforms */}
              <div className="border-b border-[#FFEBEE] pb-2.5 mb-2.5">
                <p className="text-neutral-400 uppercase tracking-[0.12em] text-[0.58rem] mb-1.5 m-0">Platforms</p>
                <div className="flex gap-2 items-center">
                  <IconPC /><IconXbox /><IconPS />
                </div>
              </div>

              {/* Genres — game_info.genres */}
              <div>
                <p className="text-neutral-400 uppercase tracking-[0.12em] text-[0.58rem] mb-1.5 m-0">Genres</p>
                <div className="flex flex-wrap gap-1">
                  {genres.map((g) => (
                    <span key={g} className="tag-red font-jetmono">{g}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: CAROUSEL
// DB: carousel (yt_url_official, upload)
// CSS: .card-red (index.css)
// ============================================================
function CarouselSection({ carousel }) {
  const [active, setActive] = useState(0);
  const thumbs = carousel.upload || [];
  const shift = (d) => setActive((i) => (i + d + thumbs.length) % thumbs.length);

  return (
    <Reveal>
      <div id="carousel" className="max-w-[900px] mx-auto px-6 py-16">
        <div className="flex items-stretch gap-3">

          {/* Main active image — carousel.upload[active] */}
          <div
            className="rounded-lg overflow-hidden border-2 border-[#E53935] flex-shrink-0"
            style={{ width: 240, height: 156 }}
          >
            {thumbs[active] ? (
              <img src={thumbs[active]} alt={`slide-${active}`} className="w-full h-full object-cover" />
            ) : (
              <ImgPlaceholder className="w-full h-full" />
            )}
          </div>

          {/* Thumbnail strip — carousel.upload */}
          <div className="flex gap-2 flex-1 overflow-hidden items-center">
            {thumbs.map((src, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="rounded-md overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-200"
                style={{
                  width: 88, height: 156,
                  border: `2px solid ${i === active ? "#E53935" : "transparent"}`,
                  opacity: i === active ? 1 : 0.55,
                }}
              >
                {src ? (
                  <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                ) : (
                  <ImgPlaceholder className="w-full h-full" />
                )}
              </div>
            ))}
          </div>

          {/* Arrows — stacked vertically on far right, matching original */}
          <div className="flex flex-col gap-2 justify-center flex-shrink-0">
            <button
              onClick={() => shift(1)}
              className="btn-red font-jetmono px-3 py-2"
            >→</button>
            <button
              onClick={() => shift(-1)}
              className="btn-red font-jetmono px-3 py-2"
            >←</button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: GAMEPLAY
// DB: gameplay (paragraph, gameplay_title, gameplay_title_desc)
// CSS: .icon-circle-red, .text-red-primary (index.css)
// ============================================================
function GameplaySection({ gameplay }) {
  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-5">
          Gameplay
        </h2>
        <p className="font-jetmono text-neutral-600 text-sm leading-relaxed max-w-2xl mb-10">
          {gameplay.paragraph}
        </p>
        <div className="flex flex-col gap-5">
          {gameplay.items.map((item) => (
            <div key={item.gameplay_title} className="flex gap-3 items-start">
              <div className="icon-circle-red flex-shrink-0">
                <ValoIcon size={19} />
              </div>
              <p className="font-jetmono text-sm text-neutral-600 leading-relaxed m-0">
                <span className="font-bold uppercase text-[0.66rem] tracking-[0.1em] text-neutral-800">
                  {item.gameplay_title}
                </span>{" "}
                : {item.gameplay_title_desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: QUICK CONTROL OVERVIEW
// DB: quick_control_overview (qco_title, qco_title_desc)
// CSS: .card-red, .icon-circle-red (index.css)
// ============================================================
function QuickControlSection({ controls }) {
  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-8 text-center">
          Quick Control Overview
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {controls.map((ctrl) => (
            <div key={ctrl.qco_title} className="card-red p-5 flex gap-3 items-start hover:border-[#E53935] transition-colors">
              <div className="icon-circle-red flex-shrink-0">
                <ValoIcon size={19} />
              </div>
              <div>
                <h3 className="font-jetmono font-bold text-[0.68rem] uppercase tracking-[0.12em] text-neutral-800 mb-1">
                  {ctrl.qco_title}
                </h3>
                <p className="font-jetmono text-[0.7rem] text-neutral-500 leading-relaxed m-0">
                  {ctrl.qco_title_desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: GAME MODES
// DB: modes (mode_title, mode_titledesc)
// CSS: .card-red, .icon-circle-red (index.css)
// ============================================================
function GameModesSection({ modes }) {
  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-8 text-center">
          Game Modes
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {modes.map((mode, i) => (
            <div
              key={mode.mode_title}
              className={`card-red p-5 flex flex-col items-center gap-3 text-center transition-colors ${
                i === 1 ? "border-[#E53935] outline outline-2 outline-[#E53935] outline-offset-2" : "hover:border-[#E53935]"
              }`}
            >
              <div className="icon-circle-red w-14 h-14">
                <ValoIcon size={26} />
              </div>
              <h3 className="font-jetmono font-bold text-[0.66rem] uppercase tracking-[0.12em] text-neutral-800 m-0">
                {mode.mode_title}
              </h3>
              <p className="font-jetmono text-[0.64rem] text-neutral-500 leading-relaxed m-0">
                {mode.mode_titledesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: SYSTEM REQUIREMENTS
// DB: system_requirement
// CSS: .table-header-red (index.css)
// ============================================================
function SystemReqSection({ sysReq }) {
  const rows = [
    ["Operating System", sysReq.os_min,        sysReq.os_rec],
    ["Processor",        sysReq.processor_min,  sysReq.processor_rec],
    ["Memory",           sysReq.memory_min,     sysReq.memory_rec],
    ["Graphics",         sysReq.graphics_min,   sysReq.graphics_rec],
    ["Storage",          sysReq.storage_min,    sysReq.storage_rec],
    ["DirectX",          sysReq.directx_min,    sysReq.directx_rec],
  ];

  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-8">
          System Requirements
        </h2>
        <div className="rounded-lg overflow-hidden border border-[#FFCDD2]">
          <table className="w-full font-jetmono text-xs">
            <thead>
              <tr className="table-header-red">
                {["Component", "Minimum", "Recommended"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 uppercase tracking-[0.1em] text-[0.62rem] font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([comp, min, rec], i) => (
                <tr key={comp} className={i % 2 === 0 ? "bg-white" : "bg-[#fff5f5]"}>
                  <td className="px-5 py-3 font-bold text-neutral-700 uppercase tracking-[0.07em] border-b border-[#FFEBEE]">
                    {comp}
                  </td>
                  <td className="px-5 py-3 text-neutral-500 border-b border-[#FFEBEE]">{min}</td>
                  <td className="px-5 py-3 text-neutral-500 border-b border-[#FFEBEE]">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: MORE LIKE THIS
// DB: cross-query game_posts by genre
// CSS: .card-red, .btn-red (index.css)
// ============================================================
function MoreLikeThisSection({ posts }) {
  const [active, setActive] = useState(2); // CS GO is center by default

  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl m-0">
            More Like This
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="btn-red font-jetmono w-8 h-8 !p-0 rounded-full flex items-center justify-center"
            >←</button>
            <button
              onClick={() => setActive((a) => Math.min(posts.length - 1, a + 1))}
              className="btn-red font-jetmono w-8 h-8 !p-0 rounded-full flex items-center justify-center"
            >→</button>
          </div>
        </div>

        <div className="flex gap-3 items-end">
          {posts.map((post, i) => {
            const isActive = i === active;
            return (
              <div
                key={post.slug + i}
                onClick={() => setActive(i)}
                className="relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300"
                style={{ width: isActive ? 200 : 110, height: 155, opacity: isActive ? 1 : 0.65 }}
              >
                {/* post.background_img — white placeholder */}
                {post.background_img ? (
                  <img src={post.background_img} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                  <ImgPlaceholder className="w-full h-full" style={{ background: "#111" }} />
                )}

                {isActive ? (
                  /* White popup — matching original design */
                  <div className="absolute inset-0 bg-white rounded-lg p-3 flex flex-col justify-end z-10 shadow-xl">
                    <p className="font-display font-black text-[1.05rem] text-neutral-800 uppercase tracking-wide m-0 mb-1">
                      {post.title}
                    </p>
                    {post.desc && (
                      <p className="font-jetmono text-[0.62rem] text-neutral-500 leading-snug m-0 mb-2">
                        {post.desc}
                      </p>
                    )}
                    <a
                      href={`/gamepost/${post.slug}`}
                      className="btn-red font-jetmono text-[0.58rem] !py-1.5 !px-3 self-start"
                    >
                      Explore ↗
                    </a>
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex items-end p-2"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.82) 0%,transparent 55%)" }}
                  >
                    <p className="font-display font-bold text-white text-sm uppercase tracking-wide m-0">
                      {post.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: COMMUNITY HUB
// DB: user_reviews (username, comment, rating)
// CSS: .btn-red (index.css)
// ============================================================
function CommunityHubSection() {
  const [rating, setRating] = useState(8);

  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-red-primary uppercase tracking-wider text-3xl mb-6">
          Community Hub
        </h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 280px" }}>

          {/* LEFT — Live Chatroom */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-jetmono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Live Chatroom
              </span>
              <span className="font-jetmono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-neutral-400">
                Username:{" "}
                <span className="text-[#E53935]">@GZONEOFFICIAL</span>
              </span>
            </div>

            {/* Chat messages — user_reviews.comment */}
            <div className="bg-white border border-[#FFCDD2] rounded-md p-4 min-h-[130px] mb-3">
              <div className="flex gap-2 items-start">
                <span className="font-jetmono text-[0.68rem] font-bold text-[#E53935] whitespace-nowrap flex-shrink-0">
                  @GZONESPHERE:
                </span>
                <p className="font-jetmono text-[0.7rem] text-neutral-500 leading-relaxed m-0">
                  Free-for-all mode focused purely on combat. Used primarily for warm-ups,
                  aim training, and mechanical improvement.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type message"
                className="flex-1 font-jetmono text-xs border border-neutral-200 rounded-sm px-3 py-2 outline-none focus:border-[#E53935] transition-colors"
              />
              <button className="btn-red font-jetmono whitespace-nowrap">Send ↗</button>
            </div>
          </div>

          {/* RIGHT — Share Your Reviews */}
          <div>
            <span className="font-jetmono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-neutral-400 block mb-3">
              Share Your Reviews
            </span>

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              {/* user_reviews role */}
              <select className="font-jetmono text-xs border border-neutral-200 rounded-sm px-2 py-1.5 bg-white cursor-pointer outline-none focus:border-[#E53935]">
                <option>Gamer</option>
                <option>Critic</option>
              </select>

              {/* user_reviews.rating slider */}
              <div className="flex-1 min-w-[120px]">
                <div className="flex justify-between mb-1">
                  <span className="font-jetmono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-neutral-400">Rate</span>
                  <span className="font-jetmono text-[0.66rem] font-bold text-neutral-800">{rating}/10</span>
                </div>
                <input
                  type="range" min="1" max="10" value={rating}
                  onChange={(e) => setRating(+e.target.value)}
                  className="w-full h-1 rounded-sm cursor-pointer outline-none appearance-none"
                  style={{
                    background: `linear-gradient(to right,#E53935 ${(rating - 1) * 11.1}%,#FFCDD2 ${(rating - 1) * 11.1}%)`,
                  }}
                />
              </div>
            </div>

            {/* user_reviews.comment textarea */}
            <textarea
              placeholder="Type message"
              rows={5}
              className="w-full font-jetmono text-xs border border-neutral-200 rounded-sm px-3 py-2 outline-none focus:border-[#E53935] resize-none mb-3 transition-colors"
            />

            {/* user_reviews submit */}
            <button className="btn-red font-jetmono w-full justify-center">
              Post Review ↗
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: CRITIC RATING
// DB: expert_reviews (site, quote, rating, max_rating)
// CSS: .cta-red (index.css)
// ============================================================
function CriticRatingSection() {
  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="cta-red px-10 py-8 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-display font-black text-white uppercase tracking-wider text-[1.75rem] m-0 mb-1">
              Critic Rating
            </h2>
            <p className="font-jetmono text-[0.7rem] text-white/72 m-0">
              Login as Critic to write the Critic Reviews
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[190px]">
            <input
              type="email"
              placeholder="E-mail"
              className="font-jetmono text-xs border-none rounded-sm px-4 py-2 outline-none w-full"
            />
            <button className="font-jetmono text-xs font-bold uppercase tracking-[0.12em] py-2 bg-white text-[#E53935] rounded-sm hover:bg-neutral-50 transition-colors border-none cursor-pointer">
              Login ↗
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// SECTION: JOIN OUR COMMUNITY
// DB: join_our_community (platform_name, platform_link)
// CSS: .cta-red (index.css)
// ============================================================
function JoinCommunitySection({ community }) {
  return (
    <Reveal>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="cta-red px-10 py-7 flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-display font-black text-white uppercase tracking-wider text-[1.75rem] m-0">
            Join Our Community
          </h2>
          <div className="flex gap-3 items-center">
            {community.map((c) => {
              const Icon = SocialIcons[c.platform_name];
              return (
                <a
                  key={c.platform_name}
                  href={c.platform_link}
                  title={c.platform_name}
                  className="w-9 h-9 rounded-full border border-white/45 flex items-center justify-center hover:bg-white/15 transition-colors no-underline"
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// ROOT: GamePostPage
// Add this to your index.css / tailwind config:
//   fontFamily: { jetmono: [...], display: [...] }
// Or add to your index.html:
//   <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;900&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet"/>
// ============================================================
export default function GamePostPage() {
  // TODO: replace MOCK with real fetch
  // const { slug } = useParams();
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch(`/api/gamepost/${slug}`).then(r => r.json()).then(setData);
  // }, [slug]);
  // if (!data) return <div>Loading...</div>;

  const data = MOCK;

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#FFF5F5 0%,#FFE4E4 42%,#FFCDD2 100%)" }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <HeroSection
        hero={data.hero}
        gameInfo={data.game_info}
        getGame={data.get_game}
        gamePost={data.game_post}
      />

      {/* ── Storyline + Metadata Sidebar ─────────────────── */}
      <StorylineSection
        storyline={data.storyline}
        gameInfo={data.game_info}
        gamePost={data.game_post}
      />

      {/* ── Carousel ─────────────────────────────────────── */}
      <CarouselSection carousel={data.carousel} />

      {/* ── Gameplay ─────────────────────────────────────── */}
      <GameplaySection gameplay={data.gameplay} />

      {/* ── Quick Control Overview ───────────────────────── */}
      <QuickControlSection controls={data.quick_control_overview} />

      {/* ── Game Modes ───────────────────────────────────── */}
      <GameModesSection modes={data.modes} />

      {/* ── System Requirements ──────────────────────────── */}
      <SystemReqSection sysReq={data.system_requirement} />

      {/* ── More Like This ───────────────────────────────── */}
      <MoreLikeThisSection posts={data.related_posts} />

      {/* ── Community Hub ────────────────────────────────── */}
      <CommunityHubSection />

      {/* ── Critic Rating ────────────────────────────────── */}
      <CriticRatingSection />

      {/* ── Join Our Community ───────────────────────────── */}
      <JoinCommunitySection community={data.join_our_community} />
    </div>
  );
}
 