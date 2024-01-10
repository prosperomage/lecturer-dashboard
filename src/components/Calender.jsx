import React from "react";
import CalenderImg from "../assets/Light Mode.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
 
  return (
    // <div className="">
    //   {/* <img src={CalenderImg} alt="calenderImage" className="w-[17rem] h-[10rem]  ml-5 " /> */}
    //   <Calendar onChange={onChange} value={value} />
    // </div>

    <div className="bg-blue-500 rounded-xl">
      <Calendar />
    </div>
  );
};

export default Calender;
