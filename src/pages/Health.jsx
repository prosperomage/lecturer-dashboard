import React from "react";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";

const Health = () => {
  return (
    <div>
      <DashNavbar />
      <div>
        <SideBar />
        <div className="m-auto">content goes here</div>
      </div>
    </div>
  );
};

export default Health;