import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import { IoArrowForwardOutline } from "react-icons/io5";

const HR = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className="ml-6 p-1 w-[800px]">
          <div className="h-[8rem] w-[48rem] outline  items-center">
            <img src="" alt="" />
            human rex=source image
          </div>
          <div className="mt-5">
            The Human Resource Department is aimed at finding ways to simplify
            processes and share information with staff which is important to
            fostering healthy employee relations and ensuring the overall
            success of the University of Lagos.
          </div>
          <div className="mt-4">
            <div className="ml-[-10px] ">
              The Human Resource will help with queries such as:
            </div>
            <div className="flex flex-col mt-3">
              <div className="flex text-[#0055A5] cursor-pointer">
                <div>LEAVE APPLICATION</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
              </div>
              <div className="flex text-[#0055A5] mt-5 cursor-pointer">
                <div>YEARLY APPRAISAL FORM</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
              </div>
              <div className="flex text-[#0055A5] mt-5 cursor-pointer">
                <div>BURSARY</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5 " />
              </div>
              <div className="flex text-[#0055A5] mt-5 cursor-pointer">
                <div>TRAINING AND DEVELOPMENTS</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
              </div>
              <div className="flex text-[#0055A5] mt-5 cursor-pointer">
                <div>PAYMENTS</div>
                <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;
