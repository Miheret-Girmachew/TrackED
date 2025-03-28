// pages/employer.tsx
'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import HeaderEmployer from '../components/HeaderEmployer';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useState } from 'react';
import { FaSearch, FaTrash, FaEyeSlash, FaEye, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaRegFileImage } from "react-icons/fa";


interface Document {
    id: string;
    name: string;
    status: 'Accepted' | 'Rejected' | 'Waiting';
    subscription: 'Free' | 'Pro' | 'Inst';
    by: string;
    imageUrl: string;
}

const inter = Inter({ subsets: ['latin'] });

interface FormData {
    companyName: string;
    institutionName: string;
    ownerName: string;
    degreeName: string;
    documentID: string;
    nationalID: string;
    uploadFile: File | null;
}

const EmployerPage: NextPage = () => {
    const [formData, setFormData] = useState<FormData>({
        companyName: 'Buna International Bank', // Initial value
        institutionName: '',
        ownerName: '',
        degreeName: 'Masters of Computer Science', // Initial value
        documentID: '',
        nationalID: '',
        uploadFile: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, uploadFile: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call to verify document)
        console.log('Form submitted:', formData);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [documents, setDocuments] = useState<Document[]>([
        { id: '1', name: 'Masters of Computer Science', status: 'Waiting', subscription: 'Free', by: 'Teklu Moges', imageUrl: '/certificate-thumbnail.png' },
        { id: '2', name: 'Masters of Business Admins.', status: 'Accepted', subscription: 'Free', by: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '3', name: 'Masters of Business Admins.', status: 'Accepted', subscription: 'Pro', by: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
        { id: '4', name: 'Bachelor\'s Degree in Mechanical Engineering', status: 'Accepted', subscription: 'Inst', by: 'AASTU BY Samuel Mulugeta', imageUrl: '/certificate-thumbnail.png' },
        { id: '5', name: 'Bachelor\'s Degree in Software Engineering', status: 'Rejected', subscription: 'Free', by: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
        { id: '6', name: 'Masters of Computer Science', status: 'Accepted', subscription: 'Pro', by: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '7', name: 'Masters of Computer Science', status: 'Waiting', subscription: 'Free', by: 'Teklu Moges', imageUrl: '/certificate-thumbnail.png' },
        { id: '8', name: 'Bachelor\'s Degree in Software Engineering', status: 'Accepted', subscription: 'Inst', by: 'AIT BY Bereket Sintayehu', imageUrl: '/certificate-thumbnail.png' },
        { id: '9', name: 'Masters of Software Engineering', status: 'Accepted', subscription: 'Pro', by: 'Mahfouz Teyib', imageUrl: '/certificate-thumbnail.png' },
        { id: '10', name: 'Bachelor\'s Degree in Mechanical Engineering', status: 'Rejected', subscription: 'Free', by: 'Miheret Girmachew', imageUrl: '/certificate-thumbnail.png' },
    ]);

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`${inter.className} bg-gray-50 min-h-screen`}>
            <HeaderEmployer />

            {/* Banner Section */}
            <section className="relative bg-gray-100 py-16 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Buna International Bank
                        </h1>
                        <div className="w-48 h-1 bg-yellow-400 rounded-full mb-8"></div>
                    </div>
                </div>
            </section>

            {/* Verify Documents Section */}
            <section className="container mx-auto py-12 px-4">
                {/* Tabs */}
                <div className="flex space-x-4 mb-6 justify-center">
                    <button className="text-gray-700 hover:text-blue-600 transition duration-200 font-semibold">
                        New
                    </button>
                    <button className="text-gray-700 hover:text-blue-600 transition duration-200">
                        History
                    </button>
                </div>

                {/* Form */}
                <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Verify New Documents</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    aria-label="Company Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="institutionName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Institution Name
                                </label>
                                <select
                                    name="institutionName"
                                    id="institutionName"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    aria-label="Institution Name"
                                >
                                    <option value="">Please select</option>
                                    <option>University 1</option>
                                    <option>University 2</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ownerName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Owner Name
                                </label>
                                <input
                                    type="text"
                                    name="ownerName"
                                    id="ownerName"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    aria-label="Owner Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="degreeName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Degree Name
                                </label>
                                <input
                                    type="text"
                                    name="degreeName"
                                    id="degreeName"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.degreeName}
                                    onChange={handleChange}
                                    aria-label="Degree Name"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="documentID" className="block text-gray-700 text-sm font-bold mb-2">
                                        Document ID
                                    </label>
                                    <input
                                        type="text"
                                        name="documentID"
                                        id="documentID"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={handleChange}
                                        aria-label="Document ID"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nationalID" className="block text-gray-700 text-sm font-bold mb-2">
                                        National ID *
                                    </label>
                                    <input
                                        type="text"
                                        name="nationalID"
                                        id="nationalID"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={handleChange}
                                        aria-label="National ID"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="uploadFile" className="block text-gray-700 text-sm font-bold mb-2">
                                    Upload File
                                </label>
                                <div className="relative border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 text-center hover:bg-gray-100 transition duration-200 cursor-pointer">
                                    JPG, PDF ...
                                    <input
                                        type="file"
                                        name="uploadFile"
                                        id="uploadFile"
                                        className="absolute inset-0 w-full h-full opacity-0"
                                        onChange={handleFileChange}
                                        aria-label="Upload File"
                                    />
                                    <FaCloudUploadAlt className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            <button type="submit" className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200">
                                Submit
                            </button>
                        </form>
                    </div>

                  
                </div>
            </section>

            <section className="container mx-auto py-8 px-4">
                {/* Title, Number of Users, and Search */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-900">2,490 users</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded-xl py-2 px-8 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search Documents"
                            />
                            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-xl shadow-sm transition duration-200 flex items-center">
                            <FaCog className="mr-2" /> Manage Column
                        </button>
                    </div>
                </div>

                {/* Document List Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" aria-label="Select All">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded" aria-label="Select All" />
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
                                    Subscription
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    By
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredDocuments.map((document) => (
                                <tr key={document.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded" aria-label={`Select document ${document.name}`} />
                                    </td>
                                    
                                    <td className="px-4 py-3 text-sm text-gray-900">{document.name}</td>
                                    <td className="px-4 py-3 text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${document.status === 'Accepted' ? 'bg-green-100 text-green-800' : document.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {document.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{document.subscription}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{document.by}</td>
                                    <td className="px-4 py-3 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-red-600 hover:text-red-900" aria-label="Remove">
                                                <FaTrash />
                                            </button>
                                            <button className="text-yellow-600 hover:text-yellow-900" aria-label="Hide">
                                                <FaEyeSlash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
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

export default EmployerPage;