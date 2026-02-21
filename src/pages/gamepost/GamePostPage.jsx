import Navbar from "../../components/Navbar";
import gameposthero from "../../assets/images/gameposthero.png";
import placeholderWhite from "../../assets/images/placeholderWhite.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
/* =========================================================
   MOCK DATABASE OBJECT (STRUCTURE MATCHES YOUR SCHEMA)
========================================================= */

const MOCK = {
  game_posts: {
    game_post_id: 1,
    slug: "valorant",
    status: "published",
    publish_at: "2026-01-25",
    created_at: "2026-01-20",
    updated_at: "2026-01-25",
  },

  hero: {
    game_title: "VALORANT",
    game_desc_short:
      "A competitive 5v5 tactical shooter where precision gunplay meets unique agent abilities.",
    background_img: gameposthero,
  },

  storyline: {
    paragraphs:
      "In the near future, Earth is permanently altered by a mysterious global event known as First Light. This awakens latent abilities in select individuals across the world, transforming them into powerful agents with unique skills.",
  },

  gameplay: [
    {
      gameplay_title: "PRECISION GUNPLAY",
      gameplay_title_desc: "Shooting mechanics reward accuracy and recoil control.",
      paragraph: "",
    },
    {
      gameplay_title: "AGENT ABILITIES",
      gameplay_title_desc: "Each agent brings unique tactical skills.",
      paragraph: "",
    },
  ],

  quick_control_overview: [
    { qco_title: "MOVEMENT", qco_title_desc: "Use W,A,S,D to move." },
    { qco_title: "COMBAT", qco_title_desc: "Left click to fire." },
    { qco_title: "COMBAT", qco_title_desc: "Left click to fire." },
    { qco_title: "COMBAT", qco_title_desc: "Left click to fire." },
  ],

  system_requirement: {
    os_min: "Windows 10 64-bit",
    os_rec: "Windows 11 64-bit",
    processor_min: "Intel i3",
    processor_rec: "Intel i5",
    memory_min: "4GB",
    memory_rec: "8GB",
    graphics_min: "Intel HD 4000",
    graphics_rec: "GTX 1050Ti",
    storage_min: "30GB",
    storage_rec: "30GB",
    directx_min: "DirectX 11",
    directx_rec: "DirectX 12",
  },

  get_game: {
    affiliate_links: "#",
  },

  game_info: {
    developer: "Riot Games",
    publisher: "Riot Games",
    release_date: "2020-06-02",
    genres: "Tactical,Shooter,Multiplayer",
    platforms: "PC,XBOX,PS",
    profile_size_photo: placeholderWhite,
  },

  expert_reviews: [
    { site: "IGN", quote: "Outstanding tactical shooter.", rating: 9, max_rating: 10 },
    { site: "IGN", quote: "Outstanding tactical shooter.", rating: 9, max_rating: 10 },
    { site: "IGN", quote: "Outstanding tactical shooter.", rating: 9, max_rating: 10 },

  ],

  user_reviews: [
    { username: "Player123", comment: "Highly competitive gameplay.", rating: 8 },
    { username: "Player123", comment: "Highly competitive gameplay.", rating: 8 },
    { username: "Player123", comment: "Highly competitive gameplay.", rating: 8 },
  ],

  modes: [
    { mode_title: "UNRATED" },
    { mode_title: "COMPETITIVE" },
    { mode_title: "SPIKE RUSH" },
  ],

  awards_and_achievements: [
    { aa_pt: "Best Multiplayer Game" },
  ],
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function GamePostPage() {
  const data = MOCK;

  return (
    <div className="bg-[#F6DCDC] min-h-screen">

      <Navbar logoVariant="red" loginVariant="red" accent="red" />
      <div className="h-[3px] bg-red-600" />

      <HeroSection hero={data.hero} />
      <StorylineSection storyline={data.storyline} info={data.game_info} />
      <GameplaySection gameplay={data.gameplay} />
      <QuickControlSection controls={data.quick_control_overview} />
      <SystemRequirementSection sys={data.system_requirement} />
      <ModesSection modes={data.modes} />
      <ReviewsSection expert={data.expert_reviews} user={data.user_reviews} />
      
      <CommunitySection />
      <CriticRatingSection />
      <JoinCommunitySection />
      <Footer accent="red"  />
    </div>
  );
}

/* =========================================================
   HERO SECTION (hero table)
========================================================= */

function HeroSection({ hero }) {
  const navigate = useNavigate();

  return (
    <section className="relative h-[540px] bg-black text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={hero.background_img || placeholderWhite}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 font-jetmono">

        <h1 className="text-7xl font-black uppercase tracking-wide">
          {hero.game_title}
        </h1>

        <p className="max-w-md mt-4 text-white/80 text-sm">
          {hero.game_desc_short}
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">

          {/* Watch Trailer */}
          <button
            className="px-8 py-3 border border-white rounded-md text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Watch Trailer
          </button>

          {/* Get Game */}
          <button
            onClick={() => navigate("/game-collection")}
            className="px-8 py-3 bg-red-600 rounded-md text-xs uppercase tracking-widest hover:bg-red-700 transition"
          >
            Get The Game →
          </button>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STORYLINE SECTION (storyline + game_info tables)
========================================================= */

function StorylineSection({ storyline, info }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-black text-red-600 uppercase mb-6">
          Storyline
        </h2>
        <p className="text-sm leading-relaxed">
          {storyline.paragraphs}
        </p>
      </div>

      <div className="bg-white border border-red-200 rounded-xl p-8">
        <Meta label="Developer" value={info.developer} />
        <Meta label="Publisher" value={info.publisher} />
        <Meta label="Release Date" value={info.release_date} />
        <Meta label="Genres" value={info.genres} />
        <Meta label="Platforms" value={info.platforms} />
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

/* =========================================================
   GAMEPLAY SECTION (gameplay table)
========================================================= */

function GameplaySection({ gameplay }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 font-jetmono">
      
      {/* Section Title */}
      <h2 className="text-[40px] font-black uppercase tracking-wide text-red-600 mb-10">
        Gameplay
      </h2>

      {/* Intro Paragraph (Static – matches Figma style) */}
      <p className="text-[20px] leading-relaxed text-black mb-8 max-w-4xl">
        VALORANT is a tactical 5v5 first-person shooter that emphasizes precision,
        strategy, and teamwork. Every match is divided into rounds where players
        take on the role of attackers or defenders, with success depending on
        coordination, positioning, and smart decision-making rather than raw
        firepower alone.
      </p>

      {/* Bullet Gameplay Points (Dynamic from props) */}
      <div className="space-y-6 max-w-4xl">
        {gameplay.map((g, i) => (
          <div key={i}>
            <p className="text-[20px] leading-relaxed text-black">
              <span className="font-bold uppercase">
                • {g.gameplay_title}
              </span>{" "}
              : {g.gameplay_title_desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   QUICK CONTROL SECTION
========================================================= */

function QuickControlSection({ controls }) {
  return (
    <section className="max-w-[1350px] mx-auto px-4 lg:px-8 py-20 font-jetmono">
      
      {/* Section Title */}
      <h2 className="text-[36px] font-black uppercase text-red-600 text-center tracking-wide mb-14">
        Quick Control Overview
      </h2>

      {/* Controls Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {controls.map((c, i) => (
          <div
            key={i}
            className="bg-[#e7bcbc] border border-black/40 rounded-2xl p-8 flex gap-6 items-start"
          >
            {/* Left Icon Placeholder (diamond style box like Figma) */}
            <div className="w-12 h-12 border-2 border-black/40 rotate-45 flex-shrink-0 mt-1" />

            {/* Text Content */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wide mb-2">
                {c.qco_title}
              </h3>
              <p className="text-[13px] leading-relaxed text-black/80">
                {c.qco_title_desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   SYSTEM REQUIREMENTS SECTION
========================================================= */

function SystemRequirementSection({ sys }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-3xl font-black text-red-600 uppercase mb-10">
        System Requirements
      </h2>

      <table className="w-full bg-white border border-red-200">
        <tbody>
          <Row label="OS" min={sys.os_min} rec={sys.os_rec} />
          <Row label="Processor" min={sys.processor_min} rec={sys.processor_rec} />
          <Row label="Memory" min={sys.memory_min} rec={sys.memory_rec} />
          <Row label="Graphics" min={sys.graphics_min} rec={sys.graphics_rec} />
          <Row label="Storage" min={sys.storage_min} rec={sys.storage_rec} />
        </tbody>
      </table>
    </section>
  );
}

function Row({ label, min, rec }) {
  return (
    <tr className="border-b">
      <td className="p-4 font-semibold">{label}</td>
      <td className="p-4">{min}</td>
      <td className="p-4">{rec}</td>
    </tr>
  );
}

/* =========================================================
   MODES SECTION
========================================================= */

function ModesSection({ modes }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 font-jetmono">
      
      {/* Section Title */}
      <h2 className="text-[38px] font-black text-red-600 uppercase text-center tracking-wide mb-16">
        Game Modes
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {modes.map((m, i) => (
          <div
            key={i}
            className="bg-[#F3D4D4] border border-black/30 rounded-2xl p-10 text-center transition hover:shadow-md"
          >
            
            {/* Icon Placeholder (Figma style geometric icon box) */}
            <div className="w-16 h-16 mx-auto mb-8 border-2 border-black/40 rotate-45" />

            {/* Mode Title */}
            <h3 className="text-[18px] font-bold uppercase tracking-wide">
              {m.mode_title}
            </h3>

            {/* Optional Description Placeholder (kept structure-ready) */}
            <p className="mt-4 text-[14px] text-black/70 leading-relaxed">
              Mode description goes here.
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   REVIEWS SECTION
========================================================= */
function ReviewsSection({ expert, user }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 font-jetmono">
      
      {/* Section Title */}
      <h2 className="text-[38px] font-black text-red-600 uppercase tracking-wide mb-14">
        Reviews
      </h2>

      {/* ================= EXPERT REVIEWS ================= */}
      <h3 className="text-lg font-bold uppercase tracking-wide mb-8">
        Expert Reviews
      </h3>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {expert.map((r, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 border ${
              i === 1
                ? "bg-red-600 text-white border-red-600"
                : "bg-[#F3D4D4] border-black/30 text-black"
            }`}
          >
            {/* Quote Mark */}
            <div className="text-5xl font-black mb-6 leading-none">
              “
            </div>

            {/* Quote Text */}
            <p className="text-[16px] leading-relaxed mb-8">
              {r.quote}
            </p>

            {/* Author */}
            <p className="text-[15px] font-bold uppercase tracking-wide">
              {r.site} — {r.rating}/{r.max_rating}
            </p>
          </div>
        ))}
      </div>

      {/* ================= USER REVIEWS ================= */}
      <h3 className="text-lg font-bold uppercase tracking-wide mb-8">
        User Reviews
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {user.map((r, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 border ${
              i === 1
                ? "bg-red-600 text-white border-red-600"
                : "bg-[#F3D4D4] border-black/30 text-black"
            }`}
          >
            {/* Quote Mark */}
            <div className="text-5xl font-black mb-6 leading-none">
              “
            </div>

            {/* Comment */}
            <p className="text-[16px] leading-relaxed mb-8">
              {r.comment}
            </p>

            {/* Username */}
            <p className="text-[15px] font-bold uppercase tracking-wide">
              {r.username} — {r.rating}/10
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   AWARDS SECTION
========================================================= */

function AwardsSection({ awards }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-3xl font-black text-red-600 uppercase mb-10">
        Awards
      </h2>

      <ul className="list-disc pl-6">
        {awards.map((a, i) => (
          <li key={i}>{a.aa_pt}</li>
        ))}
      </ul>
    </section>
    
  );
}
/* =========================================================
   FOOTER SECTION
========================================================= */

/* =========================================================
   COMMUNITY SECTION
========================================================= */

function CommunitySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 font-jetmono">
      
      {/* Section Title */}
      <h2 className="text-[42px] font-black uppercase text-red-600 tracking-wide mb-16">
        Community Hub
      </h2>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* ================= LIVE CHAT ================= */}
        <div className="lg:col-span-2 bg-[#EED2D2] border border-black/30 rounded-2xl p-8 flex flex-col justify-between min-h-[360px]">
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Live Chatroom
            </h3>

            <p className="text-sm leading-relaxed">
              <span className="font-bold">@GZONESPHERE:</span>{" "}
              Free-for-all mode focused purely on combat. Used primarily for
              warm-ups, aim training, and mechanical improvement.
            </p>
          </div>

          {/* Input */}
          <div className="mt-8 flex gap-4">
            <input
              type="text"
              placeholder="Type message"
              className="flex-1 bg-white border border-black/30 rounded-md px-4 py-3 text-sm outline-none"
            />

            <button className="bg-red-600 text-white text-xs uppercase tracking-widest px-6 rounded-md hover:bg-red-700 transition">
              Send →
            </button>
          </div>
        </div>

        {/* ================= REVIEW BOX ================= */}
        <div className="bg-[#EED2D2] border border-black/30 rounded-2xl p-8 min-h-[360px] flex flex-col justify-between">
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Share Your Reviews
            </h3>

            {/* Username */}
            <p className="text-xs uppercase tracking-widest mb-6">
              Username: <span className="font-bold">@GZONEOFFICIAL</span>
            </p>

            {/* Role + Rating */}
            <div className="flex items-center justify-between mb-8">
              <select className="bg-white border border-black/30 rounded-md px-3 py-2 text-sm outline-none">
                <option>Gamer</option>
                <option>Critic</option>
                <option>Casual</option>
              </select>

              <div className="flex items-center gap-3">
                <span className="text-xs uppercase">Rate</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="8"
                  className="accent-red-600"
                />
                <span className="text-sm font-bold">8/10</span>
              </div>
            </div>

            {/* Review Input */}
            <textarea
              placeholder="Type message"
              rows="3"
              className="w-full bg-white border border-black/30 rounded-md px-4 py-3 text-sm outline-none resize-none"
            />
          </div>

          {/* Button */}
          <button className="mt-6 bg-red-600 text-white text-xs uppercase tracking-widest px-6 py-3 rounded-md hover:bg-red-700 transition">
            Post Review →
          </button>
        </div>

      </div>
    </section>
  );
}
/* =========================================================
   CRITIC RATING SECTION
========================================================= */

function CriticRatingSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 font-jetmono">
      
      <div className="bg-red-600 rounded-2xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div>
          <h2 className="text-[38px] font-black uppercase text-white tracking-wide mb-4">
            Critic Rating
          </h2>

          <p className="text-sm text-white/90">
            Login as Critic to write the Critic Reviews
          </p>
        </div>

        {/* Right Side (Form Area) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="E-mail"
            className="bg-transparent border border-white/70 text-white placeholder-white/70 rounded-md px-6 py-3 text-sm outline-none w-full sm:w-[260px]"
          />

          {/* Login Button */}
          <button className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3 rounded-md hover:bg-neutral-200 transition w-full sm:w-auto">
            Login →
          </button>

        </div>

      </div>

    </section>
  );
}
function FooterSection() {
  return (
    <section className="mt-20">
      <Footer accent = "red" />
    </section>
  );
}
/* =========================================================
   JOIN COMMUNITY SECTION
========================================================= */

function JoinCommunitySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 font-jetmono">
      
      <div className="bg-red-600 rounded-2xl px-10 py-10 flex items-center justify-between">
        
        {/* Left Title */}
        <h2 className="text-[36px] font-black uppercase text-white tracking-wide">
          Join Our Community
        </h2>

        {/* Right Social Icons */}
        <div className="flex items-center gap-6">
          
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-sm font-bold cursor-pointer hover:scale-105 transition">
            IG
          </div>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-sm font-bold cursor-pointer hover:scale-105 transition">
            YT
          </div>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-sm font-bold cursor-pointer hover:scale-105 transition">
            RD
          </div>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-sm font-bold cursor-pointer hover:scale-105 transition">
            DC
          </div>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 text-sm font-bold cursor-pointer hover:scale-105 transition">
            TW
          </div>

        </div>

      </div>

    </section>
  );
}




