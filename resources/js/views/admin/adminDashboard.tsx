import React from "react";

type Stats = {
  totalClients: number;
  activeMembers: number;
  todayAttendance: number;
  totalRevenue: number;
};

const AdminDashboard: React.FC = () => {
  const stats: Stats = {
    totalClients: 124,
    activeMembers: 98,
    todayAttendance: 23,
    totalRevenue: 58200,
  };

  const recentPayments = [
    { name: "John Doe", amount: 1200, date: "Feb 05, 2026", status: "Paid" },
    { name: "Maria Cruz", amount: 1000, date: "Feb 03, 2026", status: "Pending" },
    { name: "Kevin Santos", amount: 1500, date: "Feb 01, 2026", status: "Paid" },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <span className="text-sm text-gray-500 mt-2 md:mt-0">
          Overview of gym performance
        </span>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Clients</p>
          <p className="text-2xl font-bold">{stats.totalClients}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Active Members</p>
          <p className="text-2xl font-bold text-green-600">
            {stats.activeMembers}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Today's Attendance</p>
          <p className="text-2xl font-bold text-blue-600">
            {stats.todayAttendance}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-purple-600">
            ₱{stats.totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Add Client
        </button>

        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Record Payment
        </button>

        <button className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
          View Reports
        </button>
      </div>

      {/* RECENT PAYMENTS */}
      <div className="bg-white p-4 rounded-xl shadow overflow-x-auto mb-8">
        <h2 className="font-semibold mb-3 text-gray-900">
          Recent Payments
        </h2>

        <table className="w-full text-sm min-w-125">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-center">Amount</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentPayments.map((payment, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{payment.name}</td>
                <td className="p-3 text-center">
                  ₱{payment.amount.toLocaleString()}
                </td>
                <td className="p-3 text-center">{payment.date}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ANNOUNCEMENT */}
      <div className="bg-yellow-100 p-4 rounded-xl text-yellow-900">
        <h3 className="font-semibold mb-1">Admin Notice</h3>
        <p className="text-sm">
          Membership renewal campaign is ongoing. Encourage members to renew early.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
