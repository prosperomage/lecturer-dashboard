import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";

const Research = () => {
  return (
    <div className="flex flex-col">
      <DashNavbar />
      <div className="flex">
        <div className="flex mx-auto w-[22%]">
          <SideBar />
        </div>
        <div className=" w-[78%]  outline">
          <div className="h-[8rem] w-[42rem] outline m-auto mt-8 items-center">
            <img src="" alt="" />
            Reserch
          </div>
          <div className="outline-dotted mt-10 mx-4">
            <div>
              <span>
                We identify solutions to critical global changes by extending
                the frontiers of <br />
                knowledge both within and beyond existing research paradigms
              </span>
            </div>
            <div>columns go here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
