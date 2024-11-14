import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const PersonalPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar /> 
      
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default PersonalPage;
