import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-16 border-b border-gray-300 rounded-b-lg shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="/Images/TrackedLogo.svg"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
          priority
        />
        <span className="text-lg font-bold text-gray-800">TrackED</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-gray-600">
        <Link href="/" scroll={false} className="hover:text-[#ffc100]">
          Home
        </Link>
        <Link href="/#features" scroll={false} className="hover:text-[#ffc100]">
          Features
        </Link>
        <Link href="/#pricing" scroll={false} className="hover:text-[#ffc100]">
          Pricing
        </Link>
        <Link href="/#contact" scroll={false} className="hover:text-[#ffc100]">
          Contact
        </Link>
      </nav>

      {/* Account Links */}
      <div className="flex space-x-4">
        <Link href="/login" className="text-gray-600 hover:text-[#ffc100] py-2">
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-[#ffc100]"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
