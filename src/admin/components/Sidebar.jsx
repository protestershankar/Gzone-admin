


// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const base =
//     "block w-full px-4 py-3 text-xs uppercase tracking-widest rounded-md transition";

//   return (
//     <div className="w-64 min-h-screen bg-black border-r border-gray-800 p-6 flex flex-col gap-2">
//       <NavLink to="/admin" end className={base}>
//         Basic Game Info
//       </NavLink>

//       <NavLink to="/admin/story" className={base}>
//         Story & Content
//       </NavLink>

//       <NavLink to="/admin/media" className={base}>
//         Media
//       </NavLink>

//       <NavLink to="/admin/quick" className={base}>
//         Quick Overview
//       </NavLink>

//       <NavLink to="/admin/system" className={base}>
//         System Requirements
//       </NavLink>

//       <NavLink to="/admin/store" className={base}>
//         Store & Extras
//       </NavLink>

//       <NavLink to="/admin/reviews" className={base}>
//         Reviews & Community
//       </NavLink>

//       <NavLink to="/admin/more" className={base}>
//         More Games
//       </NavLink>

//       <NavLink to="/admin/social" className={base}>
//         Social & Community
//       </NavLink>
//     </div>
//   );
// };

// export default Sidebar;
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const base =
    "block w-full px-4 py-3 text-[11px] tracking-widest uppercase font-semibold transition rounded-md";

  return (
    <div className="w-60 bg-[#e9e9e9] border-r border-neutral-300 pt-10 px-6 flex flex-col gap-3">
      <NavLink
        to="/admin"
        end
        className={({ isActive }) =>
          `${base} ${
            isActive
              ? "bg-orange-500 text-white"
              : "text-neutral-600 hover:text-black"
          }`
        }
      >
        Basic Game Info
      </NavLink>

      <NavLink to="/admin/story" className={base}>
        Story & Content
      </NavLink>

      <NavLink to="/admin/media" className={base}>
        Media
      </NavLink>

      <NavLink to="/admin/quick" className={base}>
        Quick Overview
      </NavLink>

      <NavLink to="/admin/system" className={base}>
        System Requirements
      </NavLink>

      <NavLink to="/admin/store" className={base}>
        Store & Extras
      </NavLink>

      <NavLink to="/admin/reviews" className={base}>
        Reviews & Community
      </NavLink>

      <NavLink to="/admin/more" className={base}>
        More Games
      </NavLink>

      <NavLink to="/admin/social" className={base}>
        Social & Community
      </NavLink>
    </div>
  );
};

export default Sidebar;