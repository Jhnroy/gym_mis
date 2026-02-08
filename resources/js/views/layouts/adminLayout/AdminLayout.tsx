import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import AdminSidebar from '../../components/adminSidebar'

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex">
        <AdminSidebar
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
          <h2 className="ml-4 font-semibold">Admin Panel</h2>
        </header>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout