// import { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiArrowUpRight } from 'react-icons/fi';
// import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// // Global Components
// import Navbar from '../../components/Navbar';
// import SectionHeader from '../../components/SectionHeader';
// import Footer from '../../components/Footer';

// // Esports Components
// import { FeaturedTournamentSlider, LiveMatchCard, TournamentCard } from './components';

// // Assets & Data
// import { 
//   featuredTournaments, 
//   liveMatches, 
//   upcomingTournaments, 
//   esportsFeatures,
//   images 
// } from '../../assets/assets';

// function EsportsHome() {
//   const liveBattlesRef = useRef(null);
//   const [expandedMatchIndex, setExpandedMatchIndex] = useState(2); // Middle card expanded by default

//   // Scroll handlers for Live Battles section
//   const scrollLiveBattles = (direction) => {
//     if (liveBattlesRef.current) {
//       const scrollAmount = 280;
//       liveBattlesRef.current.scrollBy({
//         left: direction === 'next' ? scrollAmount : -scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-esports-gradient">
//       {/* Navbar with green theme */}
//       <Navbar logoVariant="green" loginVariant="green" isDark={false} accent="green" />

//       {/* Hero Section */}
//       <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${images.placeholderWhite})` }}
//         />
        
//         {/* Green gradient overlay */}
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(180deg, rgba(27, 94, 32, 0.85) 0%, rgba(56, 142, 60, 0.9) 50%, rgba(76, 175, 80, 0.85) 100%)',
//           }}
//         />

//         {/* Particle overlay effect */}
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: `radial-gradient(2px 2px at 20px 30px, #A5D6A7, transparent),
//                              radial-gradient(2px 2px at 40px 70px, #C8E6C9, transparent),
//                              radial-gradient(1px 1px at 90px 40px, #E8F5E9, transparent),
//                              radial-gradient(2px 2px at 130px 80px, #A5D6A7, transparent),
//                              radial-gradient(1px 1px at 160px 30px, #C8E6C9, transparent)`,
//             backgroundSize: '200px 100px',
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-6 drop-shadow-lg">
//             ENTER THE ARENA
//           </h1>
//           <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-md">
//             COMPETE IN LIVE ESPORTS TOURNAMENTS. WIN REAL REWARDS.
//           </p>
//         </div>
//       </section>

//       {/* Featured Tournaments Slider Section */}
//       <section className="py-12 bg-esports-light">
//         <div className="container mx-auto px-6 lg:px-16">
//           <FeaturedTournamentSlider tournaments={featuredTournaments} />
//         </div>
//       </section>

//       {/* Live Battles in Progress Section */}
//       <section className="py-16 bg-esports-gradient">
//         <div className="container mx-auto px-6 lg:px-16">
//           <SectionHeader
//             title="LIVE BATTLES IN PROGRESS"
//             subtitle="Matches are live. Teams are fighting. Watch the action unfold in real time."
//             align="center"
//             accent="green"
//           />

//           {/* Horizontally Scrollable Match Cards */}
//           <div
//             ref={liveBattlesRef}
//             className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {liveMatches.map((match, index) => (
//               <LiveMatchCard 
//                 key={match.id} 
//                 match={match} 
//                 isExpanded={index === expandedMatchIndex}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex items-center justify-center gap-3 mt-8">
//             <button
//               onClick={() => scrollLiveBattles('prev')}
//               className="w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-sm transition-colors text-white"
//               aria-label="Previous"
//             >
//               <HiArrowLeft className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => scrollLiveBattles('next')}
//               className="w-10 h-10 flex items-center justify-center border border-neutral-400 rounded-sm hover:bg-white/20 transition-colors text-neutral-700"
//               aria-label="Next"
//             >
//               <HiArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Tournaments Section */}
//       <section className="py-16 bg-esports-gradient">
//         <div className="container mx-auto px-6 lg:px-16">
//           <SectionHeader
//             title="UPCOMING TOURNAMENTS"
//             subtitle="Train harder. Register faster. Slots are limited—legends are not."
//             align="center"
//             accent="green"
//           />

//           {/* Tournament Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingTournaments.slice(0, 3).map((tournament) => (
//               <TournamentCard key={tournament.id} tournament={tournament} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Built for Real Competitors Section */}
//       <section className="py-16 bg-esports-gradient">
//         <div className="container mx-auto px-6 lg:px-16">
//           <SectionHeader
//             title="BUILT FOR REAL COMPETITORS"
//             align="center"
//             accent="green"
//           />

//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             {/* Features List (Left) */}
//             <div className="flex-1 space-y-6">
//               {esportsFeatures.map((feature) => (
//                 <div key={feature.id} className="flex items-start gap-4">
//                   <div className="feature-icon shrink-0">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-black text-sm uppercase tracking-wide text-neutral-900 mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-neutral-600 text-sm">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Image Placeholder (Right) */}
//             <div className="flex-1">
//               <div className="aspect-video bg-neutral-200 rounded-lg">
//                 {/* Feature image would go here */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-8 bg-esports-gradient">
//         <div className="container mx-auto px-6 lg:px-16">
//           <div className="cta-esports py-12 px-8 md:px-16 text-center">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide mb-4">
//               THE ARENA IS OPEN. ARE YOU READY?
//             </h2>
//             <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
//               Thousands compete. Few dominate. Step in and make your name known.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link
//                 to="/esports/tournaments"
//                 className="btn-esports flex items-center gap-1"
//               >
//                 BROWSE TOURNAMENTS
//                 <FiArrowUpRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 to="/esports/register"
//                 className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-widest font-bold transition rounded-sm cursor-pointer bg-transparent border border-white text-white hover:bg-white/10"
//               >
//                 REGISTER FOR TOURNAMENT
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer variant="light" accent="green" />
//     </div>
//   );
// }

// export default EsportsHome;
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EsportsHome = () => {
  const games = [
    { id: 1, name: "GAME 1", active: false },
    { id: 2, name: "GAME 2", active: false },
    {
      id: 3,
      name: "GAME 3",
      active: true,
      details:
        "Tournament Details\nTournament Details\nTournament Details",
    },
    { id: 4, name: "GAME 4", active: false },
    { id: 5, name: "GAME 5", active: false },
  ];

  const upcomingTournaments = [
    { id: 1, name: "TOURNAMENT NAME", prize: "10k INR", type: "team" },
    { id: 2, name: "TOURNAMENT NAME", prize: "10k INR", type: "solo" },
    { id: 3, name: "TOURNAMENT NAME", prize: "10k INR", type: "team" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#e6f4e6] via-[#d1e8c9] to-[#b7dcae] text-[#1a1a1a]">

<div className="border-t-[4px] border-green-600 bg-[#f3f4f2]">
  <Navbar logoVariant="green" accent="green" />
</div>



      {/* ================= HERO ================= */}
      <section
        className="min-h-[85vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,80,0,0.75),rgba(0,80,0,0.75)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            ENTER THE ARENA
          </h1>
          <p className="text-lg tracking-wide">
            COMPETE IN LIVE ESPORTS TOURNAMENTS. WIN REAL REWARDS.
          </p>
        </div>
      </section>

      {/* ================= FEATURED SLIDER ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#86b96f] to-[#6ea65c] p-12 text-white flex justify-between items-center shadow-lg">
            <div>
              <h3 className="text-4xl font-black uppercase mb-4">
                VALORANT MLEAGUE CHAMPIONSHIP
              </h3>
              <div className="flex gap-10 text-sm">
                <p><strong>Prize Pool:</strong> 50k INR</p>
                <p><strong>Tournament Type:</strong> Open Championship</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link to="/tournament/team/1" className="px-6 py-3 bg-green-800 rounded-lg font-semibold">
                REGISTER →
              </Link>
              <Link to="/tournament/team/1" className="px-6 py-3 border border-white rounded-lg">
                VIEW DETAILS
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <span className="w-3 h-3 bg-black/40 rounded-full"></span>
            <span className="w-3 h-3 bg-black/20 rounded-full"></span>
            <span className="w-3 h-3 bg-black/20 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* ================= LIVE BATTLES ================= */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">

          <h2 className="text-5xl font-black uppercase mb-4">
            LIVE BATTLES IN PROGRESS
          </h2>
          <p className="text-lg text-gray-700 mb-16">
            Matches are live. Teams are fighting.
            <br />
            Watch the action unfold in real time.
          </p>

          <div className="flex justify-center items-end gap-10 flex-wrap lg:flex-nowrap">

            {games.map((game) => {
              const isActive = game.active;

              return (
                <div
                  key={game.id}
                  className={`transition-all duration-300 ${
                    isActive ? "w-64" : "w-44"
                  }`}
                >
                  <div
                    className={`bg-white rounded-3xl shadow-md ${
                      isActive ? "h-72" : "h-56"
                    }`}
                  ></div>

                  {isActive ? (
                    <div className="bg-white p-6 rounded-3xl shadow-lg -mt-16 text-left">
                      <h4 className="text-xl font-black mb-2">
                        {game.name}
                      </h4>
                      <p className="text-sm text-gray-500 whitespace-pre-line mb-4">
                        {game.details}
                      </p>

                      <Link
                        to="/tournament/team/1"
                        className="w-full block text-center py-3 bg-green-700 text-white rounded-lg font-semibold"
                      >
                        WATCH TOURNAMENT →
                      </Link>
                    </div>
                  ) : (
                    <h4 className="mt-4 font-bold text-lg">
                      {game.name}
                    </h4>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <button className="px-4 py-2 bg-green-700 text-white rounded-lg">
              ←
            </button>
            <button className="px-4 py-2 border border-green-700 rounded-lg">
              →
            </button>
          </div>
        </div>
      </section>

      {/* ================= UPCOMING ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-black uppercase mb-4">
            UPCOMING TOURNAMENTS
          </h2>
          <p className="mb-16 text-lg text-gray-700">
            Train harder. Register faster. Slots are limited—legends are not.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white rounded-3xl shadow-md text-left">
                <div className="h-44 bg-gray-200 rounded-t-3xl"></div>

                <div className="p-6">
                  <h4 className="text-lg font-black mb-2">
                    {tournament.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1">
                    Prize Pool: {tournament.prize}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Limited Slots Available
                  </p>

                  <Link
                    to={`/tournament/${tournament.type}/${tournament.id}`}
                    className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold"
                  >
                    VIEW DETAILS →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-5xl font-black uppercase mb-12">
              BUILT FOR REAL COMPETITORS
            </h2>

            {[
              {
                title: "FAIR PLAY GUARANTEED",
                desc: "Strict admin moderation ensures skill decides the winner.",
              },
              {
                title: "SMART BRACKETS & MATCHMAKING",
                desc: "Auto-generated brackets. Balanced seeding. Zero chaos.",
              },
              {
                title: "TOURNAMENT-GRADE EXPERIENCE",
                desc: "From registration to finals, every match feels professional.",
              },
              {
                title: "REAL REWARDS. REAL WINS.",
                desc: "Cash prizes and bragging rights delivered securely.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 mb-8">
                <div className="w-4 h-4 bg-green-700 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-black mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[450px] bg-gray-200 rounded-3xl shadow-md"></div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#7fb66c] to-[#6ea65c] rounded-3xl p-16 text-center text-white shadow-xl">

            <h2 className="text-5xl font-black uppercase mb-6">
              THE ARENA IS OPEN. ARE YOU READY?
            </h2>

            <p className="mb-8 text-lg opacity-90">
              Thousands compete. Few dominate. Step in and make your name known.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                to="/tournaments"
                className="px-8 py-3 bg-green-800 rounded-lg font-semibold"
              >
                BROWSE TOURNAMENTS →
              </Link>

              <Link
                to="#"
                className="px-8 py-3 border border-white rounded-lg"
              >
                REGISTER FOR TOURNAMENT
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer accent="green" />
    </div>
  );
};

export default EsportsHome;
