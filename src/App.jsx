import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import DiseaseInfoSection from "./components/DiseaseInfoSection";
import PhotoGuideSection from "./components/PhotoGuideSection";
import TechStackSection from "./components/TechStackSection";
import DetectionSection from "./components/DetectionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseSection />
        <DiseaseInfoSection />
        <PhotoGuideSection />
        <TechStackSection />
        <DetectionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;