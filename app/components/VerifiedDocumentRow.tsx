// components/VerifiedDocumentRow.tsx
'use client';
import Image from 'next/image';
import { FaTimes, FaLink } from 'react-icons/fa';

interface VerifiedDocumentRowProps {
    id: string;
    name: string;
    status: 'Accepted' | 'Rejected' | 'Pending';
    owner: string;
    imageUrl: string;
}

const VerifiedDocumentRow: React.FC<VerifiedDocumentRowProps> = ({ id, name, status, owner, imageUrl }) => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded" aria-label={`Select document ${name}`} />
            </td>
           
            <td className="px-4 py-3">{name}</td>
            <td className="px-4 py-3">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'Accepted' ? 'bg-green-100 text-green-800' : status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {status}
                </span>
            </td>
            <td className="px-4 py-3">
                <button className="text-indigo-600 hover:text-indigo-900">View</button>
            </td>
            <td className="px-4 py-3">{owner}</td>
            <td className="px-4 py-3">
                <div className="flex items-center space-x-2">
                    <button className="text-red-600 hover:text-red-900" aria-label="Remove">
                        <FaTimes />
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-900" aria-label="Hide">
                        <FaLink />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default VerifiedDocumentRow;