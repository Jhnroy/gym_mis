import React from "react";
import { NavLink } from "react-router-dom";

// Props type
type AdminSidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Clients", path: "/admin/clients" },
    { name: "Attendance", path: "/admin/attendance" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 h-screen bg-gray-900 text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-wide">
            Admin Panel
          </h1>

          <button
            onClick={toggleSidebar}
            className="md:hidden text-xl"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-3 space-y-1">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm font-semibold transition">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
