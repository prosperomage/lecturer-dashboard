import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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

const SideBar = () => {
  return (
    <div className=" hidden overflow-auto md:block bg-[#0055A5] text-white mt-6  w-[230px]  min-h-[510px]">
      <nav className="mt-6  p-[24px]">
        <ul className="hidden outline outline-blue-400 lg:flex flex-col space-y-3">
          <li>
            <a
              href={`/mails`}
              className="flex items-center  hover:bg-[#0055a57a]  rounded-md p-1"
            >
              <MdAppRegistration className="w-6 h-6 " />

              <span className="text-[17px] ml-1">Mails</span>
            </a>
          </li>
          <li>
            <a
              href={`/learning`}
              className="flex items-center  hover:bg-slate-800 rounded-md p-1"
            >
              <MdOutlineLibraryBooks className="w-6 h-6" />

              <span className="text-[17px] ml-1">Learning</span>
            </a>
          </li>
          <li>
            <a
              href={`/health`}
              className="flex items-center hover:bg-slate-800 rounded-md p-1"
            >
              <MdOutlineHealthAndSafety className="w-6 h-6" />

              <span className="text-[17px] ml-1">Health</span>
            </a>
          </li>

          <li>
            <a
              href="/library"
              className="flex items-center hover:bg-slate-800 rounded-md p-1"
            >
              <MdOutlineLibraryBooks className="w-6 h-6" />
              <span className="text-[17px] ml-1">Library</span>
            </a>
          </li>
          <li>
            <a
              href="/academics"
              className="flex items-center hover:bg-slate-800 rounded-md p-1"
            >
              <RiFilePaperLine className="w-6 h-6" />
              <span className="text-[17px] ml-1">Academics</span>
            </a>
          </li>
          <li>
            <a
              href="/research"
              className="flex items-center hover:bg-slate-800 rounded-md p-1"
            >
              <RiFilePaperLine className="w-6 h-6" />
              <span className="text-[17px] ml-1">Research</span>
            </a>
          </li>
          <li>
            <a
              href="/humanresource"
              className="flex items-center   hover:bg-slate-800 rounded-md p-1 "
            >
              <MdOutlineWorkHistory className="w-6 h-6" />
              <span className="text-[17px] ml-1">Human Resource</span>
            </a>
          </li>
          <li>
            <a
              href="/community"
              className="flex items-center  hover:bg-slate-800 rounded-md p-1"
            >
              <PiHouseLight className="w-6 h-6" />
              <span className="text-[17px]">Community Impact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className=" mt-[6px] ml-6 md:hidden mr-4" onClick={handleClick}>
      {!nav ? <FiMenu className="w-5" /> : <FiX className="w-6" />}
    </div> */}
      {/* navbar that shows when on mobile or tablet device */}
      {/* <ul
      className={!nav ? "hidden" : "absolute bg-blue-800 h-screen p-4  mt-6"}
    >
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span className=" text-[14px] ">Registrations</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/about"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Study</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Payments</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Mails/ info</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Health</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Career</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Sports</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Accommodation</span>
        </a>
      </li>
      <li className="border-b-2 bg-blue-800 ">
        <a
          onClick={handleClose}
          href="/attendance"
          className="flex items-center space-x-2 hover:bg-slate-800 rounded-md p-1"
        >
          <span>Cluns/Societies</span>
        </a>
      </li>
    </ul> */}
    </div>
  );
};

export default SideBar;
