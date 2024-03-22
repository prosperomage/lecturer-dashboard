import React, { useState } from "react";
import NewUnilagLogo from "../assets/Ellipse 1.svg";
import unilagstudent from "../assets/LandinPageImages/Ellipse 3.svg";
import { AiOutlineSearch } from "react-icons/ai";
import unilagsearch from "../assets/LandinPageImages/material-symbols_search-rounded.svg";
import {
  MdAppRegistration,
  MdOutlinePayments,
  MdOutlineHealthAndSafety,
  MdSportsBasketball,
  MdOutlineLibraryBooks,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";

// import { LiaEnvelope } from "react-icons/lia";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";
import { PiHouseLight } from "react-icons/pi";

const DashNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    // <div className="  bg-slate-300   py-[10px]">
    //   <div className=" flex mx-[57px] justify-between  ">
    //     {/* school logo */}
    //     <div className="flex ">
    //       <img src={NewUnilagLogo} alt="" className="w-[70px] h-[70px] mt-2 " />
    //       <div className="text-[18px] mt-4 w-[100px] mb-4 md:font-black">
    //         <span>University Of Lagos</span>
    //       </div>
    //     </div>
    //     {/* search bar */}
    //     <div>
    //       <div className="relative w-[340px] flex items-center mt-4">
    //         <input
    //           type="search"
    //           className="px-4 py-2  border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500"
    //           placeholder="Search"
    //         />
    //         <div className="absolute inset-y-0 left-0 pl-3 flex  outline-dotted items-center pointer-events-none">
    //           <AiOutlineSearch className=" mr-5 outline-double w-6 h-6 " />
    //         </div>
    //       </div>
    //     </div>
    //     {/*  student logo */}
    //     <div className="flex">
    //       <img
    //         src={unilagstudent}
    //         alt=""
    //         className="w-[40px] h-[40px] mt-4 cursor-pointer "
    //       />
    //       <div className="  mt-5 font-black">
    //         <h4 className="text-[10px] w-[87px] ">ojo oluwaseyi</h4>
    //         <h4 className="text-[#949396] ml-1 text-[8px] w-[80px]">
    //           Computer science
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8"
            onClick={toggleDropdown}
          />
        </div>
        <div>
          <ul
            className={`lg:hidden absolute flex flex-col space-y-6 left-0 mt-[30px] w-48 bg-white border rounded-md shadow-lg z-50 ${
              dropdown ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href={`/mails`}
                className="flex items-center  hover:bg-[#0055a57a]  rounded-md p-1"
                onClick={closeDropdown}
              >
                <MdAppRegistration className="w-6 h-6 " />

                <span className="text-[17px] ml-1">Mails</span>
              </a>
            </li>
            <li>
              <a
                href={`/learning`}
                className="flex items-center  hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <MdOutlineLibraryBooks className="w-6 h-6" />

                <span className="text-[17px] ml-1">Learning</span>
              </a>
            </li>
            <li>
              <a
                href={`/health`}
                className="flex items-center hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <MdOutlineHealthAndSafety className="w-6 h-6" />

                <span className="text-[17px] ml-1">Health</span>
              </a>
            </li>

            <li>
              <a
                href="/library"
                className="flex items-center hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <MdOutlineLibraryBooks className="w-6 h-6" />
                <span className="text-[17px] ml-1">Library</span>
              </a>
            </li>
            <li>
              <a
                href="/academics"
                className="flex items-center hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <RiFilePaperLine className="w-6 h-6" />
                <span className="text-[17px] ml-1">Academics</span>
              </a>
            </li>
            <li>
              <a
                href="/research"
                className="flex items-center hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <RiFilePaperLine className="w-6 h-6" />
                <span className="text-[17px] ml-1">Research</span>
              </a>
            </li>
            <li>
              <a
                href="/humanresource"
                className="flex items-center   hover:bg-slate-800 rounded-md p-1 "
                onClick={closeDropdown}
              >
                <MdOutlineWorkHistory className="w-6 h-6" />
                <span className="text-[17px] ml-1">Human Resource</span>
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="flex items-center  hover:bg-slate-800 rounded-md p-1"
                onClick={closeDropdown}
              >
                <PiHouseLight className="w-6 h-6" />
                <span className="text-[17px]">Community Impact</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Search Bar */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 md:w-3/5 py-1 px-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        {/* User Info */}
        <div className="flex items-center space-x-2">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-white">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
