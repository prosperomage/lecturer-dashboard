import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import CI from "../assets/Frame 177 (3).svg";
import { IoArrowForwardOutline } from "react-icons/io5";
const CommunityImpact = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className="ml-6 p-1 w-[800px]">
          <div className="outline outline-blue-500 w-[100%] h-[300px] bg-[url('/src/assets/amy-hirschi-uwpo02K55zw-unsplash.jpg')] bg-cover ">
            <span className="text-white font-bold text-[40px] m-10 w-[200px]">
              Community Impact
            </span>
          </div>
          <div className="w-[760px] text-[18px] mt-4 m-auto">
            <span>
              We are committed to preserving the community and leaving a legacy
              for future generations{" "}
            </span>
          </div>
          <div className="flex mt-5">
            <div>
              <img src={CI} alt="communityimpact" />
            </div>
            <div className="flex flex-col ml-5">
              <h1 className="text-[#830020] font-bold text-[40px] ml-[-370px] ">
                SDGs
              </h1>
              <div className="w-[500px] mt-7">
                Join the United Nations to reform the world, eradicate poverty,
                and protect the planet to ensure everyone enjoy peace and
                prosperity.
              </div>
              <div className="mt-8 ml-[1rem]">
                <div className="flex text-[#0055A5] cursor-pointer">
                  <div className="font-bold">PROJECTS</div>
                  <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                </div>
                <div className="flex text-[#0055A5] cursor-pointer mt-6">
                  <div className="font-bold">VOLUNTEER </div>
                  <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
