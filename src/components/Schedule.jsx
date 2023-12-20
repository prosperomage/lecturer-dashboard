import React from "react";
import { MdLocationOn } from "react-icons/md";

const Schedule = () => {
  return (
    <div className="mt-8 m-2 ">
      <h2 className=" ml-3 font-[20px]  w-[67px] ">Schedule</h2>
      <div className=" ml-4  h-[300px] flex justify-evenly flex-col">
        <div className="bg-[#DFDFDF] h-[45px] w-[260px] rounded-md ">
          <div>
            <h4 className="text-[14px] w-[190px] ml-4  font-bold ">
              Meeting with prof akinbulu
            </h4>
            <span className="flex justify-between text-[10px] mt-1 mx-4 text-[#0055A5] ">
              <h2 className="flex">
               <MdLocationOn className=" w-4 h-4 " />
                <span className="text-[7px] font-semibold ml-1 mt-1  " >My Office</span>
              </h2>
              <h3 className="">01:00</h3>
            </span>
          </div>
        </div>
        <div className="bg-[#DFDFDF] h-[45px] w-[260px] rounded-md ">
          <div>
            <h4 className="text-[14px] w-[120px]  ml-4  font-bold ">
            GEG 521 Lecture 
            </h4>
            <span className="flex justify-between text-[10px] mt-1 mx-4 text-[#0055A5] ">
              <h2 className="flex">
               <MdLocationOn className=" w-4 h-4 " />
                <span className="text-[7px] font-semibold ml-1 mt-1  " >LTO26</span>
              </h2>
              <h3 className="">02:00</h3>
            </span>
          </div>
        </div>
        <div className="bg-[#DFDFDF] h-[45px] w-[260px] rounded-md ">
          <div>
            <h4 className="text-[14px] w-[190px] ml-4  font-bold ">
            Launching of VC New Book
            </h4>
            <span className="flex justify-between text-[10px] mt-1 mx-4 text-[#0055A5] ">
              <h2 className="flex">
               <MdLocationOn className=" w-4 h-4 " />
                <span className="text-[7px] font-semibold ml-1 mt-1  " >Afe Babalola University</span>
              </h2>
              {/* <h3 className="">01:00</h3> */}
            </span>
          </div>
        </div>
        <div className="bg-[#DFDFDF] h-[45px] w-[260px] rounded-md ">
          <div>
            <h4 className="text-[14px] w-[190px] ml-4  font-bold ">
              Meeting with prof akinbulu
            </h4>
            <span className="flex justify-between text-[10px] mt-1 mx-4 text-[#0055A5] ">
              <h2 className="flex">
               <MdLocationOn className=" w-4 h-4 " />
                <span className="text-[7px] font-semibold ml-1 mt-1  " >My Office</span>
              </h2>
              <h3 className="">01:00</h3>
            </span>
          </div>
        </div>
        <div className="bg-[#DFDFDF] h-[45px] w-[260px] rounded-md ">
          <div>
            <h4 className="text-[14px] w-[190px] ml-4  font-bold ">
              Meeting with prof akinbulu
            </h4>
            <span className="flex justify-between text-[10px] mt-1 mx-4 text-[#0055A5] ">
              <h2 className="flex">
               <MdLocationOn className=" w-4 h-4 " />
                <span className="text-[7px] font-semibold ml-1 mt-1  " >My Office</span>
              </h2>
              <h3 className="">01:00</h3>
            </span>
          </div>
        </div>
        
        
       
      
      </div>
    </div>
  );
};

export default Schedule;
