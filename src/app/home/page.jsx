import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import MiniPortfolioSection from "@/components/MiniPortfolio";
import TechnologiesSection from "@/components/Technologies";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <MiniPortfolioSection />
    </main>
  );
};

export default HomePage;
