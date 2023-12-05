import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import SubNav from "../components/SubNav";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
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
