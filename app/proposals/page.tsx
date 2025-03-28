// pages/proposals.tsx
'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import { FaSearch, FaTimes, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import HeaderEmployer from '../components/HeaderEmployer';
import ProposalCard from '../components/ProposalCard';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface Proposal {
    name: string;
    title: string;
    phone: string;
    email: string;
    starred: boolean;
}

const Proposals: NextPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const proposals: Proposal[] = [
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: true },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: false },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: true },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: false },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: true },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: false },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: true },
        { name: 'Alemu Kebede', title: 'professor', phone: '0900423958', email: 'example@gmail.com', starred: false },
    ];

    const filteredProposals = proposals.filter(proposal =>
        proposal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`${inter.className} bg-gray-50`}>
            <HeaderEmployer />

            {/* Main Content */}
            <section className="container mx-auto py-8 px-4">
                {/* Title and Search */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-semibold text-gray-900">Proposals</h1>
                    <div className="w-48 h-1 bg-yellow-400 rounded-full mt-1"></div>
                </div>

                <div className="relative flex items-center justify-between mb-6">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded-xl py-2 px-8 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search Proposals" // Added aria-label
                    />
                    <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>

                    <button className="text-red-600 hover:text-red-900 transition duration-200" aria-label="Remove">
                      <FaTimes size={20} />
                    </button>
                </div>

                {/* Job Details */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-yellow-500">#Job - 1245IT</h2>
                    <p className="text-gray-600">Job Title: React Developer</p>
                    <p className="text-gray-600">Proposals Submitted: 50</p>
                </div>

                {/* Proposal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {filteredProposals.map((proposal, index) => (
                        <ProposalCard key={index} {...proposal} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Previous">
                        <FaChevronLeft />
                    </button>
                    <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2" aria-label="Next">
                        <FaChevronRight />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Proposals;