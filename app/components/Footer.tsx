// app/(components)/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#fafafb] py-12 text-white shadow-inner">
      <div className="container mx-auto px-4">

        <div className="flex justify-evenly items-center mb-8">
          <div className="flex items-center">
            <img src="/Images/TrackedLogo.svg" alt="TrackID Logo" className="w-10 h-10 mr-4" />
            <h2 className="text-3xl font-semibold text-black">TrackED</h2>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-black">Contact Us</h3>
            <p className="text-gray-400">Email: <a href="mailto:miheretgirmachew@gmail.com" className="text-blue-400 hover:underline">miheretgirmachew@gmail.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+251929303319" className="text-blue-400 hover:underline">+251929303319</a></p>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TrackED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}