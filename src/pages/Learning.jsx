import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import Calender from "../components/Calender";
import Schedule from "../components/Schedule";
import Table from "../components/Table";

const Learning = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6 ">
        <SideBar />

        <div className="flex space-x-4 ml-7 ">
          <section className="w-[420px] ">
            <div className="rounded-lg w-[300px]">
              <h2 className="p-4 outline">Go to Learning Managemant System </h2>
            </div>
            <div className="bg-[#0055A5] w-[300px] mt-4 ">
              <div className="flex p-3 space-x-[30px] ">
                <span className="text-white text-[15px] ">Course Advising</span>
                <button className="bg-white text-blue-400 rounded-lg px-2 text-[10px] ">
                  view course forms
                </button>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold  mt-3 mb-3 ml-[-350px] ">Requests</h1>
              <Table />
            </div>
          </section>
          <section className="outline outline-red-700">
            <Calender />
            <Schedule />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Learning;
