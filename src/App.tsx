import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Offerings from "./components/Offerings";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Excellent from "./components/Excellent";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Offerings />
      <Features />
      <Choose />
      <Experience />
      <Excellent />
      <Footer />
    </div>
  );
};

export default App;
