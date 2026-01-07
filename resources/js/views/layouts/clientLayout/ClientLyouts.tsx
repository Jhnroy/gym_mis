import { Outlet } from "react-router-dom";
import { useState } from "react";
import ClientSidebar from "../../components/clientSidebar";

const ClientLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <ClientSidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 min-h-screen bg-gray-100">
        {/* MOBILE HEADER */}
        <header className="md:hidden bg-white shadow p-4 flex items-center">
          <button
            className="text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className="ml-4 font-semibold">Client Panel</h2>
        </header>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
