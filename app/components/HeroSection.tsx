// app/(components)/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center mt-12 px-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Revolutionize Credential Management</h1>
        <p className="text-gray-600">
          Simplify credential management and verification for educational institutions, employers, and individuals with secure, user-friendly, and advanced document handling features.
        </p>
        <div className="flex space-x-4">
          <Link href="/signup" className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700">
            Join us now
          </Link>
          <Link href="/login" className="px-6 py-3 font-bold hover:bg-gray-100">Learn more</Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="Images/trackedd.webp" alt="Person working at computer" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
