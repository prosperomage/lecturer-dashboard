import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import g1 from "../assets/Frame 177.svg";
import g2 from "../assets/Frame 177 (1).svg";
import g3 from "../assets/Frame 177 (2).svg";
import g4 from "../assets/Frame 177 (3).svg";
import { IoArrowForwardOutline } from "react-icons/io5";
const Research = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <div>
          <SideBar />
        </div>
        <div className="ml-6 p-1 w-[800px]">
        <div className="outline outline-blue-500 w-[100%] h-[150px] bg-[url('/src/assets/amy-hirschi-uwpo02K55zw-unsplash.jpg')] bg-cover ">
            <h2 className="text-white font-bold  w-[30px] mt-auto">Research</h2>
          </div>
          
          <div className=" mt-10 mx-4">
            <div>
              <span className="font-semibold">
                We identify solutions to critical global changes by extending
                the frontiers of knowledge both within and beyond existing
                research paradigms
              </span>
            </div>
          </div>
          {/* grid goes here */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="">
              <img src={g1} alt="" />
              <div className="text-[#0055A5] flex p-4">
                <div className="ml-[60px]">SUBMIT PROPOSAL</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5 cursor-pointer " />
              </div>
            </div>
            <div className="">
              <img src={g2} alt="" />
              <div className="text-[#0055A5] flex p-4 ">
                <div className="ml-[60px]">SUBMIT CONCEPT NOTE</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5 cursor-pointer " />
              </div>
            </div>
            <div className="">
              <img src={g3} alt="" />
              <div className="text-[#0055A5] flex p-4">
                <div className="ml-[80px]">GRANT CALLS</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5 cursor-pointer " />
              </div>
            </div>
            <div className="">
              <img src={g4} alt="" />
              <div className="text-[#0055A5] flex p-4">
                <div className="ml-[60px]">BUDGET OFFERS</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
