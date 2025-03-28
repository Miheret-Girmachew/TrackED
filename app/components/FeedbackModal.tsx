// components/FeedbackModal.tsx
'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface FeedbackModalProps {
  closeModal: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ closeModal }) => {
  const [feedbackData, setFeedbackData] = useState({
    tag: '#Security',
    feedback: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', feedbackData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-40 mx-auto p-5 border w-3/4 md:w-2/3 lg:w-1/2 shadow-lg rounded-xl bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl leading-6 font-semibold text-gray-900">Give Feedback</h3>
            <button onClick={closeModal} aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaTimes />
            </button>
          </div>
          <div className="px-7 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="/advertise.png" // Replace with your actual image
                alt="Advertise Here"
                width={200}
                height={300}
                className="rounded-xl object-cover"
              />
              <div>
                <div className="mb-4">
                  <label htmlFor="tag" className="block text-gray-700 text-sm font-bold mb-2">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    placeholder="#Security"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={feedbackData.tag}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    name="feedback"
                    id="feedback"
                    placeholder="Your Feedback .."
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    value={feedbackData.feedback}
                    onChange={handleChange}
                  />
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
              className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={handleSubmit}
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

export default FeedbackModal;