// app/(components)/FeaturesSection.tsx
export default function FeaturesSection() {
    return (
        <section id="features" className="mt-24 text-center mb-24">
        <h2 className="text-sm font-semibold text-yellow-600">Our featured services</h2>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">Features</h3>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-8 mt-8">
        
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg bg-white">
            <img src="Images/digitalstorage.svg" alt="Digital Storage Icon" className="w-40 h-40" />
            <h4 className="text-lg font-semibold mt-4">Digital Storage</h4>
            <p className="text-gray-600 mt-2">Revolutionize Your File Organization with Digital Storage</p>
          </div>
         
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg bg-white">
            <img src="Images/verification.svg" alt="Document Verification Icon" className="w-40 h-40" />
            <h4 className="text-lg font-semibold mt-4">Document Verification</h4>
            <p className="text-gray-600 mt-2">Seamlessly handle document verification from employers and institutions.</p>
          </div>
         
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg bg-white">
          <img src="Images/userfriendly.svg" alt="Document Verification Icon" className="w-40 h-40" />
            <h4 className="text-lg font-semibold mt-4">User-Friendly Interfaces</h4>
            <p className="text-gray-600 mt-2">Tailored interfaces for institutions, employers, and individuals.</p>
          </div>
        </div>
      </section>
      
    );
  }
  