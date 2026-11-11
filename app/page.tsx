import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TanzaniaAwaitsSection from "@/components/TanzaniaAwaitsSection";
import SafariStylesSection from "@/components/SafariStylesSection";
import WhyUsSection from "@/components/WhyUsSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import StatsSection from "@/components/StatsSection";
import TripPlannerSection from "@/components/TripPlannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TanzaniaAwaitsSection />
      <SafariStylesSection />
      <WhyUsSection />
      <DestinationsSection />
      <PackagesSection />
      <ExperiencesSection />
      <StatsSection />
      <TripPlannerSection />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
