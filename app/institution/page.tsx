// pages/institution.tsx
'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaPlus, FaChevronLeft, FaChevronRight, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import HeaderInstitution from '../components/HeaderInstitution';
import VerifiedDocumentRow from '../components/VerifiedDocumentRow';
import StatisticCard from '../components/StatisticCard';

const inter = Inter({ subsets: ['latin'] });

interface Document {
    id: string;
    name: string;
    status: 'Accepted' | 'Rejected' | 'Pending';
    owner: string;
    imageUrl: string;
}

const Institution: NextPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [documents, setDocuments] = useState<Document[]>([
        { id: '1', name: 'Masters of Business Admins.', status: 'Accepted', owner: 'Teklu Moges', imageUrl: '/certificate-thumbnail.png' },
        { id: '2', name: 'Masters of Computer Science', status: 'Accepted', owner: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '3', name: 'Masters of Business Admins.', status: 'Accepted', owner: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
        { id: '4', name: 'Bachelor\'s Degree in Mechanical Engineering', status: 'Accepted', owner: 'Samuel Mulugeta', imageUrl: '/certificate-thumbnail.png' },
        { id: '5', name: 'Bachelor\'s Degree in Software Engineering', status: 'Accepted', owner: 'Bereket Sintayehu', imageUrl: '/certificate-thumbnail.png' },
        { id: '6', name: 'Masters of Business Admins.', status: 'Accepted', owner: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
        { id: '7', name: 'Masters of Computer Science', status: 'Accepted', owner: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '8', name: 'Masters of Computer Science', status: 'Accepted', owner: 'Teklu Moges', imageUrl: '/certificate-thumbnail.png' },
        { id: '9', name: 'Bachelor\'s Degree in Software Engineering', status: 'Accepted', owner: 'Bereket Sintayehu', imageUrl: '/certificate-thumbnail.png' },
        { id: '10', name: 'Masters of Software Engineering', status: 'Accepted', owner: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '11', name: 'Bachelor\'s Degree in Mechanical Engineering', status: 'Accepted', owner: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
    ]);

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`${inter.className} bg-gray-50`}>
            <HeaderInstitution />

            {/* Header Image Section */}
            <section className="relative bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Addis Ababa Science and Technology University
                        </h1>
                        <div className="w-48 h-2 bg-yellow-400 rounded-full mb-8"></div>
                    </div>
                </div>
            </section>

            {/* Document Statistics Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-3">
                        Documents Statistics
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Quick stats on the number of documents issued, verification requests
                        received and verified documents.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatisticCard
                            title="Total Documents"
                            value="1,499"
                            percentageChange="+ 5%"
                            isIncrease={true}
                        />
                        <StatisticCard
                            title="Verification Requests"
                            value="490"
                            percentageChange="+ 12%"
                            isIncrease={true}
                        />
                        <StatisticCard
                            title="Verified Documents"
                            value="1,350"
                            percentageChange="- 25%"
                            isIncrease={false}
                        />
                    </div>
                </div>
            </section>

            {/* Verified Documents Section */}
            <section className="container mx-auto py-8 px-4">
                {/* Title and Search */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900">Verified Documents</h2>
                        <div className="w-48 h-1 bg-yellow-400 rounded-full mt-1"></div>
                        <p className="text-gray-600 mt-2">2580 Documents</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded-xl py-2 px-8 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search Documents" // Added aria-label for accessibility
                            />
                            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>
                        <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200 flex items-center">
                            <FaPlus className="mr-2" /> Add Documents
                        </button>
                    </div>
                </div>

                {/* Document List Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" aria-label="Select All">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded"  aria-label="Select All"/>
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Document
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Docdetail
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Owner
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredDocuments.map((document) => (
                                <VerifiedDocumentRow
                                    key={document.id}
                                    {...document}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Actions and Pagination */}
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-red-600 transition duration-200 flex items-center">
                            <FaTrash className="mr-1" /> Remove
                        </button>
                        <button className="text-gray-700 hover:text-yellow-600 transition duration-200 flex items-center">
                            <FaEyeSlash className="mr-1" /> Hide
                        </button>
                        <button className="text-gray-700 hover:text-blue-600 transition duration-200 flex items-center">
                            <FaEye className="mr-1" /> Hidden
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Previous">
                            <FaChevronLeft />
                        </button>
                        <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Next">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-8 px-4">
                {/* Title and Search */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900">Verification Requests</h2>
                        <div className="w-48 h-1 bg-yellow-400 rounded-full mt-1"></div>
                        <p className="text-gray-600 mt-2">2580 Documents</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded-xl py-2 px-8 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search Documents" // Added aria-label for accessibility
                            />
                            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>
                        <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200 flex items-center">
                            <FaPlus className="mr-2" /> Add Documents
                        </button>
                    </div>
                </div>

                {/* Document List Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" aria-label="Select All">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded"  aria-label="Select All"/>
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Document
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Docdetail
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Owner
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredDocuments.map((document) => (
                                <VerifiedDocumentRow
                                    key={document.id}
                                    {...document}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Actions and Pagination */}
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-red-600 transition duration-200 flex items-center">
                            <FaTrash className="mr-1" /> Remove
                        </button>
                        <button className="text-gray-700 hover:text-yellow-600 transition duration-200 flex items-center">
                            <FaEyeSlash className="mr-1" /> Hide
                        </button>
                        <button className="text-gray-700 hover:text-blue-600 transition duration-200 flex items-center">
                            <FaEye className="mr-1" /> Hidden
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Previous">
                            <FaChevronLeft />
                        </button>
                        <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Next">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Institution;