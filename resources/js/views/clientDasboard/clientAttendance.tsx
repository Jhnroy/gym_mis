import React, { useState } from "react";

const ClientAttendance = () => {
  const [filterMonth, setFilterMonth] = useState<string>("");

  const attendance = [
    { date: "Jan 10, 2026", timeIn: "08:05 AM", timeOut: "10:00 AM", status: "Present" },
    { date: "Jan 09, 2026", timeIn: "09:20 AM", timeOut: "11:00 AM", status: "Late" },
    { date: "Jan 07, 2026", timeIn: "-", timeOut: "-", status: "Absent" },
    { date: "Jan 05, 2026", timeIn: "07:50 AM", timeOut: "09:30 AM", status: "Present" },
  ];

  // Filtered attendance by selected month
  const filteredAttendance = filterMonth
    ? attendance.filter((a) => {
        const [year, month] = filterMonth.split("-");
        const aDate = new Date(a.date);
        return (
          aDate.getFullYear() === Number(year) && aDate.getMonth() + 1 === Number(month)
        );
      })
    : attendance;

  // Stats calculation
  const totalVisits = filteredAttendance.length;
  const presentCount = filteredAttendance.filter((a) => a.status === "Present").length;
  const lateCount = filteredAttendance.filter((a) => a.status === "Late").length;
  const absentCount = filteredAttendance.filter((a) => a.status === "Absent").length;

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Attendance History
        </h1>

        {/* FILTER & EXPORT */}
        <div className="flex gap-2 items-center">
          <input
            type="month"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            Export
          </button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Visits</p>
          <p className="text-lg font-bold text-gray-900">{totalVisits}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Present</p>
          <p className="text-lg font-bold text-green-600">{presentCount}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Late</p>
          <p className="text-lg font-bold text-yellow-600">{lateCount}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Absent</p>
          <p className="text-lg font-bold text-red-600">{absentCount}</p>
        </div>
      </div>

      {/* MOBILE VIEW (CARDS) */}
      <div className="grid gap-4 md:hidden">
        {filteredAttendance.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold">{item.date}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>Time In:</span>
              <span>{item.timeIn}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Time Out:</span>
              <span>{item.timeOut}</span>
            </div>
            <span
              className={`inline-block mt-3 px-3 py-1 text-xs rounded-full font-medium
                ${
                  item.status === "Present"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Late"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW (TABLE) */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm text-gray-800">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Time In</th>
              <th className="p-3 text-center">Time Out</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.date}</td>
                <td className="p-3 text-center">{item.timeIn}</td>
                <td className="p-3 text-center">{item.timeOut}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        item.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Late"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-6 bg-yellow-100 p-4 rounded-xl text-yellow-900">
        <h3 className="font-semibold mb-2">Attendance Note</h3>
        <p className="text-sm">
          Regular attendance helps you track your progress and membership activity.
        </p>
      </div>
    </div>
  );
};

export default ClientAttendance;
