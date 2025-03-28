// components/JobCard.tsx
'use client';
import Image from 'next/image';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
  logo?: string;
  onClick?: () => void; // Add onClick prop
}

const JobCard: React.FC<JobCardProps> = ({ title, company, salary, location, type, logo, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 p-5 relative cursor-pointer"
      onClick={onClick} // Call onClick function when clicked
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{salary}</p>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <FaBuilding className="mr-1" />
        <span>{company}</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <FaMapMarkerAlt className="mr-1" />
        <span>{location}</span>
      </div>
      <div className="text-gray-500 text-sm">{type}</div>
      <button
        aria-label="Apply"
        className="absolute bottom-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-200 text-xs"
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;