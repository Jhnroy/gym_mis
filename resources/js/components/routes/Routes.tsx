import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Landing & Auth
import LandingPage from "../../views/LandingPage";
import Login from "../../views/Login";
import Signup from "../../views/Signup";

//Admin
import AdminDashboard from "../../views/admin/adminDashboard";
import AdminLayout from "../../views/layouts/adminLayout/AdminLayout";
import AdminClients from "../../views/admin/adminClient";
import AdminAttendance from "../../views/admin/adminAttendance";
import AdminPayments from "../../views/admin/adminPayments";
import AdminReports from "../../views/admin/adminreports";
import AdminSettings from "../../views/admin/adminSettings";

// Client
import ClientDashboard from '../../views/clientDasboard/ClientDashboard'; 
import ClientLayout from '../../views/layouts/clientLayout/ClientLyouts'; 
import ClientProfile from '../../views/clientDasboard/clientProfile'; 
import ClientAttendance from '../../views/clientDasboard/clientAttendance'; 
import ClientPayments from '../../views/clientDasboard/clientPayments';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Client routes with layout */}
      <Route path="/client" element={<ClientLayout />}>
        {/* Default route: /client -> Dashboard */}
        <Route index element={<ClientDashboard />} />
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="attendance" element={<ClientAttendance />} />
        <Route path="payments" element={<ClientPayments />} />
      </Route>

      {/* Admin routes with layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="clients" element={<AdminClients />} />
        <Route path="attendance" element={<AdminAttendance />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      
      {/* Redirect unknown client subpaths to 404 */}
      <Route path="/client/*" element={<Navigate to="/404" replace />} />
      {/* Global 404 page */}
      <Route
        path="/404"
        element={
          <main className="text-center font-bold mt-20">
            <h1 className="text-3xl mb-4">404</h1>
            <p>Webpage not found</p>
          </main>
        }
      />

      {/* Catch-all for any unmatched route */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
