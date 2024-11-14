'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState<boolean | null>(null);
  const pricing = {
    personal: {
      monthly: 3,
      yearly: 30, 
    },
    premium: {
      monthly: 5,
      yearly: 50, 
    },
    premiumPlus: {
      monthly: 15,
      yearly: 150,
    },
  };

  
  useEffect(() => {
    setIsYearly(false); 
  }, []);

  
  if (isYearly === null) {
    return null; 
  }

  return (
    <div id="pricing" className="container mx-auto px-4 py-16 mb-32">
      
      <h2 className="text-4xl font-bold text-center text-gray-900">Pricing</h2>
      <p className="text-center text-gray-600 mt-2">Affordable Plans Tailored to Your Needs</p>
      
     
      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 border border-gray-800 rounded-l-lg ${!isYearly ? 'bg-gray-900 text-white' : 'text-gray-900'}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 border border-gray-800 rounded-r-lg ${isYearly ? 'bg-gray-900 text-white' : 'text-gray-900'}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>

    
      <div className="flex flex-col md:flex-row justify-center items-start mt-12 space-y-8 md:space-y-0 md:space-x-8">
        
      
        <div className="w-full md:w-1/3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-black text-left transition-all transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-900">Personal</h3>
          <p className="text-gray-600">Perfect for everyone</p>
          <p className="text-4xl font-bold text-gray-900 mt-4">
            ${isYearly ? pricing.personal.yearly : pricing.personal.monthly} 
            <span className="text-lg font-normal text-gray-600">
              {isYearly ? '/year' : '/month'}
            </span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Advanced Security
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Secure Digital Storage
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Unlimited Verification Requests
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              30-day free trial
            </li>
          </ul>
          <Link href="/signup" className="mt-6 w-full  flex justify-center items-center px-4 py-2 rounded-lg border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white inline-block">
  Sign Up
</Link>


         
        </div>
        
       
        <div className="w-full md:w-1/3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-black text-left transition-all transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Premium</h3>
            <span className="text-xs font-semibold text-yellow-600 bg-yellow-200 px-2 py-1 rounded-full">Popular</span>
          </div>
          <p className="text-gray-600">Perfect for Individuals</p>
          <p className="text-4xl font-bold text-gray-900 mt-4">
            ${isYearly ? pricing.premium.yearly : pricing.premium.monthly} 
            <span className="text-lg font-normal text-gray-600">
              {isYearly ? '/year' : '/month'}
            </span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Quick Verification
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Job Application
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              No Ads
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              30-day free trial
            </li>
          </ul>
          <Link href="/login" className="mt-6 w-full flex justify-center items-center px-4 py-2 rounded-lg border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white inline-block">
          Upgrade
</Link>


          
        </div>
        
      
        <div className="w-full md:w-1/3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-black text-left transition-all transform hover:scale-105">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Premium Plus</h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-200 px-2 py-1 rounded-full">Coming Soon</span>
          </div>
          <p className="text-gray-600">Perfect for organizations</p>
          <p className="text-4xl font-bold text-gray-900 mt-4">
            ${isYearly ? pricing.premiumPlus.yearly : pricing.premiumPlus.monthly} 
            <span className="text-lg font-normal text-gray-600">
              {isYearly ? '/year' : '/month'}
            </span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Recruiting Packages
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Priority Support
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              Customizable Features
            </li>
            <li className="flex items-center">
              <Image src="/Images/check.svg" alt="check mark" width={16} height={16} className="mr-2" />
              30-day free trial
            </li>
          </ul>
          <Link href="/login" className="mt-6 w-full flex justify-center items-center px-4 py-2 rounded-lg border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white">
  Notify Me
</Link>


         
        </div>
      </div>
    </div>
  );
}
