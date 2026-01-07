import { Link, useLocation } from "react-router-dom";

interface ClientSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const ClientSidebar = ({ isOpen, toggleSidebar }: ClientSidebarProps) => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/client/dashboard" },
    { name: "Attendance", path: "/client/attendance" },
    { name: "Payments", path: "/client/payments" },
    { name: "Profile", path: "/client/profile" },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
        `}
      >
        {/* LOGO */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">Gym Client</h1>
        </div>

        {/* NAV LINKS */}
        <nav className="p-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleSidebar}
              className={`
                px-4 py-3 rounded-lg transition
                ${
                  location.pathname === link.path
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* LOGOUT */}
          <button
            className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition"
            onClick={() => console.log("Client logout")}
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default ClientSidebar;
