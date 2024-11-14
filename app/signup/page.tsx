"use client";
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  id: string;
  role: 'Institution' | 'Individual';
  photo: File | null;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    id: '',
    role: 'Institution',
    photo: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center space-x-2 px-16 py-4 border-b border-gray-300 rounded-b-lg shadow-md bg-white">
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
        {/* Left Form Section */}
        <div className="flex flex-col justify-center px-6 py-4 space-y-6 w-full">
          <h2 className="text-2xl font-black mb-4">Create an account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block font-bold">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Input first name"
                />
              </div>
              <div className="w-1/2">
                <label className="block font-bold">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Input last name"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="example.email@gmail.com"
              />
            </div>

            <div>
              <label className="block font-bold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Password"
              />
            </div>

            <div>
              <label className="block font-bold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Confirm Password"
              />
            </div>

            <div>
              <label className="block font-bold">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Residential / Institutional ID"
              />
            </div>

            <div>
              <label htmlFor="role" className="block font-bold">Go As</label>
              <select
                name="role"
                id="role" // Added id for accessibility
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="Institution">Institution</option>
                <option value="Individual">Individual</option>
              </select>
            </div>

            <div>
              <label htmlFor="photo" className="block font-bold">Upload photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept=".jpg,.png,.pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg"
                aria-describedby="fileTypeDescription"
              />
              <small id="fileTypeDescription" className="text-gray-500">
                Supported formats: JPG, PNG, PDF
              </small>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0d0c22] text-white py-2 rounded-lg font-semibold"
            >
              Sign up
            </button>
            <p className="text-center font-bold text-sm mt-4">
              Have an account? <a href="/login" className="text-[#ffc100]">Log in</a>
            </p>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/Images/signup.svg"
            alt="Join Us"
            width={500}
            height={500}
          />
        </div>

        </div>

        </div>

      </div>
  
  );
}
