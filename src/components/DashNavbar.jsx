import NewUnilagLogo from "../assets/Ellipse 1.svg";
import unilagstudent from "../assets/LandinPageImages/Ellipse 3.svg";
import { AiOutlineSearch } from "react-icons/ai";
import unilagsearch from "../assets/LandinPageImages/material-symbols_search-rounded.svg";

const DashNavbar = () => {
  return (
    <div className="  bg-slate-300   py-[10px]">
      <div className=" flex mx-[3rem] space-x-[12rem] ">
        <div className="flex ">
          <img src={NewUnilagLogo} alt="" className="w-[70px] h-[70px] mt-2 " />
          <div className="text-[18px] mt-4 w-[100px] mb-4 md:font-black">
            <span>University Of Lagos</span>
          </div>
        </div>

        <div>
          <div className="flex items-center mt-4">
            <AiOutlineSearch className="  w-6 h-6 " />
            <input
              type="search"
              className="px-4 py-2 w-[340px] border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        {/*  student logo */}
        <div className="flex">
          <img
            src={unilagstudent}
            alt=""
            className="w-[40px] h-[40px] mt-4 cursor-pointer "
          />
          <div className="  mt-5 font-black">
            <h4 className="text-[10px] w-[87px] ">ojo oluwaseyi</h4>
            <h4 className="text-[#949396] ml-1 text-[8px] w-[80px]">
              Computer science
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
