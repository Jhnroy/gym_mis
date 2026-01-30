import React from "react";

const ClientProfile = () => {
  const client = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    membership: "Premium",
    joinDate: "Jan 01, 2025",
    profilePic:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-gray-800">
      {/* HEADER */}
      <h1 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
        {/* PROFILE PIC */}
        <div className="flex justify-center md:block">
          <img
            src={client.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-blue-600"
          />
        </div>

        {/* PROFILE DETAILS */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <p className="font-medium text-gray-900">{client.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium text-gray-900">{client.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium text-gray-900">{client.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Membership</p>
              <p className="font-medium text-gray-900">{client.membership}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Join Date</p>
              <p className="font-medium text-gray-900">{client.joinDate}</p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* NOTES SECTION */}
      <div className="mt-6 bg-yellow-100 p-4 rounded-xl text-yellow-900">
        <h3 className="font-semibold mb-2">Membership Note</h3>
        <p className="text-sm">
          Your premium membership allows unlimited access to all gym facilities and classes.
        </p>
      </div>
    </div>
  );
};

export default ClientProfile;
