import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import PricingPlanSection from "./components/PricingPlanSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ScreenerCard from "./components/ui/ScreenerCard";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>

      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          THE ULTIMATE DESTINATION FOR STOCK MARKET INSIGHT
        </h2>
        <p className="text-gray-700 mt-2 text-center">
          Join 1 million Traders & Investors who trust Nifty Trader for smart
          trading & real-time stock insights.
        </p>
        <button className="mt-4 bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-50">
          Explore Features →
        </button>
      </div>

      <div>
        <FeaturesSection />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScreenerCard
            iconSrc="/troubleshoot.png"
            title="Advanced Stock Screener"
            description="Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening."
          />
          <ScreenerCard
            iconSrc="/query_stats.png"
            title="Live Market Screener"
            description="Access real-time market data and dynamic filters to ensure timely trades without outdated information."
          />
          <ScreenerCard
            iconSrc="/find_in_page.png"
            title="Options Screener"
            description="Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters."
          />
          <ScreenerCard
            iconSrc="/link.png"
            title="Advanced Option Chain"
            description="Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting."
          />
        </div>
      </div>

      <div
        className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-6xl mx-auto"
        style={{
          backgroundImage: 'url("bg_image.png")',
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-left">
          <h3 className="text-2xl font-bold text-gray-900">
            Missing Trades Because of Outdated Data?
          </h3>
          <p className="text-gray-700 mt-2 text-lg">
            Get the Live Market Screening with Dynamic Filters
          </p>
        </div>
        <div>
          <button className="bg-custom-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-custom-blue-hover">
            Get Free Trial
          </button>
        </div>
      </div>

      <div>
        <TestimonialsSection />
      </div>

      <div>
        <PricingPlanSection />
      </div>

      <div>
        <FAQSection />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
