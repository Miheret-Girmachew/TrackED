// components/ProposalCard.tsx
import Image from 'next/image';
import { FaEnvelope, FaLink, FaTrash, FaStar } from 'react-icons/fa';

interface ProposalCardProps {
    name: string;
    title: string;
    phone: string;
    email: string;
    starred: boolean;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ name, title, phone, email, starred }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="relative">
            
                {starred && <FaStar className="absolute top-0 right-0 text-yellow-500" />}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">{name}</h3>
            <p className="text-gray-600 text-sm">{title}</p>

            <div className="flex justify-center space-x-3 mt-3">
                <a href={`mailto:${email}`} className="text-gray-500 hover:text-indigo-600 transition duration-200">
                    <FaEnvelope size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition duration-200">
                    <FaLink size={20} />
                </a>
                <button className="text-gray-500 hover:text-red-600 transition duration-200" aria-label="Remove">
                    <FaTrash size={20} />
                </button>
            </div>

            <p className="text-gray-500 text-sm mt-2">{phone}</p>
            <p className="text-gray-500 text-sm">{email}</p>
        </div>
    );
};

export default ProposalCard;