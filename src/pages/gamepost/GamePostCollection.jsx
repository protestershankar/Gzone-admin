import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function GamePostCollection() {
  return (
    <div className="bg-[#cfeaf6] text-neutral-900">

      {/* ================= NAVBAR ================= */}
      <Navbar logoVariant="blue" loginVariant="blue" isDark={false} accent="blue" />


      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl text-white px-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
            Discover Games on GZoneSphere
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explore games by platform, category, and popularity —
            with detailed game posts, gameplay insights, and updates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-neutral-200 transition">
              Explore Games <FiArrowUpRight />
            </button>

            <button className="border border-white px-8 py-4 uppercase tracking-wide hover:bg-white hover:text-black transition">
              Explore Blogs
            </button>
          </div>
        </div>
      </section>

      {/* ================= SUPPORTED PLATFORMS ================= */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-black uppercase mb-4">
          Supported Platforms
        </h2>
        <p className="text-neutral-600 mb-16 text-lg">
          Choose your platform and find games optimized for your device.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {["PC", "PLAYSTATION", "XBOX", "MOBILE"].map((platform) => (
            <div
              key={platform}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="h-72 bg-neutral-300 group-hover:scale-110 transition duration-500"></div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute bottom-6 left-6 text-white text-2xl font-bold uppercase">
                {platform}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GAME CATEGORIES ================= */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-black uppercase mb-6">
          Game Categories
        </h2>
        <p className="text-neutral-600 text-lg mb-16">
          Browse games by genre and find experiences that match your play style.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Action",
            "Arcade",
            "Shooter",
            "FPS",
            "Simulation",
            "Racing",
            "Adventure",
            "Mobile",
          ].map((cat) => (
            <button
              key={cat}
              className="border border-neutral-700 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        <button className="mt-12 border border-neutral-700 px-8 py-3 rounded-md uppercase font-semibold hover:bg-neutral-900 hover:text-white transition">
          Explore More
        </button>
      </section>

      {/* ================= TRENDING GAMES ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black uppercase mb-12">
          Trending Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Apex Legends", "Fortnite", "CS GO", "Cyberpunk"].map((game) => (
            <div
              key={game}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div className="h-96 bg-neutral-300 group-hover:scale-110 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6">
                <h3 className="text-xl font-bold uppercase mb-3">
                  {game}
                </h3>
                <Link
                  to="/gamepost"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 text-sm uppercase font-semibold hover:bg-neutral-700 transition"
                >
                  Explore <FiArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-24 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black uppercase mb-4">
          Blogs & Guides
        </h2>
        <p className="text-neutral-600 text-lg mb-16">
          Insights, updates, and guides connected to popular games and genres.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((blog) => (
            <div
              key={blog}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="h-52 bg-neutral-300 rounded-2xl mb-6"></div>

              <h3 className="font-bold uppercase mb-3">
                How Tactical Shooters Are Shaping Competitive Gaming
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                Short insight into modern tactical shooter design.
              </p>

              <button className="border border-neutral-800 px-5 py-2 uppercase text-sm font-semibold hover:bg-neutral-900 hover:text-white transition">
                Read More
              </button>
            </div>
          ))}
        </div>

        <button className="mt-16 border border-neutral-800 px-8 py-3 uppercase font-semibold hover:bg-neutral-900 hover:text-white transition">
          View All
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer variant="light" accent="blue" />

    </div>
  );
}

export default GamePostCollection;
