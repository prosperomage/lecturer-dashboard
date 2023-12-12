import React from "react";

import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import Calender from "../components/Calender";
import Schedule from "../components/Schedule";
import Carousel from "../components/Carousel";

const Mails = () => {
 
  return (
    <div>
      <DashNavbar />
      <div className=" flex   ">
        <div className="hidden md:block  w-[22%]">
          <SideBar />
        </div>
        <div className="flex justify-between mx-4  w-[78%]  ">
          <div className="mt-[35px]  flex flex-col  ">
            <div className=" outline-dashed  ">
              <Carousel   />
            </div>

            <div className="grid outline  grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 mx-auto mt-[10px] min-w-[470px]">
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
              <div className="bg-[#830020] text-white ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <span>img</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 outline outline-indigo-600 min-w-[280px]">
            <Calender />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mails;
