import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Assets
import { images } from '../../assets/assets';

function AboutHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar logoVariant="blue" loginVariant="blue" isDark={false} accent="blue" />

      {/* Hero Section with Dark Background */}
      <section className="relative bg-[#1a3a5a] overflow-hidden">
        {/* Diagonal Stripes Background Decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-[#2a4a6a] to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/3 w-24 h-full bg-gradient-to-b from-[#2a4a6a] to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/2 w-16 h-full bg-gradient-to-b from-[#2a4a6a] to-transparent transform -skew-x-12"></div>
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-[#3a6a8a] opacity-50"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-[#3a6a8a] opacity-50"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-[#3a6a8a] opacity-50"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#3a6a8a] opacity-50"></div>
        
        {/* Side Decorations */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="w-6 h-6 border border-[#3a6a8a] opacity-50"></div>
          <div className="w-6 h-6 bg-[#3a6a8a] opacity-30"></div>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="w-6 h-6 border border-[#3a6a8a] opacity-50"></div>
          <div className="w-6 h-6 bg-[#3a6a8a] opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 py-16 md:py-20 relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
              ABOUT GZONESPHERE
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              One <span className="text-[#4fc3dc] font-bold">ECOSYSTEM</span>. Built with <span className="font-bold">PURPOSE</span>.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Explore the Ecosystem Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div 
                className="h-44 bg-[#d1d5db]"
              />
              <div className="p-6">
                <h3 className="font-black text-base uppercase tracking-wide text-[#1a3a5a] mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                  EXPLORE THE ECOSYSTEM
                </h3>
                <p className="text-neutral-600 text-sm mb-5 leading-relaxed">
                  Understand the vision, structure, and philosophy behind GzoneSphere.
                </p>
                <Link 
                  to="/about/details" 
                  className="inline-flex items-center gap-2 bg-[#1a4a5e] hover:bg-[#0d3a4e] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  ENTER ABOUT
                  <FiArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Enter the Story Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div 
                className="h-44 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${images.placeholderWhite})`,
                  backgroundColor: '#1a2a3a'
                }}
              />
              <div className="p-6">
                <h3 className="font-black text-base uppercase tracking-wide text-[#1a3a5a] mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                  ENTER THE STORY
                </h3>
                <p className="text-neutral-600 text-sm mb-5 leading-relaxed">
                  Discover how GzoneSphere came to exist — beyond features and platforms.
                </p>
                <Link 
                  to="/about/origin" 
                  className="inline-flex items-center gap-2 border-2 border-[#1a3a5a] text-[#1a3a5a] hover:bg-[#1a3a5a] hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  READ THE ORIGIN
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-10">
            <p className="text-white/90 text-lg italic font-light">
              Two paths. One system.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="light" accent="blue" />
    </div>
  );
}

export default AboutHub;
