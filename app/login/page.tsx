"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<string>('Institution');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <div className="flex items-center space-x-2 px-16 py-4 border-b border-gray-300 shadow-md bg-white">
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

      <div className="flex flex-grow items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl">
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/Images/login.svg" 
              alt="Login Illustration"
              width={500}
              height={500}
            />
          </div>

      
          <div className="flex flex-col justify-center px-6 py-8 space-y-6 w-full">
            <div>
              <h2 className="text-3xl font-bold">Welcome back!</h2>
              <p className="text-gray-600">Log in to your account</p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="What is your e-mail?"
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

              <label htmlFor="userType" className="sr-only">Select Account Type</label>
              <select
                id="userType"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Institution">Institution</option>
                <option value="Employer">Employer</option>
                <option value="Personal">Personal</option>
              </select>
            </div>



          
            <button className="w-full py-2 bg-[#0d0c22] text-white rounded-md hover:bg-blue-700 focus:outline-none">
              Login
            </button>

          
            <p className="text-center text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#efb034] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
