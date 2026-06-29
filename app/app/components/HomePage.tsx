'use client';

import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HomeCards from './HomeCards';

export default function HomePage() {
  return (
    <main>
      <Header />

      <div className="hero-section">
        <div className="container">
          <div className="pt-20 pb-12">
            <HeroSection />
            <HomeCards />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}