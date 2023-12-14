import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import { IoArrowForwardOutline } from "react-icons/io5";

const Health = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className="outline ml-6 p-4 w-[800px]">
          {/* image goes here */}
          <div className="outline outline-blue-500 w[200px] h-[150px] ">
            <span>image goes here</span>
          </div>
          {/* text goes here */}
          <div className="mt-5">
            <div className="p-6 font-semibold text-[12px]">
              <span>
                Welcome to the campus health service. Your primary health care
                provider in UNILAG.
              </span>{" "}
              <br />
              <div className="mt-4 ">
                we strive to cultivate a healthy campus for staff and students,
                offering an integrated and <br /> comprehensive service for a
                range of health concerns
              </div>
            </div>
          </div>
          {/* opening hours  */}
          <div className=" mt-5">
            <div className="">
              <h2 className=" text-[20px] ml-[-40rem] text-[#CC270A] ">
                Medical Center
              </h2>
              <div className="flex justify-between">
                <div>
                  Opening Hours:{" "}
                  <span className="ml-6">8:00am - 6:00pm Monday to Friday</span>
                </div>
                <div className="flex  text-[#0055A5]" >
                  <h2 className=" mr-6">BOOK AN APPOINTMENT</h2>
                 
                  <IoArrowForwardOutline className="mt-1 w-5 h-5 cursor-pointer " />
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <h2 className="text-[20px] text-[#CC270A] ml-[-38rem]">
                UNILAG Pharmacy
              </h2>
              <div className="flex justify-between">
                <div>
                  Opening Hours:{" "}
                  <span className="ml-6">8:00am - 6:00pm Monday to Friday</span>
                </div>
                <div className="flex  text-[#0055A5]" >
                  <h2 className=" mr-6">ORDER PRESCRIPION</h2>
                 
                  <IoArrowForwardOutline className="mt-1 w-5 h-5 cursor-pointer " />
                </div>
              </div>
            </div>
          </div>

          {/* notice */}
          <div className="mt-16">
            <h2 className="ml-[-42rem] font-bold">Please notice</h2>
            <div className="ml-[-8.8rem] mt-2">
              Please wear a mask if you have cold or flu symptoms to protect
              those in the waiting room
            </div>
            <div className="flex  mt-4">
              <div>Contact Numbers </div>
              <div className="ml-14">+234-1-280-2439</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
