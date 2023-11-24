import unilaglogo from "../assets/LandinPageImages/Ellipse 1.svg";
import unilagstudent from "../assets/LandinPageImages/Ellipse 3.svg";
import { AiOutlineSearch } from "react-icons/ai";
import unilagsearch from "../assets/LandinPageImages/material-symbols_search-rounded.svg";

const DashNavbar = () => {
  return (
    <div className="  bg-amber-300   py-[10px]">
      <div className=" flex mx-[4rem] space-x-[17rem] ">
        <div className="flex">
          <img src={unilaglogo} alt="" />
          <div className="  text-[18px] mt-4 md:font-black">
            <span>University</span> <br />
            <span>Of Lagos</span>
          </div>
        </div>
        {/* <div className="flex mt-6 ">
          <span className="">
            {" "}
            <AiOutlineSearch />
          </span>
          <img src={unilagsearch} alt="" className="mr-[-100px]" />
          <input
            type="text"
            className="w-[330px] h-[40px]  rounded-md "
            placeholder="Search"
          />
        </div> */}
        <div>
          {/* <div className="relative">
          <button
              type="button"
              className=" rounded-r bg-gray-200 py-2 px-3"
            >
              Search
            </button>
            <input
              type="search"
              placeholder="Search"
              className=" right-0 absolute w-full rounded-l border border-gray-200 py-2 px-3"
            />
            
          </div> */}
          <div className="flex items-center">
            <button className="px-4 border-r border-gray-300 focus:ring-blue-500 focus:border-blue-500">
              Search
            </button>
            <input
              type="search"
              className="px-4 py-2 w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        {/*  student logo */}
        <div className="  flex ">
          <img src={unilagstudent} alt="" />
          <div className="mt-4 font-black">
            <h4 className="text-[10px]">ojo oluwaseyi</h4>
            <h4 className="text-[#949396] text-[8px]">Computer science</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
