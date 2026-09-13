import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Credibility } from '../components/Credibility';
import { SelectedWork } from '../components/SelectedWork';
import { HowIWork } from '../components/HowIWork';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen">
      {/* 1. Header */}
      <Nav />

      <main id="main-content">
        {/* 2. Hero (prominently featuring Imran's hero image section) */}
        <Hero />

        {/* 3. Credibility / Stats */}
        <Credibility />

        {/* 4. Selected Work (Alternating editorial presentations) */}
        <SelectedWork />

        {/* 5. How I Work (Numbered methodology 01–05) */}
        <HowIWork />

        {/* 6. Services (Clean editorial rows) */}
        <Services />

        {/* 7. Testimonials (Prominent editorial quote) */}
        <Testimonials />

        {/* 10. Final CTA & Inverted Contact Section */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
