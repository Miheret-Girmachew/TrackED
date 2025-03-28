// components/UpgradeModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface UpgradeModalProps {
  closeModal: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ closeModal }) => {
  const [transactionID, setTransactionID] = useState('');
  const [receipt, setReceipt] = useState<File | null>(null);

  const handleTransactionIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionID(e.target.value);
  };

  const handleReceiptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { transactionID, receipt });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-3/4 md:w-2/3 lg:w-1/2 shadow-lg rounded-xl bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-between items-center mb-4">
            <div></div>{/* Empty div to balance layout */}
            <h3 className="text-xl leading-6 font-semibold text-yellow-500">Premium</h3>
            <button onClick={closeModal} aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaTimes />
            </button>
          </div>
          <div className="px-7 py-5">
            <div className="grid grid-cols-1 gap-6">
                
              <div className="text-left">
                <p className="text-gray-700 font-semibold">Your User ID: <span className="text-gray-500">ET148569</span></p>
                <p className="text-gray-700">
                  Use your User ID as the reason when you make the payment, and upload
                  your electronic receipt or enter your transaction ID. We will let you
                  know after we check.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="/bank_icon.png" // Replace with your bank icon
                  alt="Commercial Bank of Ethiopia"
                  width={30}
                  height={30}
                />
                <p className="text-gray-700">Commercial Bank of Ethiopia</p>
                <span className="text-gray-500">1000302233709</span>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="/telebirr_icon.png" // Replace with your telebirr icon
                  alt="Telebirr"
                  width={30}
                  height={30}
                />
                <p className="text-gray-700">Telebirr</p>
                <span className="text-gray-500">0900423958</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="transactionID" className="block text-gray-700 text-sm font-bold mb-2 text-left">Transaction ID</label>
                  <input
                    type="text"
                    name="transactionID"
                    id="transactionID"
                    placeholder="89566333"
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={transactionID}
                    onChange={handleTransactionIDChange}
                  />
                </div>
                <div>
                  <label htmlFor="receipt" className="block text-gray-700 text-sm font-bold mb-2 text-left">Receipt</label>
                  <div className="relative border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 text-center hover:bg-gray-100 transition duration-200 cursor-pointer">
                    JPG, PDF ...
                    <input
                      type="file"
                      name="receipt"
                      id="receipt"
                      className="absolute inset-0 w-full h-full opacity-0"
                      onChange={handleReceiptChange}
                    />
                    <Image
                      src="/upload_icon.svg" // Replace with your actual upload icon
                      alt="Upload Icon"
                      width={20}
                      height={20}
                      className="absolute top-1/2 right-3 -translate-y-1/2"
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm text-left">
                If this is your first time and you want to try for free, write <span className="font-semibold">FreeTrial</span> in the Transaction ID.
              </p>
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

export default UpgradeModal;