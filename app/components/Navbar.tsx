"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const user = {
    firstName: "Jessica",
    lastName: "Taylor",
  };

  const userInitials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image
          src="/Images/TrackedLogo.svg"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
          priority
        />
        <span className="text-lg font-bold text-gray-800">TrackED</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" passHref>
          <span
            className={`cursor-pointer ${
              activeTab === "Home" ? "text-yellow-500" : "text-gray-700"
            } hover:underline`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </span>
        </Link>
        <Link href="/jobs" passHref>
          <span
            className={`cursor-pointer ${
              activeTab === "Jobs" ? "text-yellow-500" : "text-gray-700"
            } hover:underline`}
            onClick={() => setActiveTab("Jobs")}
          >
            Jobs
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-[#ffc100] text-white font-semibold px-4 py-2 rounded-full">
          Upgrade
        </button>
        <button
          aria-label="Notifications"
          className="text-gray-700 hover:text-blue-600"
        >
          <i className="fas fa-bell"></i>
        </button>
        <button
          aria-label="Messages"
          className="text-gray-700 hover:text-blue-600"
        >
          <i className="fas fa-envelope"></i>
        </button>
        <div className="relative">
          <button
            aria-label="User Profile"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 text-white font-bold"
          >
            {userInitials}
          </button>
        </div>
        <button
          aria-label="Logout"
          className="text-gray-700 hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
