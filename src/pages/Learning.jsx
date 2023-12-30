import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import Calender from "../components/Calender";
import Schedule from "../components/Schedule";
import Table from "../components/Table";
import { FaArrowRight } from "react-icons/fa6";

const Learning = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6 ">
        <SideBar />

        <div className="flex space-x-4 ml-7 ">
          <section className="w-[490px] ">
            <div className="flex rounded-lg w-[430px] bg-cover bg-[url('/src/assets/pexels-eline-spee-19288075.jpg')] ">
          
              <h2 className="p-4  text-white ">Go to Learning Managemant System </h2>
              <FaArrowRight className="text-white mt-5 ml-[7rem]" />
            </div>
            <div className="bg-[#0055A5] w-[430px] mt-4  ">
              <div className="flex justify-between p-3 m-3  ">
                <span className="text-white text-[15px] ">Course Advising</span>
                <button className="bg-white text-blue-400 rounded-lg px-2 text-[10px] ">
                  view course forms
                </button>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold w-[65px] mt-3 mb-3 mr-auto">Requests</h1>
              <Table />
            </div>
          </section>
          <section className="">
            <Calender />
            <Schedule />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Learning;
