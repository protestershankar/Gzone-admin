// Central Image Imports
// Note: Images that cannot be extracted use placeholderWhite as fallback
import placeholderWhite from './images/placeholderWhite.svg';

// Export all images in a single object
export const images = {
  placeholderWhite,
  // Add more images here as they become available
  // heroBackground: heroBackground,
  // blogImage1: blogImage1,
};

// Dummy Database: Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Open-World Gaming',
    description: 'Exploring how next-gen hardware is pushing the boundaries of open-world game design with larger maps, better AI, and seamless multiplayer integration.',
    image: placeholderWhite, // Replace with actual image when available
    likes: 2453,
    category: 'Industry',
    author: 'Alex Chen',
    date: '2026-02-15',
    readTime: '8 min read',
    highlighted: true,
  },
  {
    id: 2,
    title: 'Top 10 Indie Games to Watch in 2026',
    description: 'From pixel art masterpieces to narrative-driven adventures, these indie titles are set to make waves this year.',
    image: placeholderWhite,
    likes: 1876,
    category: 'Reviews',
    author: 'Sarah Martinez',
    date: '2026-02-12',
    readTime: '6 min read',
    highlighted: true,
  },
  {
    id: 3,
    title: 'Mastering Competitive FPS: Pro Tips',
    description: 'Learn the strategies and techniques used by professional esports players to dominate in competitive shooters.',
    image: placeholderWhite,
    likes: 3211,
    category: 'Guides',
    author: 'Mike Thompson',
    date: '2026-02-10',
    readTime: '12 min read',
    highlighted: false,
  },
  {
    id: 4,
    title: 'The Rise of Cloud Gaming Services',
    description: 'How streaming technology is changing the way we play and what it means for the future of game ownership.',
    image: placeholderWhite,
    likes: 1542,
    category: 'Industry',
    author: 'Emma Wilson',
    date: '2026-02-08',
    readTime: '7 min read',
    highlighted: false,
  },
  {
    id: 5,
    title: 'Building Your Ultimate Gaming Setup',
    description: 'A comprehensive guide to creating the perfect gaming environment, from monitors to peripherals and everything in between.',
    image: placeholderWhite,
    likes: 2187,
    category: 'Hardware',
    author: 'David Park',
    date: '2026-02-05',
    readTime: '10 min read',
    highlighted: false,
  },
  {
    id: 6,
    title: 'Retro Gaming Revival: Why Old is Gold',
    description: 'The nostalgia wave is stronger than ever. Discover why classic games are making a massive comeback.',
    image: placeholderWhite,
    likes: 1893,
    category: 'Culture',
    author: 'Lisa Johnson',
    date: '2026-02-03',
    readTime: '5 min read',
    highlighted: false,
  },
  {
    id: 7,
    title: 'VR Gaming: Beyond the Hype',
    description: 'A realistic look at where virtual reality gaming stands today and what improvements are needed for mainstream adoption.',
    image: placeholderWhite,
    likes: 1234,
    category: 'Technology',
    author: 'James Lee',
    date: '2026-02-01',
    readTime: '9 min read',
    highlighted: false,
  },
  {
    id: 8,
    title: 'The Art of Game Sound Design',
    description: 'How audio engineers create immersive soundscapes that bring virtual worlds to life.',
    image: placeholderWhite,
    likes: 987,
    category: 'Behind the Scenes',
    author: 'Rachel Kim',
    date: '2026-01-28',
    readTime: '6 min read',
    highlighted: false,
  },
];

// Dummy Database: Gallery Images (for horizontal scroll section)
export const galleryImages = [
  {
    id: 1,
    title: 'Cyberpunk City',
    image: placeholderWhite, // Replace with actual image when available
    category: 'Sci-Fi',
  },
  {
    id: 2,
    title: 'Fantasy Realm',
    image: placeholderWhite,
    category: 'RPG',
  },
  {
    id: 3,
    title: 'Racing Thunder',
    image: placeholderWhite,
    category: 'Racing',
  },
  {
    id: 4,
    title: 'Battle Royale',
    image: placeholderWhite,
    category: 'Action',
  },
  {
    id: 5,
    title: 'Space Odyssey',
    image: placeholderWhite,
    category: 'Adventure',
  },
  {
    id: 6,
    title: 'Horror Mansion',
    image: placeholderWhite,
    category: 'Horror',
  },
  {
    id: 7,
    title: 'Sports Arena',
    image: placeholderWhite,
    category: 'Sports',
  },
  {
    id: 8,
    title: 'Puzzle Dimensions',
    image: placeholderWhite,
    category: 'Puzzle',
  },
];

// Categories for filtering
export const categories = [
  'All',
  'Industry',
  'Reviews',
  'Guides',
  'Hardware',
  'Culture',
  'Technology',
  'Behind the Scenes',
];

// Sort options
export const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// Blog types for write blog form
export const blogTypes = [
  'Article',
  'Guide', 
  'Review',
  'Listicle',
  'Opinion',
  'News',
  'Interview',
];

// ============================================
// USER BLOGS - localStorage Integration
// ============================================
const USER_BLOGS_KEY = 'userBlogs';

/**
 * Blog Schema (matches blogPosts structure):
 * {
 *   id: number,           // Date.now() for user blogs
 *   title: string,
 *   description: string,  // Auto-generated from content
 *   image: string,        // placeholderWhite for user blogs
 *   likes: number,        // Starts at 0 for new blogs
 *   category: string,
 *   author: string,
 *   date: string,         // YYYY-MM-DD format
 *   readTime: string,     // Calculated from content length
 *   highlighted: boolean, // false for user blogs
 *   content: string,      // Full blog content (user blogs only)
 *   type: string,         // Blog type (user blogs only)
 * }
 */

/**
 * Get user-created blogs from localStorage
 */
export const getUserBlogs = () => {
  try {
    const stored = localStorage.getItem(USER_BLOGS_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading user blogs:', error);
    return [];
  }
};

/**
 * Save user blogs to localStorage
 */
export const saveUserBlogs = (blogs) => {
  try {
    localStorage.setItem(USER_BLOGS_KEY, JSON.stringify(blogs));
    return true;
  } catch (error) {
    console.error('Error saving user blogs:', error);
    return false;
  }
};

/**
 * Generate description from content (first 150 chars)
 */
export const generateDescription = (content, maxLength = 150) => {
  if (!content) return '';
  const cleaned = content.replace(/\n/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength) + '...';
};

/**
 * Calculate read time based on content length
 * Average reading speed: 200 words per minute
 */
export const calculateReadTime = (content) => {
  if (!content) return '1 min read';
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

/**
 * Format date to YYYY-MM-DD
 */
export const formatDateForStorage = (date = new Date()) => {
  return date.toISOString().split('T')[0];
};

/**
 * Add a new user blog with correct schema
 */
export const addUserBlog = (blogData) => {
  const userBlogs = getUserBlogs();
  
  // Create blog object matching blogPosts schema
  const newBlog = {
    id: Date.now(),
    title: blogData.title,
    description: generateDescription(blogData.content),
    image: placeholderWhite,
    likes: 0,
    category: blogData.category,
    author: blogData.author,
    date: formatDateForStorage(),
    readTime: calculateReadTime(blogData.content),
    highlighted: false,
    // Additional fields for user blogs
    content: blogData.content,
    type: blogData.type,
    isUserCreated: true,
  };
  
  const updatedBlogs = [newBlog, ...userBlogs];
  saveUserBlogs(updatedBlogs);
  return newBlog;
};

/**
 * Get all blogs (static + user-created), sorted by date
 */
export const getAllBlogs = () => {
  const userBlogs = getUserBlogs();
  // Combine static blogPosts with user blogs
  const allBlogs = [...userBlogs, ...blogPosts];
  // Sort by date (newest first)
  return allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// ============================================
// ESPORTS DATA
// ============================================

// Featured Tournaments for Slider
export const featuredTournaments = [
  {
    id: 1,
    title: 'VALORANT Champions Tour',
    game: 'VALORANT',
    prizePool: '$1,000,000',
    date: 'March 15-20, 2026',
    image: placeholderWhite,
    status: 'upcoming',
    participants: 16,
  },
  {
    id: 2,
    title: 'CS2 Major Championship',
    game: 'Counter-Strike 2',
    prizePool: '$2,000,000',
    date: 'April 5-12, 2026',
    image: placeholderWhite,
    status: 'upcoming',
    participants: 24,
  },
  {
    id: 3,
    title: 'League of Legends Worlds',
    game: 'League of Legends',
    prizePool: '$2,500,000',
    date: 'May 1-15, 2026',
    image: placeholderWhite,
    status: 'upcoming',
    participants: 22,
  },
];

// Live Matches
export const liveMatches = [
  {
    id: 1,
    team1: { name: 'Team Liquid', score: 12, logo: placeholderWhite },
    team2: { name: 'Cloud9', score: 10, logo: placeholderWhite },
    game: 'VALORANT',
    tournament: 'VCT Americas',
    viewers: 45200,
    status: 'live',
  },
  {
    id: 2,
    team1: { name: 'Fnatic', score: 1, logo: placeholderWhite },
    team2: { name: 'G2 Esports', score: 1, logo: placeholderWhite },
    game: 'Counter-Strike 2',
    tournament: 'IEM Katowice',
    viewers: 128000,
    status: 'live',
  },
  {
    id: 3,
    team1: { name: 'T1', score: 2, logo: placeholderWhite },
    team2: { name: 'Gen.G', score: 1, logo: placeholderWhite },
    game: 'League of Legends',
    tournament: 'LCK Spring',
    viewers: 89500,
    status: 'live',
  },
  {
    id: 4,
    team1: { name: 'Sentinels', score: 8, logo: placeholderWhite },
    team2: { name: 'NRG', score: 6, logo: placeholderWhite },
    game: 'VALORANT',
    tournament: 'VCT Americas',
    viewers: 32100,
    status: 'live',
  },
  {
    id: 5,
    team1: { name: 'NAVI', score: 14, logo: placeholderWhite },
    team2: { name: 'Vitality', score: 12, logo: placeholderWhite },
    game: 'Counter-Strike 2',
    tournament: 'BLAST Premier',
    viewers: 76800,
    status: 'live',
  },
];

// Upcoming Tournaments
export const upcomingTournaments = [
  {
    id: 1,
    title: 'Apex Legends Global Series',
    game: 'Apex Legends',
    prizePool: '$500,000',
    startDate: 'March 22, 2026',
    registrationDeadline: 'March 15, 2026',
    image: placeholderWhite,
    slots: { total: 40, filled: 32 },
    region: 'Global',
  },
  {
    id: 2,
    title: 'Rocket League Championship',
    game: 'Rocket League',
    prizePool: '$300,000',
    startDate: 'March 28, 2026',
    registrationDeadline: 'March 20, 2026',
    image: placeholderWhite,
    slots: { total: 32, filled: 28 },
    region: 'NA/EU',
  },
  {
    id: 3,
    title: 'Overwatch Champions Series',
    game: 'Overwatch 2',
    prizePool: '$750,000',
    startDate: 'April 1, 2026',
    registrationDeadline: 'March 25, 2026',
    image: placeholderWhite,
    slots: { total: 20, filled: 18 },
    region: 'Global',
  },
];

// Esports Features for "Built for Real Competitors" section
export const esportsFeatures = [
  {
    id: 1,
    title: 'SKILL-BASED MATCHMAKING',
    description: 'Face opponents at your level. Climb the ranks based on real performance.',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'ANTI-CHEAT PROTECTION',
    description: 'Play fair. Our advanced systems ensure competitive integrity.',
    icon: '🛡️',
  },
  {
    id: 3,
    title: 'INSTANT PAYOUTS',
    description: 'Win prizes and receive rewards directly to your account.',
    icon: '💰',
  },
  {
    id: 4,
    title: 'LIVE STATS TRACKING',
    description: 'Monitor your performance with real-time analytics and insights.',
    icon: '📊',
  },
];

// ============================================
// GAME POST DATA
// ============================================
export const gamePostData = {
  title: 'VALORANT',
  subtitle: 'A 5v5 character-based tactical shooter',
  description: 'VALORANT is a free-to-play first-person tactical hero shooter developed and published by Riot Games. The game features a cast of agents with unique abilities, precise gunplay, and strategic team-based gameplay that has captivated millions of players worldwide.',
  storyline: `In the near future, a global event known as First Light has transformed the world. Some individuals, called Radiants, have gained supernatural abilities. A shadowy organization known as Kingdom Corporation has risen to power, controlling a new energy source called Radianite.

You are an agent of the VALORANT Protocol, an international agency assembled to combat threats from around the world. Each agent brings their own unique abilities and backgrounds, united in their mission to protect the world from those who would exploit Radianite for destructive purposes.

The battle lines have been drawn. Choose your side and fight for what you believe in.`,
  author: 'GzoneSphere Editorial',
  updatedDate: 'February 15, 2026',
  releaseDate: 'June 2, 2020',
  developer: 'Riot Games',
  publisher: 'Riot Games',
  platforms: ['PC'],
  tags: ['FPS', 'Tactical', 'Competitive', 'Free-to-Play', 'Multiplayer'],
  heroImage: placeholderWhite,
};
