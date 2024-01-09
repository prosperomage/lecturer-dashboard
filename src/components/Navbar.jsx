import React from "react";
import unilaglogo from "../assets/LandinPageImages/Ellipse 1.svg";

const Navbar = () => {
  return (
    <div className="ld-main bg-slate-300">
      <div className="  flex justify-between mx-[50px] py-[10px]">
        <div className="flex">
          <img src={unilaglogo} alt="" />
          <div className="mt-4 text-[16px] ml-2 w-24  font-black">
            <span>UNIVERSITY OF LAGOS</span>
          </div>
        </div>
        <div>
          <ul className="flex space-x-[50px] mt-7 mr-[100px] text-[14px] ">
            <li>
              <a href="">Students</a>
            </li>

            <li>
              <a href={`/login`}>staff</a>
            </li>

            <li>
              <a href="">Alumni</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
