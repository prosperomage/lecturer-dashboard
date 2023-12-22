import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import CI from "../assets/Frame 174.svg";
import { IoArrowForwardOutline } from "react-icons/io5";

const Academics = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className="ml-6 p-4 w-[800px]">
          {/* image goes here */}
          <div className="outline outline-blue-500 w-[100%] h-[150px] bg-[url('/src/assets/amy-hirschi-uwpo02K55zw-unsplash.jpg')] bg-cover ">
            <h2 className="text-white font-bold  w-[30px] mt-auto">ACADEMICS</h2>
          </div>
          <div className="w-[680px] font-medium  mt-5">
            By working closely across campus, we discover fresh insights through
            joined up thinking to create an environment where learning
            flourishes.
          </div>

          <div className="outline">carousel of points</div>

          <div>
            <div>
              <div className="flex mt-5">
                <div>
                  <img src={CI} alt="communityimpact" />
                </div>
                <div className="flex flex-col ml-5">
                  <h1 className="text-[#830020] font-bold text-[28px] w-[70px] ml-2 ">
                    SDGs
                  </h1>
                  <div className="w-[500px] mt-3">
                    Join the United Nations to reform the world, eradicate
                    poverty, and protect the planet to ensure everyone enjoy
                    peace and prosperity.
                  </div>
                  <div className="mt-4 ml-[1rem]">
                    <div className="flex text-[#0055A5] cursor-pointer">
                      <div className="font-bold">FIND OUT MORE</div>
                      <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-9">
                <div>
                  <img src={CI} alt="communityimpact" />
                </div>
                <div className="flex flex-col ml-5">
                  <h1 className="text-[#830020] font-bold text-[28px] w-[170px] ml-2 ">
                    MY PROFILE
                  </h1>
                  <div className="w-[500px] mt-3">
                    Join the United Nations to reform the world, eradicate
                    poverty, and protect the planet to ensure everyone enjoy
                    peace and prosperity.
                  </div>
                  <div className="mt-4 ml-[1rem]">
                    <div className="flex text-[#0055A5] cursor-pointer">
                      <div className="font-bold">EDIT PROFILE</div>
                      <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
