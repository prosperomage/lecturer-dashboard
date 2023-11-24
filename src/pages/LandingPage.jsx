import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="md:mx-[50px] ">
        <LatestNews />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
