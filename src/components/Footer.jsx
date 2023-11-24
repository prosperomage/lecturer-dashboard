import React from "react";
import arrow from "../assets/LandinPageImages/Arrow 1.svg";
import fblink from '../assets/LandinPageImages/Facebook - png 0.svg'

const Footer = () => {
  return (
    <div className="  bg-[#830020] text-[#949396] min-h-[200px] ">
      <div className="m-10 flex justify-evenly">
        {/* first column */}
        <div >
          <h1 className="m-4">Quick Links</h1>
          <div className="flex  m-4">
            <section>
              <span className="flex mb-2">
                {" "}
                <img src={arrow} alt="" className="mr-3" /> About Unilag
              </span>
              <span className="flex mb-2">
                {" "}
                <img src={arrow} alt="" className="mr-3" /> Admissions
              </span>
              <span className="flex mb-2">
                {" "}
                <img src={arrow} alt="" className="mr-3" /> Faculties
              </span>
              <span className="flex mb-2">
                {" "}
                <img src={arrow} alt="" className="mr-3" /> Library
              </span>
            </section>
            <section>
              <span className="flex mb-2 ml-5">
                {" "}
                <img src={arrow} alt="" className="mr-3" /> Library
              </span>
            </section>
          </div>
        </div>
        <hr />
        {/* second column */}
        <div>
        
          <h1>Contact Us</h1>
          <div>
            <span className="flex mb-2">
              {" "}
              <img src={arrow} alt="" className="mr-3" /> Office of the Vice
              Chancellor
            </span>
            <span className="flex mb-2">
              {" "}
              <img src={arrow} alt="" className="mr-3" /> Giving
            </span>
            <span className="flex mb-2">
              {" "}
              <img src={arrow} alt="" className="mr-3" /> Careers
            </span>
          </div>
        </div>
        <span className="bg-[#8B495B]"></span>
        {/* third column */}
        <div>
        <h1 >Follow Us</h1>
        <img src={fblink} alt="" className="mt-6" />


        </div>
      </div>
    </div>
  );
};

export default Footer;
