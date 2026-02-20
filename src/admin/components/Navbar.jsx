// // import { FiUser } from "react-icons/fi";

// // const Navbar = () => {
// //   return (
// //     <div className="admin-navbar">
// //       <div className="logo">GZONSPHERE</div>

// //       <div className="nav-center">
// //         <span>GAME</span>
// //         <span>POST</span>
// //         <span>ADMIN</span>
// //       </div>

// //       <FiUser size={20} />
// //     </div>
// //   );
// // };

// // export default Navbar;
// const Navbar = () => {
//   return (
//     <div className="h-20 border-b border-[#222] flex items-center justify-between px-10 bg-[#0A0A0A]">
//       <h1 className="font-bold tracking-widest text-lg">
//         GZONSPHERE
//       </h1>

//       <div className="flex gap-8 text-xs uppercase tracking-widest">
//         <span>Game</span>
//         <span>Post</span>
//         <span>Admin</span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
const Navbar = () => {
  return (
    <div className="h-20 bg-[#f8f8f8] border-b border-neutral-300 px-16 flex items-center justify-between">
      <div className="text-3xl font-extrabold tracking-wider text-orange-500">
        GZONSPHERE
      </div>

      <div className="flex items-center gap-10 text-sm font-semibold tracking-widest uppercase">
        <span>Game</span>
        <span>Post</span>
        <span>Admin</span>

        <div className="w-9 h-9 rounded-full bg-neutral-400"></div>
      </div>
    </div>
  );
};

export default Navbar;