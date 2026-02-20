// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Page imports
// import GamePostPage from "./pages/gamepost/GamePostPage";
// import EsportsHome from "./pages/esports/EsportsHome";
// import Blog from "./pages/blog/Blog";
// import WriteBlog from "./pages/blog/WriteBlog";
// import Career from "./pages/career/Career";
// import AboutHub from "./pages/about/AboutHub";
// import About from "./pages/about/About";
// import GamePostCollection from "./pages/gamepost/GamePostCollection";

// // Admin imports
// import AdminLayout from "./admin/components/AdminLayout";
// import BasicInfo from "./admin/pages/BasicInfo";
// import StoryContent from "./admin/pages/StoryContent";
// import Media from "./admin/pages/Media";
// import QuickOverview from "./admin/pages/QuickOverview";
// import SystemRequirements from "./admin/pages/SystemRequirements";
// import StoreExtras from "./admin/pages/StoreExtras";
// import ReviewsCommunity from "./admin/pages/ReviewsCommunity";
// import MoreGames from "./admin/pages/MoreGames";
// import SocialCommunity from "./admin/pages/SocialCommunity";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Main Website */}
//         <Route path="/" element={<GamePostPage />} />
//         <Route path="/esports" element={<EsportsHome />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/write-blog" element={<WriteBlog />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/about" element={<AboutHub />} />
//         <Route path="/about/details" element={<About />} />
//         <Route path="/games" element={<GamePostCollection />} />

//         {/* Admin Layout (Nested Routing) */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<BasicInfo />} />
//           <Route path="story" element={<StoryContent />} />
//           <Route path="media" element={<Media />} />
//           <Route path="quick" element={<QuickOverview />} />
//           <Route path="system" element={<SystemRequirements />} />
//           <Route path="store" element={<StoreExtras />} />
//           <Route path="reviews" element={<ReviewsCommunity />} />
//           <Route path="more" element={<MoreGames />} />
//           <Route path="social" element={<SocialCommunity />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import GamePostPage from "./pages/gamepost/GamePostPage";
import EsportsHome from "./pages/esports/EsportsHome";
import Blog from "./pages/blog/Blog";
import WriteBlog from "./pages/blog/WriteBlog";
import Career from "./pages/career/Career";
import AboutHub from "./pages/about/AboutHub";
import About from "./pages/about/About";
import GamePostCollection from "./pages/gamepost/GamePostCollection";

// Admin
import AdminLayout from "./admin/components/AdminLayout";
import BasicInfo from "./admin/pages/BasicInfo";
import StoryContent from "./admin/pages/StoryContent";
import Media from "./admin/pages/Media";
import QuickOverview from "./admin/pages/QuickOverview";
import SystemRequirements from "./admin/pages/SystemRequirements";
import StoreExtras from "./admin/pages/StoreExtras";
import ReviewsCommunity from "./admin/pages/ReviewsCommunity";
import MoreGames from "./admin/pages/MoreGames";
import SocialCommunity from "./admin/pages/SocialCommunity";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<GamePostPage />} />
        <Route path="/esports" element={<EsportsHome />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/write-blog" element={<WriteBlog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutHub />} />
        <Route path="/about/details" element={<About />} />
        <Route path="/games" element={<GamePostCollection />} />
        <Route path="/game-collection" element={<GamePostCollection />} />

        {/* Admin Routes (Correct Way) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<BasicInfo />} />
          <Route path="story" element={<StoryContent />} />
          <Route path="media" element={<Media />} />
          <Route path="quick" element={<QuickOverview />} />
          <Route path="system" element={<SystemRequirements />} />
          <Route path="store" element={<StoreExtras />} />
          <Route path="reviews" element={<ReviewsCommunity />} />
          <Route path="more" element={<MoreGames />} />
          <Route path="social" element={<SocialCommunity />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;