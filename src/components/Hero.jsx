import React from "react";
import unirankbanner from "../assets/LandinPageImages/UNI-RANK-banner.svg";

const Hero = () => {
  return (
    <div className=" flex flex-col outline outline-red-500">
      <div className="hidden md: space-x-[40px] bg-[#830020] text-white p-4">
        <span>Academics</span>
        <span>About Us</span>
        <span>Units</span>
        <span>Research</span>
        <span>Resources</span>
        <span>Admissions</span>
        <span>Enterprises</span>
        <span>Give To Unilag</span>
        <span>Tetfund</span>
      </div>
      <div>
        <img src={unirankbanner} alt="unirank banner" className="outline" />{" "}
      </div>
    </div>
  );
};

export default Hero;
