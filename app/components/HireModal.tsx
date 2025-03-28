// components/HireModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface HireModalProps {
    closeModal: () => void;
}

const HireModal: React.FC<HireModalProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        companyName: 'Buna International Bank',
        location: 'Addis Ababa',
        jobTitle: 'UI/UX Designer',
        jobType: 'Full-Time, Remote',
        aboutCompany: '',
        jobDescription: '',
        jobResponsibility: '',
        requiredQualification: '',
        jobOffers: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-3/4 md:w-2/3 lg:w-1/2 shadow-lg rounded-xl bg-white grid grid-cols-1 lg:grid-cols-[300px_1fr]">
                {/* Left Side - Advertising */}
               
                {/* Right Side - Form */}
                <div className="mt-3 text-center">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl leading-6 font-semibold text-gray-900">Hire</h3>
                        <button onClick={closeModal} aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="px-7 py-5 overflow-y-auto max-h-[600px]">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2 text-left">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2 text-left">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2 text-left">Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        id="jobTitle"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="jobType" className="block text-gray-700 text-sm font-bold mb-2 text-left">Job Type</label>
                                    <select
                                        name="jobType"
                                        id="jobType"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={handleChange}
                                        value={formData.jobType}
                                    >
                                        <option>Full-Time, Remote</option>
                                        <option>Part-Time</option>
                                        <option>Contract</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="aboutCompany" className="block text-gray-700 text-sm font-bold mb-2 text-left">About Your Company</label>
                                <textarea
                                    name="aboutCompany"
                                    id="aboutCompany"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                                    value={formData.aboutCompany}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="jobDescription" className="block text-gray-700 text-sm font-bold mb-2 text-left">Job Description</label>
                                <textarea
                                    name="jobDescription"
                                    id="jobDescription"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                                    value={formData.jobDescription}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="jobResponsibility" className="block text-gray-700 text-sm font-bold mb-2 text-left">Job Responsibility</label>
                                <textarea
                                    name="jobResponsibility"
                                    id="jobResponsibility"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                                    value={formData.jobResponsibility}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="requiredQualification" className="block text-gray-700 text-sm font-bold mb-2 text-left">Required Qualification</label>
                                <textarea
                                    name="requiredQualification"
                                    id="requiredQualification"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                                    value={formData.requiredQualification}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="jobOffers" className="block text-gray-700 text-sm font-bold mb-2 text-left">Job Offers</label>
                                <textarea
                                    name="jobOffers"
                                    id="jobOffers"
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                                    value={formData.jobOffers}
                                    onChange={handleChange}
                                />
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
                                <button
                                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
                                    aria-label="Submit"
                                    type="submit"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireModal;