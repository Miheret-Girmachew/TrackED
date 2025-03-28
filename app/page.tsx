// app/page.tsx
import Link from 'next/link';
import Header from "./components/Header"
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </>
  );
}