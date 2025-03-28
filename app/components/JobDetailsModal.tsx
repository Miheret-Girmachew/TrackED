// components/JobDetailsModal.tsx
'use client';

import Image from 'next/image';
import { FaTimes, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

interface Job {
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
  logo?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  whatWeOffer: string[];
}

interface JobDetailsModalProps {
  job: Job;
  closeModal: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, closeModal }) => {
  const [formData, setFormData] = useState({
    professionalTitle: '',
    email: '',
    phone: '',
    portfolioLink: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-3/4 md:w-2/3 lg:w-1/2 shadow-lg rounded-xl bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-between items-center mb-4">
            <button onClick={closeModal} aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaTimes />
            </button>
            <h3 className="text-xl leading-6 font-semibold text-gray-900">{job.title}</h3>
            <div></div>{/* Empty div to balance layout */}
          </div>
          <div className="px-7 py-5 overflow-y-auto max-h-[600px]">
            {/* Job Details */}
            <div className="flex items-center mb-2">
              {job.logo && (
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
              )}
              <div>
                <div className="text-lg font-semibold text-gray-800">{job.company}</div>
                <div className="text-gray-600 text-sm">
                  <FaMapMarkerAlt className="inline-block mr-1" />
                  {job.location}
                </div>
                <div className="text-gray-600 text-sm">
                  {job.salary} - {job.type}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold">About {job.company}</h4>
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold">Job Description</h4>
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold">Key Responsibilities</h4>
              <ul className="list-disc pl-5 text-gray-700">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold">Qualifications</h4>
              <ul className="list-disc pl-5 text-gray-700">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-gray-700 font-semibold">What We Offer</h4>
              <ul className="list-disc pl-5 text-gray-700">
                {job.whatWeOffer.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>

            {/* How to Apply */}
            <div>
              <h4 className="text-gray-700 font-semibold">How to Apply</h4>
              <p className="text-gray-700 mb-2">
                Interested candidates should fill out the form below and hit the submit
                button. We will reach you through your email.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="professionalTitle" className="block text-sm font-medium text-gray-700">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    name="professionalTitle"
                    id="professionalTitle"
                    placeholder="Doctor"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="0900423958"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700">
                    Portfolio Link
                  </label>
                  <input
                    type="url"
                    name="portfolioLink"
                    id="portfolioLink"
                    placeholder="www.someone.me"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200"
                    aria-label="Submit Application"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Buttons */}
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mr-3"
              onClick={closeModal}
              aria-label="Cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;