import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-1/5 p-6 bg-white shadow-lg rounded-lg m-1">
      <div className="text-center">
        <Image src="/Images/photo1.svg" alt="Profile Image" width={80} height={80} className="rounded-full mx-auto" />
        <h2 className="text-xl font-semibold mt-4">Alex Lopez</h2>
        <p className="text-gray-600">Alex@gmail.com</p>
        <div className="mt-6 text-left">
          <p className="flex justify-between">
            <span>Verified Docs</span>
            <span>9</span>
          </p>
          <p className="flex justify-between">
            <span>Waiting Docs</span>
            <span>2</span>
          </p>
        </div>
        <h3 className="mt-6 font-semibold"># Institutions</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {['AASTU', 'AAU', 'St. Mary\'s University', 'Design', 'Fine Art'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <div className="mt-6">
          <Image 
            src="/Images/advertise.svg"  
            alt="Advertise Here"
            width={200} 
            height={80}  
            className="rounded-lg"
          />
          
         </div>
      </div>
    </div>
  );
};

export default Sidebar;
