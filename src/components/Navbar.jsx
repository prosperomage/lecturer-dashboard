import React, { useState } from "react";
import unilaglogo from "../assets/LandinPageImages/Ellipse 1.svg";

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setDropdown(!dropdown);
    };
    const closeDropdown = () => {
      setDropdown(false);
    };
  return (
    <div className="ld-main  bg-slate-300">
      <div className="  flex justify-between  md:mx-[50px] py-[10px]">
        <div className="flex">
          <img src={unilaglogo}  onClick={toggleDropdown} alt="" />
          <div className="mt-4 text-[16px] ml-2 w-24  font-black">
            <span>UNIVERSITY OF LAGOS</span>
          </div>
        </div>
        <div>
          {/* <ul className="  hidden md:flex space-x-[50px] mt-7 mr-[100px] text-[14px] "> */}
          <ul className="flex  w-[300px] justify-around mt-6"
            // className={`lg: absolute flex flex-col space-y-6 left-0 mt-[30px] w-48 bg-white border rounded-md shadow-lg z-50 ${
            //   dropdown ? "block" : "hidden"
            // }`}
          >
            <li> 
              <a href=""   onClick={closeDropdown}>Students</a>
            </li>

            <li>
              <a href={`/login`}   onClick={closeDropdown}>staff</a>
            </li>

            <li>
              <a href=""   onClick={closeDropdown}>Alumni</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
