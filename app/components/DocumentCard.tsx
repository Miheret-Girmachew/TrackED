import { FC } from 'react';
import Image from 'next/image';
import { FiDownload, FiShare2, FiEyeOff } from 'react-icons/fi';

interface CertificateCardProps {
  title: string;
  institution: string;
  gpa: number;
  status: string;
  statusColor: string;
  imageSrc: string;
  aboutText: string;
}

const CertificateCard: FC<CertificateCardProps> = ({
  title,
  institution,
  gpa,
  status,
  statusColor,
  imageSrc,
  aboutText,
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <div className="flex items-start">
        <Image src="/Images/certificate.svg" alt="Certificate" width={80} height={100} className="rounded-md" />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{institution}</p>
          <div className="flex space-x-4 mt-2">
  <div className="text-center bg-gray-100 p-4 rounded-lg">
    <p className="text-xs text-gray-500">GPA</p>
    <p className="text-lg font-semibold">{gpa.toFixed(2)}</p>
    <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
  </div>
  <div className="text-center bg-gray-100 p-4 rounded-lg">
    <p className="text-xs text-gray-500">STATUS</p>
    <p className={`text-lg font-semibold ${statusColor}`}>{status}</p>
  </div>


          </div>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            className="text-gray-400 hover:text-gray-600"
            aria-label="Download certificate"
          >
            <FiDownload size={20} />
          </button>
          <button
            className="text-gray-400 hover:text-gray-600"
            aria-label="Share certificate"
          >
            <FiShare2 size={20} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold">About</p>
        <p className="text-sm text-gray-600">{aboutText}</p>
      </div>
      <div className="flex justify-end mt-2">
        <button
          className="text-gray-400 hover:text-gray-600"
          aria-label="Hide certificate"
        >
          <FiEyeOff size={20} />
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
