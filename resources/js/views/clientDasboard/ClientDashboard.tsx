import React from "react";

const ClientDashboard = () => {
  const stats = {
    membershipStatus: "Active",
    expirationDate: "Feb 28, 2026",
    remainingDays: 54,
    totalVisits: 32,
  };

  const recentAttendance = [
    { date: "Jan 05, 2026", timeIn: "08:00 AM", timeOut: "10:00 AM" },
    { date: "Jan 04, 2026", timeIn: "09:10 AM", timeOut: "11:00 AM" },
    { date: "Jan 02, 2026", timeIn: "07:45 AM", timeOut: "09:30 AM" },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* HEADER */}
      <h1 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
        Client Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Membership Status</p>
          <p className="text-lg font-bold text-green-600">
            {stats.membershipStatus}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Expiration Date</p>
          <p className="text-lg font-bold text-gray-900">
            {stats.expirationDate}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Remaining Days</p>
          <p className="text-lg font-bold text-gray-900">
            {stats.remainingDays} days
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Visits</p>
          <p className="text-lg font-bold text-gray-900">
            {stats.totalVisits}
          </p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          View Attendance
        </button>

        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          View Payments
        </button>

        <button className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
          Renew Membership
        </button>
      </div>

      {/* RECENT ATTENDANCE */}
      <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
        <h2 className="font-semibold mb-3 text-gray-900">
          Recent Attendance
        </h2>

        <table className="w-full text-sm min-w-[500px] text-gray-800">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-center">Time In</th>
              <th className="p-2 text-center">Time Out</th>
            </tr>
          </thead>
          <tbody>
            {recentAttendance.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.date}</td>
                <td className="p-2 text-center">{item.timeIn}</td>
                <td className="p-2 text-center">{item.timeOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ANNOUNCEMENTS */}
      <div className="mt-6 bg-yellow-100 p-4 rounded-xl text-yellow-900">
        <h3 className="font-semibold mb-2">Announcement</h3>
        <p className="text-sm">
          Gym will be closed on <b>January 10</b> due to maintenance.
        </p>
      </div>
    </div>
  );
};

export default ClientDashboard;
