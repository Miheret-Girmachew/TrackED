"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<string>('Institution');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Header */}
    <Header/>

      {/* Content */}
      <main className="flex flex-grow items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-xl shadow-lg w-full max-w-4xl">
          {/* Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/Images/login.svg"
              alt="Login Illustration"
              width={500}
              height={500}
              className="animate-fade-in"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col justify-center px-6 py-8 space-y-8 w-full">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">Welcome back!</h2>
              <p className="text-lg text-gray-600">Log in to your account and continue exploring.</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
                </button>
              </div>
              <select
    id="userType"
    value={type}
    onChange={(e) => setType(e.target.value)}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    aria-label="Account Type"
  >
    <option value="Institution">Institution</option>
    <option value="Employer">Employer</option>
    <option value="Personal">Personal</option>
  </select>
            </div>

            {/* Login Button */}
            <button className="w-full py-3 bg-black text-white font-bold rounded-md hover:from-purple-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Login
            </button>

            {/* Signup Link */}
            <p className="text-center text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#ffc100] font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
