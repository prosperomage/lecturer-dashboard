import React, { useState } from "react";
import CalenderImg from "../assets/Light Mode.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SchedukeDialogue from "./SchedukeDialogue";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedules, setSchedules] = useState([]); // State for schedule entries

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    setSchedules([...schedules, formData]); // Add new schedule entry
    console.log("Form data submitted:", formData); // Optional logging
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" rounded-xl">
      <Calendar onClickDay={handleDateClick} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Create Schedule"
      >
        <h2>
          Create Schedule for{" "}
          {selectedDate && selectedDate.toLocaleDateString()}
        </h2>
        <form action="" className="flex flex-col">
          <>
            <label htmlFor="">Schedule Name</label>
            <input type="text" className="outline w-[200px] rounded-md " />
          </>
          <>
            <label htmlFor="">Time</label>
            <input type="text" className="outline w-[200px] rounded-md " />
          </>
          <>
            <label htmlFor="">Location</label>
            <input type="text" className="outline w-[200px] rounded-md " />
          </>
        </form>
        {/* Your schedule creation form goes here */}
        <button
          onClick={handleCloseModal}
          className="outline outline-yellow-400 mt-4 px-2 bg-slate-400 rounded-md"
        >
          Close
        </button>
        <button
          onClick={handleCloseModal}
          className="outline outline-yellow-400 mt-4 px-2 ml-6
           bg-slate-400 rounded-md"
        >
          Submit
        </button>
      </Modal>
      {/* Schedule Component */}
      <div className="schedule">
      
        {schedules.map((schedule, index) => (
          <div key={index} className="schedule-entry">
            {/* Display schedule details from formData */}
            <p>Event Name: {schedule.eventName}</p>
            <p>Description: {schedule.eventDescription}</p>
            {/* Add any additional schedule details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
