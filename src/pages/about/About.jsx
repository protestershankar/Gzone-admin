// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  const identityTags = [
    { text: "An identity that grows with you.", filled: true },
    { text: 'An identity that reflects "Who you are?"', filled: false },
    { text: 'An identity that reflects "How you contribute to gaming culture."', filled: false },
    { text: 'An identity that reflects "What you do?"', filled: false },
  ];

  const gamingAspects = [
    "A competitive pursuit",
    "A creative outlet",
    "A skill set",
    "A career ambition",
    "A social space",
    "A lifestyle",
  ];

  const philosophyBeliefs = [
    "Gaming is a legitimate culture, not a niche",
    "Communities should empower, not overwhelm",
    "Skill and creativity deserve visibility",
    "Gaming identity should be unified, not fragmented",
    "Effort should lead to opportunity",
  ];

  const systemPoints = [
    "Systems that connect people instead of scattering them.",
    "Systems that reward contribution instead of noise.",
    "Systems that allow gaming to be taken seriously—as culture, career, and community.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d7f0fa] via-[#a9d7ea] to-[#8ec4db] text-[#1a3a5a]">

      <Navbar logoVariant="blue" loginVariant="blue" isDark={false} accent="blue" />

      {/* HERO */}
      <section className="bg-[#0f6f8c] py-28 text-center text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide mb-6">
            ABOUT GZONESPHERE
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 leading-relaxed">
            Gaming is one of the most powerful cultures of our generation.
            It connects billions of people, fuels creativity, builds skills,
            and shapes identities.
          </p>
        </div>
      </section>

      {/* FRAGMENTATION SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Yet despite its scale, gaming today is deeply fragmented.</p>
            <p>
              Gamers are forced to split their time, identity, and effort
              across multiple platforms.
            </p>
            <p>
              Communities become chaotic. Progress becomes invisible.
              Opportunities feel scattered and inconsistent.
            </p>
            <p>
              The result is a gaming experience that feels disjointed,
              despite being global.
            </p>
          </div>

          <div className="h-[380px] bg-black rounded-3xl shadow-xl"></div>
        </div>
      </section>

      {/* BLUE DIVIDER */}
      <section className="bg-[#0f6f8c] py-12 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-black uppercase">
          GZONESPHERE WAS CREATED TO CHANGE THAT.
        </h2>
      </section>

      {/* UNIFIED ECOSYSTEM */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-24">
          <h2 className="text-5xl font-black uppercase mb-6">
            A UNIFIED GAMING ECOSYSTEM
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-[#1a3a5a]/80 mb-8">
            GzoneSphere is being built as a unified gaming ecosystem—a single,
            structured environment where identity, growth, creativity, and
            connection exist together.
          </p>

          <p className="uppercase font-semibold mb-12 tracking-wider">
            AT ITS CORE, GZONESPHERE IS CENTERED AROUND ONE GAMING IDENTITY.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {identityTags.map((tag, index) => (
              <div
                key={index}
                className={`px-6 py-3 text-sm rounded-lg transition ${
                  tag.filled
                    ? "bg-[#0f6f8c] text-white shadow-md"
                    : "border border-[#0f6f8c]/40"
                }`}
              >
                {tag.text}
              </div>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-lg text-[#1a3a5a]/80">
            Instead of starting over on every platform, your presence lives
            in one place—evolving as you compete, create, learn, and connect.
          </p>
        </div>
      </section>

      {/* JUST A GAME */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-start">

          <div className="h-[380px] bg-black rounded-3xl shadow-xl"></div>

          <div className="space-y-6 text-lg">
            <p>
              We believe gaming has outgrown the idea of being
              <span className="font-bold"> “JUST A GAME.”</span>
            </p>

            <p>For millions of people, gaming is:</p>

            <div className="grid grid-cols-2 gap-4">
              {gamingAspects.map((aspect, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    index === 1
                      ? "bg-white/40"
                      : ""
                  }`}
                >
                  • {aspect}
                </div>
              ))}
            </div>

            <p className="italic">
              <span className="font-semibold not-italic">GzoneSphere</span> is designed around this reality.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 mt-16 text-lg text-[#1a3a5a]/80">
          Inside the ecosystem, gaming extends beyond gameplay. It becomes
          a space where effort is visible and progression feels meaningful.
        </div>
      </section>

      {/* DESIGNED TO EVOLVE */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-5xl font-black uppercase mb-4">
            DESIGNED TO EVOLVE
          </h2>

          <p className="mb-16 text-lg text-[#1a3a5a]/80">
            GzoneSphere is not launched as a finished product.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-6 text-lg">
              <p>
                It is being built phase by phase.
              </p>
              <p>
                As the ecosystem matures, new dimensions are introduced naturally.
              </p>
              <p className="italic font-medium">
                This approach allows the platform to grow alongside its community.
              </p>
            </div>

            <div className="h-[380px] bg-black rounded-3xl shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-5xl font-black uppercase mb-6">
            OUR PHILOSOPHY
          </h2>

          <p className="mb-12 text-lg text-[#1a3a5a]/70">
            We believe
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {philosophyBeliefs.map((belief, index) => (
              <div
                key={index}
                className="border border-[#1a3a5a]/30 rounded-xl px-6 py-4 text-left"
              >
                {belief}
              </div>
            ))}
          </div>

          <p className="mt-12 italic text-[#1a3a5a]/80">
            GzoneSphere exists to reflect these beliefs.
          </p>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-20">

          <h2 className="text-5xl font-black uppercase mb-4">
            THE FUTURE OF GAMING IS NOT MORE APPS.
          </h2>

          <p className="uppercase font-semibold mb-16 text-[#1a3a5a]/70">
            IT’S BETTER SYSTEMS
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="h-[380px] bg-black rounded-3xl shadow-xl"></div>

            <div className="space-y-6 text-left text-lg">
              {systemPoints.map((point, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 rounded-lg ${
                    index === 1 ? "bg-white/40" : ""
                  }`}
                >
                  • {point}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="font-bold italic">
              GzoneSphere is being built to become that system.
            </p>
            <p className="italic text-[#1a3a5a]/70">
              We're here to build something that unfolds with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL STRIP */}
      <section className="bg-[#0f6f8c] py-12 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-black uppercase">
          ONE ECOSYSTEM. INFINITE POSSIBILITIES.
        </h2>
      </section>

      <Footer variant="light" accent="blue" />
    </div>
  );
}

export default About;
