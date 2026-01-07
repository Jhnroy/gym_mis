import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust for fixed navbar if needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false); // close mobile menu after click
    }
  };

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  

  type GymHour = {open: string; close: string}| null;
  type GymHours = { [key: number]: GymHour };
  // Gym schedule
  const gymHours: GymHours = {
  0: null, // Sunday closed
  1: { open: "06:00", close: "22:00" },
  2: { open: "06:00", close: "22:00" },
  3: { open: "06:00", close: "22:00" },
  4: { open: "06:00", close: "22:00" },
  5: { open: "06:00", close: "22:00" },
  6: { open: "08:00", close: "20:00" }, // Saturday
};


  const isGymOpen = (): boolean => {
  const day = currentTime.getDay(); // 0-6
  const hours: GymHour = gymHours[day]; // use GymHour type
  if (!hours) return false; // closed day

  // parse open and close times
  const [openHour, openMin] = hours.open.split(":").map(Number);
  const [closeHour, closeMin] = hours.close.split(":").map(Number);

  const openTime = new Date(currentTime);
  openTime.setHours(openHour, openMin, 0, 0);

  const closeTime = new Date(currentTime);
  closeTime.setHours(closeHour, closeMin, 0, 0);

  return currentTime >= openTime && currentTime <= closeTime;
};




  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-xl font-bold text-blue-600">
            GymMIS
          </h1>

          {/* NAV LINKS - Desktop */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => handleScroll("home")} className="hover:text-blue-600">Home</button>
            <button onClick={() => handleScroll("about")} className="hover:text-blue-600">About</button>
            <button onClick={() => handleScroll("location")} className="hover:text-blue-600">Location</button>
            <button onClick={() => handleScroll("contact")} className="hover:text-blue-600">Contact</button>
          </nav>

          {/* HAMBURGER MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* AUTH BUTTONS */}
          <div className="hidden md:flex gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col px-4 py-2 gap-2">
              <button onClick={() => handleScroll("home")} className="hover:text-blue-600 text-left">Home</button>
              <button onClick={() => handleScroll("about")} className="hover:text-blue-600 text-left">About</button>
              <button onClick={() => handleScroll("location")} className="hover:text-blue-600 text-left">Location</button>
              <button onClick={() => handleScroll("contact")} className="hover:text-blue-600 text-left">Contact</button>
              <Link
                to="/login"
                className="px-4 py-2 text-sm rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex-1 flex items-center justify-center px-4 py-32 md:py-16 mt-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Manage Your Gym Smarter
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A modern Gym Management Information System that helps you
              track members, attendance, payments, and supplements —
              all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border border-gray-300 px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition"
              >
                Already a Member?
              </Link>
            </div>

            {/* GYM HOURS */}
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-gray-800">
              <h3 className="font-semibold mb-2">Gym Hours</h3>
              <p>
                Today: {currentTime.toLocaleDateString(undefined, { weekday: "long" })}
              </p>
              <p>
                Time: {currentTime.toLocaleTimeString()}
              </p>
              <p className="mt-1 font-bold">
                Status:{" "}
                <span className={isGymOpen() ? "text-green-600" : "text-red-600"}>
                  {isGymOpen() ? "Open Now" : "Closed Now"}
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Regular Hours: Mon-Fri 06:00-22:00, Sat 08:00-20:00, Sun Closed
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Why Choose GymMIS?
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Easy member management</li>
              <li>Attendance tracking</li>
              <li>Payment & subscription records</li>
              <li>Supplement inventory</li>
              <li>Mobile-friendly dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-white py-16 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            About GymMIS
          </h3>
          <p className="text-gray-600 leading-relaxed">
            GymMIS is built to simplify gym operations for owners, staff,
            and members. Whether you're managing a small fitness center
            or a growing gym, GymMIS helps you stay organized, efficient,
            and connected.
          </p>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section
        id="location"
        className="bg-gray-50 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Location
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We are located at 123 Fitness St, Wellness City. Come visit us!
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-white py-16 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Contact Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Email: info@gymmis.com | Phone: +123 456 7890
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} GymMIS. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
