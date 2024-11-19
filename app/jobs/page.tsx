import Navbar from "../components/Navbar";

const JobsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center bg-white p-6">
        {/* Header Section */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            1780+ Jobs For You
          </h1>
          <p className="text-gray-600 text-lg">
            Discover over 1780 job opportunities tailored to your skills and
            aspirations. Join thousands of successful candidates who found their
            dream jobs with us!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg mt-4">
            Explore Now
          </button>
        </div>

        {/* Images Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/Images/job1.png"
              alt="Job 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-700 font-semibold">Software Engineer</p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/Images/job2.png"
              alt="Job 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-700 font-semibold">Product Manager</p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/Images/job3.png"
              alt="Job 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-700 font-semibold">UX Designer</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
