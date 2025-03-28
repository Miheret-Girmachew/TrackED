// components/VerifyDocumentModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface VerifyDocumentModalProps {
    closeModal: () => void;
}

const VerifyDocumentModal: React.FC<VerifyDocumentModalProps> = ({ closeModal }) => {
    const [selectedInstitution, setSelectedInstitution] = useState('');

    const handleInstitutionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedInstitution(event.target.value);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-40 mx-auto p-6 border w-3/4 md:w-2/3 lg:w-1/2 shadow-lg rounded-xl bg-white">
                <div className="mt-3 text-center">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl leading-6 font-semibold text-gray-900">Verify your Document</h3>
                        <button onClick={closeModal} aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="px-7 py-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="documentName" className="block text-gray-700 text-sm font-bold mb-2">
                                        Document Name
                                    </label>
                                    <input
                                        type="text"
                                        id="documentName"
                                        placeholder="Masters of Software Engineering"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="documentID" className="block text-gray-700 text-sm font-bold mb-2">
                                        Document ID
                                    </label>
                                    <input
                                        type="text"
                                        id="documentID"
                                        placeholder="Document ID"
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                                        Little description
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="A masters ...."
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none focus:ring-2 focus:ring-indigo-300"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="uploadDoc" className="block text-gray-700 text-sm font-bold mb-2">
                                        Upload Doc
                                    </label>
                                    <div className="relative border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 text-center hover:bg-gray-100 transition duration-200 cursor-pointer">
                                        JPEG, JPG, PDF ...
                                        <Image
                                            src="/upload_icon.svg" // Replace with your actual upload icon
                                            alt="Upload Icon"
                                            width={30}
                                            height={30}
                                            className="absolute top-1/2 right-3 -translate-y-1/2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="selectInstitution" className="block text-gray-700 text-sm font-bold mb-2">
                                        Select Institution
                                    </label>
                                    <select
                                        id="selectInstitution"
                                        value={selectedInstitution}
                                        onChange={handleInstitutionChange}
                                        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-300"
                                    >
                                        <option value="">Select Institution</option>
                                        <option value="addisAbaba">Addis Ababa University</option>
                                        <option value="addisAbabaScience">Addis Ababa Science and Tech.</option>
                                        <option value="adamaScience">Adama Science and Tech.</option>
                                    </select>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end items-center px-4 py-3">
                        <button
                            className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-xl transition duration-200 mr-3"
                            onClick={closeModal}
                            aria-label="Cancel"
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            aria-label="Submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyDocumentModal;