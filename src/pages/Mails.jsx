import React from "react";

import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import Calender from "../components/Calender";
import Schedule from "../components/Schedule";
import Carousel from "../components/Carousel";

import {
  MdAppRegistration,
  MdOutlinePayments,
  MdOutlineHealthAndSafety,
  MdSportsBasketball,
  MdOutlineLibraryBooks,
  MdPayments,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";

// import { LiaEnvelope } from "react-icons/lia";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";
import { PiHouseLight } from "react-icons/pi";

const Mails = () => {
  return (
    <div>
      <DashNavbar />
      <div className=" flex">
        <SideBar />
        {/* content for the middle side goes here */}
        <div className="w-full lg:mt-6  ml-6 p-1 ">
          <div className=" lg:min-w-[700px] ">
            <Carousel />
            {/* grid columns go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 mx-auto mt-[10px] lg:min-w-[470px] ">
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">MY MESSAGES</h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Gmail and other events
                    </h5>
                  </span>
                  <PiEnvelopeSimpleThin className="w-6 h-6 mt-1" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px]  font-bold w-[120px] ">
                      ACADEMICS
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] w-[160px] ml-4  font-semibold ">
                      Faculty, Affliations, SPGs, Profile
                    </h5>
                  </span>
                  <MdOutlineLibraryBooks className="w-6 h-6 mt-1" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-8 font-bold ">
                      HEALTH AND WELLBEING
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] w-[190px] mr-[24px] font-semibold ">
                      Book an appointment, Check Pharmacy
                    </h5>
                  </span>
                  <MdOutlineHealthAndSafety className="w-6 h-6 mt-1" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold w-[60px]  ">
                      ASK HR
                    </h1>
                    <h5 className="text-[8px] text-[#DFDFDF] w-[190px]  font-semibold ">
                      Leave Application, Yearly Appraisal Form, Payments
                    </h5>
                  </span>
                  <MdOutlineWorkHistory className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 w-[60px] font-bold ">
                      LIBRARY
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Check Repository, Upload Publication
                    </h5>
                  </span>
                  <RiFilePaperLine className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold w-[60px] ">
                      RESEARCH
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Submit Concept Note, Grant Calls
                    </h5>
                  </span>
                  <MdAppRegistration className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold w-[60px] ">
                      LEARNING
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] font-semibold ">
                      Go to LMS, Review Schedule
                    </h5>
                  </span>
                  <MdPayments className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-[#830020] text-white cursor-pointer ">
                <div className="flex justify-between mx-3 my-2">
                  <span>
                    <h1 className="text-[14px] mr-9 font-bold ">
                      COMMUNITY IMPACT
                    </h1>
                    <h5 className="text-[10px] text-[#DFDFDF] w-[90px]  font-semibold ">
                      SDGs, Volunteer
                    </h5>
                  </span>
                  <MdAppRegistration className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          {/* right side of screen  */}
        </div>
        <div className=" outline md:flex mt-8 w-[330px]">
          <Calender />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Mails;
