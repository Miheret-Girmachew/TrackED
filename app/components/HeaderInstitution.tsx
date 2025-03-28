// components/HeaderLogged.tsx
'use client';

import Image from 'next/image';
import { FaBell } from 'react-icons/fa';
import { Roboto_Slab } from 'next/font/google';
import { useState } from 'react';
import UpgradeModal from './UpgradeModal'; // Import the UpgradeModal component

const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface HeaderProps {
    // You can add props here if you need to pass any data to the header
}

const HeaderInstitution: React.FC<HeaderProps> = () => {
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

    const openUpgradeModal = () => {
        setIsUpgradeModalOpen(true);
    };

    const closeUpgradeModal = () => {
        setIsUpgradeModalOpen(false);
    };

    return (
        <>
            <header className="bg-gradient-to-r  shadow-md py-4 px-6 flex items-center justify-between">
                {/* Left Section: Logo and Text */}
                <div className="flex items-center">
                    <Image
                        src="/Images/TrackedLogo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        priority
                    />
                    <span className={`${robotoSlab.className} text-xl font-semibold text-gray-800 ml-2`}>TrackED</span>
                </div>

                {/* Center Section: Navigation Links (Home and Jobs) */}
                <nav className="flex-grow flex justify-center">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/institution" className="text-gray-700 hover:text-yellow-500 transition duration-200">
                                Home
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Right Section: Notifications, Upgrade, Profile */}
                <div className="flex items-center space-x-5">
                    <FaBell className="text-black hover:text-gray-700 cursor-pointer transition duration-200" size={22} />
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-200"
                        onClick={openUpgradeModal} // Open the modal on click
                        aria-label="Upgrade"
                    >
                        Upgrade
                    </button>
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center uppercase text-white font-semibold">
                        A
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition duration-200" aria-label="Toggle Menu">
                    <svg width="35" height="35" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1111 37.5C12.2556 37.5 11.5234 37.1956 10.9147 36.5869C10.3059 35.9781 10.001 35.2455 10 34.3889V12.6111C10 11.7556 10.3049 11.0234 10.9147 10.4147C11.5244 9.80593 12.2566 9.50104 13.1111 9.5H24V12.6111H13.1111V34.3889H24V37.5H13.1111ZM30.2222 31.2778L28.0833 29.0222L32.05 25.0556H19.3333V21.9444H32.05L28.0833 17.9778L30.2222 15.7222L38 23.5L30.2222 31.2778Z" fill="black"/>
</svg>

                    </button>
                </div>
            </header>
            {/* Render the modal conditionally */}
            {isUpgradeModalOpen && <UpgradeModal closeModal={closeUpgradeModal} />}
        </>
    );
};

export default HeaderInstitution;