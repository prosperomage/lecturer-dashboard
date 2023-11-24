import React from "react";
import profpic from "../assets/LandinPageImages/Frame 7.svg";
import invite from "../assets/LandinPageImages/Frame 7 (1).svg";
import grouppic from "../assets/LandinPageImages/Frame 7 (2).svg";
import bottombaner from "../assets/LandinPageImages/Vector 1.svg";

const LatestNews = () => {
  return (
    <div>
      <div className="my-[10px] outline  ">
        <h1 className="font-bold text-[28px]">Latest News</h1>
        <div className=" min-w-[200px] lg:flex mt-4 bg-slate-100 justify-evenly ">
          <div className="outline  ">
            <img src={profpic} alt="" />
            <div>
              CMUL holds $20million Dinner and <br />
              award night on decenber 20
            </div>
            <div>
              <img src={bottombaner} alt="" />
            </div>
          </div>
          <div>
            <img src={invite} alt="" />
            <div>
              CMUL holds $20million Dinner and <br />
              award night on decenber 20
            </div>
            <div>
              <img src={bottombaner} alt="" />
            </div>
          </div>
          <div>
            <img src={grouppic} alt="" />
            <div>
              CMUL holds $20million Dinner and <br />
              award night on decenber 20
            </div>
            <div>
              <img src={bottombaner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
