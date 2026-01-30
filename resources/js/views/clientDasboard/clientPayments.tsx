import React from "react";

const ClientPayments = () => {
  const payments = [
    {
      date: "Jan 05, 2026",
      description: "Monthly Membership",
      amount: 1200,
      method: "Cash",
      status: "Paid",
    },
    {
      date: "Dec 05, 2025",
      description: "Monthly Membership",
      amount: 1200,
      method: "GCash",
      status: "Paid",
    },
    {
      date: "Nov 05, 2025",
      description: "Monthly Membership",
      amount: 1200,
      method: "Cash",
      status: "Overdue",
    },
  ];

  const totalPaid = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Payment History
        </h1>

        <button className="mt-3 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Pay Now
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-lg font-bold text-green-600">
            ₱{totalPaid.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Last Payment</p>
          <p className="text-lg font-bold text-gray-900">
            {payments[0]?.date || "N/A"}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Payment Status</p>
          <p className="text-lg font-bold text-blue-600">
            {payments[0]?.status || "N/A"}
          </p>
        </div>
      </div>

      {/* MOBILE VIEW (CARDS) */}
      <div className="grid gap-4 md:hidden">
        {payments.map((payment, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold">{payment.description}</p>
            <p className="text-sm text-gray-500">{payment.date}</p>

            <div className="flex justify-between text-sm mt-2">
              <span>Amount:</span>
              <span className="font-semibold">
                ₱{payment.amount.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Method:</span>
              <span>{payment.method}</span>
            </div>

            <span
              className={`inline-block mt-3 px-3 py-1 text-xs rounded-full font-medium
                ${
                  payment.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {payment.status}
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
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center">Amount</th>
              <th className="p-3 text-center">Method</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{payment.date}</td>
                <td className="p-3">{payment.description}</td>
                <td className="p-3 text-center">
                  ₱{payment.amount.toLocaleString()}
                </td>
                <td className="p-3 text-center">{payment.method}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
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

      {/* PAYMENT NOTICE */}
      <div className="mt-6 bg-blue-100 p-4 rounded-xl text-blue-900">
        <h3 className="font-semibold mb-2">Payment Reminder</h3>
        <p className="text-sm">
          Please settle overdue payments to avoid membership suspension.
        </p>
      </div>
    </div>
  );
};

export default ClientPayments;
