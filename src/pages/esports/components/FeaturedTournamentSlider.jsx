import { useState, useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

/**
 * Featured Tournament Slider Component
 * Displays featured tournaments in a horizontal slider with auto-scroll
 */
function FeaturedTournamentSlider({ tournaments = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-play slider
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tournaments.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [tournaments.length]);

  // Scroll to current slide
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset auto-play timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tournaments.length);
      }, 5000);
    }
  };

  if (tournaments.length === 0) return null;

  return (
    <div className="relative">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tournaments.map((tournament, index) => (
          <div
            key={tournament.id}
            className="min-w-full snap-center px-4"
          >
            <div
              className="relative h-48 md:h-56 rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #66BB6A 0%, #4CAF50 50%, #43A047 100%)',
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-3">
                    {tournament.name}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-white/90 text-sm">
                    <span>
                      <span className="font-bold">Prize Pool:</span> {tournament.prizePool}
                    </span>
                    <span>
                      <span className="font-bold">Tournament Type:</span> {tournament.type}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  {tournament.registrationOpen && (
                    <Link
                      to={`/esports/register/${tournament.id}`}
                      className="btn-esports flex items-center gap-1"
                    >
                      REGISTER
                      <FiArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    to={`/esports/tournament/${tournament.id}`}
                    className="btn-esports-outline"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {tournaments.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-green-600 w-4'
                : 'bg-neutral-400 hover:bg-neutral-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedTournamentSlider;
