import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// Components
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import BlogCard from '../../components/BlogCard';
import SectionHeader from '../../components/SectionHeader';
import FilterBar from '../../components/FilterBar';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import GalleryCard from '../../components/GalleryCard';

// Assets & Data
import { galleryImages, categories, sortOptions, images, getAllBlogs } from '../../assets/assets';

function Blog() {
  const navigate = useNavigate();
  
  // State for blogs from localStorage
  const [blogs, setBlogs] = useState([]);
  
  // State for filtering and sorting
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('latest');
  const [recentlyAddedPage, setRecentlyAddedPage] = useState(1);
  const [mostReadPage, setMostReadPage] = useState(1);

  // Refs for horizontal scroll
  const galleryRef = useRef(null);

  // Fetch all blogs (static + user-created) on mount
  useEffect(() => {
    const allBlogs = getAllBlogs();
    // Ensure each blog has an image reference
    const blogsWithImages = allBlogs.map((blog) => ({
      ...blog,
      image: blog.image || images.placeholderWhite,
    }));
    setBlogs(blogsWithImages);
  }, []);

  // Filter and sort logic
  const filteredPosts = blogs.filter((post) => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (selectedSort) {
      case 'popular':
        return (b.likes || 0) - (a.likes || 0);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'latest':
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  // Get most read posts (by likes)
  const mostReadPosts = [...blogs].sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 6);

  // Recently added posts (by date - newest first)
  const recentPosts = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  // Gallery scroll handlers
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 320;
      galleryRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF9E7]">
      {/* Navbar */}
      <Navbar logoVariant="yellow" loginVariant="yellow" isDark={false} />

      {/* Hero Section */}
      <Hero
        backgroundImage={images.placeholderWhite}
        title="BLOGS & GUIDES"
        subtitle="Insights, reviews, and expert content connected to games, platforms, and competitive play on GzoneSphere."
      />

      {/* Filter/Sort Bar Section */}
      <section className="bg-[#FEF9E7]">
        <div className="container mx-auto px-6 lg:px-16">
          <FilterBar
            categories={categories}
            sortOptions={sortOptions}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSelectedSort}
          />
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="bg-[#FEF9E7] py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <SectionHeader
            title="RECENTLY ADDED"
            subtitle="Insights, updates, and guides connected to popular games and genres."
            align="center"
          />

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                description={post.description}
                likes={post.likes}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={recentlyAddedPage}
            totalPages={3}
            onPageChange={setRecentlyAddedPage}
            variant="arrows-only"
          />
        </div>
      </section>

      {/* Most Read Section */}
      <section className="bg-[#FEF9E7] py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <SectionHeader
            title="MOST READ BLOG & GUIDES"
            showNavigation
            onPrev={() => setMostReadPage((p) => Math.max(1, p - 1))}
            onNext={() => setMostReadPage((p) => Math.min(3, p + 1))}
            align="left"
          />

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostReadPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                description={post.description}
                likes={post.likes}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Have Something Worth Sharing? */}
      <section className="bg-neutral-100 py-12 my-8">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-neutral-900 mb-3">
                HAVE SOMETHING WORTH SHARING?
              </h2>
              <p className="text-neutral-600 text-sm max-w-lg">
                Write guides, reviews, or analysis for the GzoneSphere community and build your reputation.
              </p>
            </div>
            <button
              onClick={() => navigate('/write-blog')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0 cursor-pointer"
            >
              WRITE A BLOG
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Game Gallery Section */}
      <section className="bg-[#FEF9E7] py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-neutral-900">
              GAME GALLERY
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollGallery('prev')}
                className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors text-neutral-700"
                aria-label="Previous"
              >
                <HiArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollGallery('next')}
                className="w-10 h-10 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors text-white"
                aria-label="Next"
              >
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Gallery */}
          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((item) => (
              <GalleryCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="light" accent="yellow" />
    </div>
  );
}

export default Blog;
