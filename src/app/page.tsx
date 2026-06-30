import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />

      <main className="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
