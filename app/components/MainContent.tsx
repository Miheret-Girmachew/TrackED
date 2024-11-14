import CertificateCard from './DocumentCard';
import Image from 'next/image';


interface Document {
  title: string;
  university: string;
  gpa: string;
  status: 'Verified' | 'Waiting' | 'Rejected';
  description: string;
}

const documents: Document[] = [
  {
    title: "Bachelor's Degree in Mechanical Engineering",
    university: 'Addis Ababa University',
    gpa: '3.96',
    status: 'Verified',
    description: 'Short description about this document.',
  },
];

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="institutionFilter" className="sr-only">Filter by Institution</label>
        <select id="institutionFilter" className="border rounded px-3 py-2">
          <option>Institution</option>
          <option>AAU</option>
          <option>AASTU</option>
        </select>

        <div className="relative">
  <input
    type="text"
    placeholder="Search"
    className="border rounded px-4 py-2 pl-10"
  />
  <img
    src="/images/search.svg"
    alt="Search"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
  />
</div>

        <button className="px-4 py-2 border rounded-full flex items-center">
      <Image 
        src="/Images/plus.svg" 
        alt="Plus Icon" 
        width={20} 
        height={20} 
        className="mr-2"  
      />
      Upload and Verify
    </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     
        {documents.map((doc, index) => (
          
      <CertificateCard
        title="Bachelor's Degree in Business Administration"
        institution="St. Mary's University"
        gpa={3.86}
        status="Waiting"
        statusColor="text-yellow-500"
        imageSrc="/path/to/certificate-image.jpg"
        aboutText="Ullamco veniam culpa excepteur id duis aliquip enim esse veniam."
      />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
