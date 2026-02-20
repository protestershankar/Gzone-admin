import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f4f4] text-neutral-900">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-[#f4f4f4]">
        <Navbar />

        {/* THIS WRAPPER FIXES DARK STYLE LEAK */}
        <div className="px-16 py-10 bg-[#f4f4f4] min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;