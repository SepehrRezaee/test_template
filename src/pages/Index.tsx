import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyApexMirror from "@/components/WhyApexMirror";
import HowItWorks from "@/components/HowItWorks";
import CompareStrategies from "@/components/CompareStrategies";
import CountdownSection from "@/components/CountdownSection";
import TransparencySection from "@/components/TransparencySection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyApexMirror />
      <HowItWorks />
      <CompareStrategies />
      <CountdownSection />
      <TransparencySection />
      <CTASection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
