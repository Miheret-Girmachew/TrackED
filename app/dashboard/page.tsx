// app/dashboard/page.tsx
'use client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { FaBell, FaUpload, FaSearch, FaShareAlt, FaFileDownload, FaLock } from 'react-icons/fa';
import { GoVerified } from "react-icons/go";
import { Inter, Roboto_Slab } from 'next/font/google'; // Import fonts
import Footer from '../components/Footer';
import HeaderLogged from '../components/HeaderLogged';
import { useState } from 'react';
import VerifyDocumentModal from '../components/VerifyDocumentModal';
import FeedbackModal from '../components/FeedbackModal';  // Import FeedbackModal

const inter = Inter({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Define a type for your document data
interface Document {
    id: string;
        imageUrl: string;
        title: string;
        institution: string;
        gpa: number;
        status: "Verified" | "Waiting" | "Rejected";
        description: string;
}

const Dashboard = () => {
    const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const openVerifyModal = () => {
        setIsVerifyModalOpen(true);
    };

    const closeVerifyModal = () => {
        setIsVerifyModalOpen(false);
    };

    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };

    // **REPLACE THIS WITH YOUR ACTUAL DATA FETCHING**
    const documents: Document[] = [
        {
            id: '1',
            title: "Bachelor's Degree in Mechanical Engineering",
            institution: 'Adolfo Ibanez Technology University',
            gpa: 3.96,
            status: 'Verified',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate1.png',
        },
        {
            id: '2',
            title: "Bachelor's Degree in Business Administration",
            institution: 'St. Mary\'s University',
            gpa: 3.86,
            status: 'Waiting',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate2.png',
        },
        {
            id: '3',
            title: "Master of Business Administration (MBA)",
            institution: 'Adolfo Ibanez Technology University',
            gpa: 3.76,
            status: 'Rejected',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate3.png',
        },
        {
            id: '4',
            title: "Bachelor's Degree in Mechanical Engineering",
            institution: "Adolfo Ibanez Technology University",
            gpa: 3.96,
            status: 'Verified',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate4.png',
        },
        {
            id: '5',
            title: "Bachelor's Degree in Mechanical Engineering",
            institution: 'Adolfo Ibanez Technology University',
            gpa: 3.96,
            status: 'Verified',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate5.png',
        },
        {
            id: '6',
            title: "Bachelor's Degree in Mechanical Engineering",
            institution: 'Adolfo Ibanez Technology University',
            gpa: 3.96,
            status: 'Verified',
            description: 'Ullamco veniam culpa excepteur id duis aliquip enim esse veniam.',
            imageUrl: '/certificate6.png',
        },
    ];

    return (
        <div className={`${inter.className} font-sans bg-gray-50 min-h-screen`}>
            {/* Header */}
            <HeaderLogged />

            {/* Main Content */}
            <div className="container mx-auto py-8 grid grid-cols-5 gap-8">
                {/* Sidebar */}
                <aside className="col-span-1 px-5 py-7 bg-white rounded-2xl shadow-lg h-fit sticky top-4">
                    <div className="flex flex-col items-center mb-7">
                       
                        <h2 className={`${robotoSlab.className} text-xl font-semibold text-gray-800`}>Alex Lopez</h2>
                        <p className="text-gray-600 text-sm">Alex@gmail.com</p>
                    </div>

                    <div className="mb-5">
                        <p className="text-gray-700">Verified Docs <span className="font-semibold text-blue-600">9</span></p>
                        <p className="text-gray-700">Waiting Docs <span className="font-semibold text-yellow-600">2</span></p>
                    </div>

                    <div className="mb-5">
                        <h3 className={`${robotoSlab.className} text-gray-700 font-semibold mb-3`}># Institutions</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm transition duration-200 shadow-sm" aria-label="Filter by AASTU">AASTU</button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm transition duration-200 shadow-sm" aria-label="Filter by AAU">AAU</button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm transition duration-200 shadow-sm" aria-label="Filter by St. Mary's University">St. Mary's University</button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm transition duration-200 shadow-sm" aria-label="Filter by Design">Design</button>
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm transition duration-200 shadow-sm" aria-label="Filter by Fine Art">Fine Art</button>
                        </div>
                    </div>

                    <div className="mb-7">
                       
                    </div>

                    <div className="flex flex-col space-y-3">
                        <button className="text-gray-700 hover:text-blue-600 transition duration-200">Logout</button>
                        <button
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                            onClick={openFeedbackModal}
                            aria-label="Give Feedback"
                        >
                            Give Feedback
                        </button>
                    </div>
                </aside>

                {/* Document List */}
                <main className="col-span-4">
                    {/* Filters */}
                    <div className="grid grid-cols-1 grid-template-rows-auto gap-6 mb-6">
                        {/* First Row: Institution, Search */}
                        <div className="flex space-x-10 items-center justify-center">
                            <select
                                className="border rounded-xl px-3 py-2 text-sm shadow-sm focus:ring-black focus:border-gray-700"
                                aria-label="Select Institution"
                            >
                                <option>Institution</option>
                                <option>University 1</option>
                                <option>University 2</option>
                            </select>

                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border rounded-xl px-3 py-2 text-sm shadow-sm focus:ring-black focus:border-gray-700"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <FaSearch className="text-gray-400" />
                                    </div>
                                </div>
                                <button
                                    className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200"
                                    aria-label="Search"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Second Row: All, Upload and Verify */}
                        <div className="flex space-x-10 items-center justify-center">
                            <select
                                className="border rounded-xl px-3 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                aria-label="Select All"
                            >
                                <option>All</option>
                                <option>Verified</option>
                                <option>Waiting</option>
                                <option>Rejected</option>
                            </select>
                            <button
                                className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-200 flex items-center"
                                aria-label="Upload and Verify"
                                onClick={openVerifyModal} // Open the modal on click
                            >
                                <FaUpload className="mr-2" /> Upload & Verify
                            </button>
                        </div>
                    </div>

                    {/* Document Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Map over the documents array to render each document */}
                        {documents.map((document) => (
                            <div key={document.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-200 hover:shadow-xl">
                               
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className={`${robotoSlab.className} text-lg font-semibold text-gray-800`}>{document.title}</h3>
                                        <div className="flex space-x-3">
                                            <FaFileDownload className="text-gray-500 hover:text-blue-600 cursor-pointer transition duration-200" />
                                            <FaShareAlt className="text-gray-500 hover:text-blue-600 cursor-pointer transition duration-200" />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">{document.institution}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div>
                                            <p className="text-gray-700 text-sm">GPA</p>
                                            <p className="text-yellow-500 font-semibold text-sm">
                                                {document.gpa} <span className="text-yellow-300">*****</span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 text-sm">STATUS</p>
                                            <div className={`flex items-center text-sm font-semibold ${document.status === 'Verified' ? 'text-green-500' : document.status === 'Waiting' ? 'text-yellow-500' : 'text-red-500'}`}>
                                                {document.status} {document.status === 'Verified' && <GoVerified className="ml-1" />}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-800 text-sm mt-3">About</p>
                                    <p className="text-gray-600 text-sm">{document.description}</p>
                                    <FaLock className="text-red-500 absolute bottom-3 right-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            <Footer />

            {/* Render the modal conditionally */}
            {isVerifyModalOpen && <VerifyDocumentModal closeModal={closeVerifyModal} />}
            {isFeedbackModalOpen && <FeedbackModal closeModal={closeFeedbackModal} />}
        </div>
    );
};

export default Dashboard;