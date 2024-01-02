import React from "react";
import { GrAlarm } from "react-icons/gr";
import books from "../assets/Frame 185.svg";
import point from "../assets/mdi_hand-pointing-right.svg";

import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";

const Library = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className=" ml-6 p-4  w-[1080px]  min-w-[800px]">
          {/* image goes here */}
          <div className="outline outline-blue-500 w[200px] h-[150px] ">
            <span>image goes here</span>
          </div>
          <div className="mt-6 grid grid-cols-2 text-white  gap-6">
            <div className="outline  bg-[#DA4167] p-4 ">
              <h2 className="text-[24px]">Opening Hours</h2>
              <GrAlarm className="w-20 h-20 m-auto mt-10" />
              <div className="mt-8">Mon-Sat: 8:00 am - 10:00 pm</div>
              <div className="mr-[5.8rem]">Sundays: Closed</div>
            </div>
            <div className="outline bg-[#830020] p-4 ">
              <h2 className="text-[24px]">Quick Links</h2>
              <img src={books} alt="books" className="mt-6 m-auto" />
              <div>
                <div className="mt-6 mx-7 flex justify-between">
                  <div > VISIT THE LIBRARY WEBSITE</div>

                  <img src={point} alt="" />
                </div>
                <div className=" flex  mx-7 justify-between m-auto">
                  <div> CHECK REPOSITORY</div>

                  <img src={point} alt="" />
                </div>
                <div className=" flex  mx-7 justify-between m-auto">
                  <div>UPLOAD PUBLICATIONS</div>

                  <img src={point} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
