import React from "react";
import collectprize from "../assets/LandinPageImages/Frame 11.svg";
const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex">
        <h1 className="  text-center lg:font-bold mt-4 mr-auto text-[28px]">
          About Us
        </h1>
        {/* left part of container */}
        <div className=" min-w-full lg:flex justify-between">
          <div>
            <div className="mt-[50px]  max-w-[600px] mr-4 text-[18px]">
              The University of Lagos, founded in 1962 has provided qualitative
              and resesarch oriented education to Nigerians and all those who
              have entered its domain in search of knowledge. The University has
              built a legacy of excellence and has been instrumental in the
              production of top range graduates and academia who have had
              tremendous impact, directly or indirectly, on growth and
              development in Nigeria.
            </div>
            <button className="mt-4 mr-[27rem] min-w-[120px]  rounded-md bg-[#830020] px-4 py-2 text-white ">
              Learn More
            </button>
          </div>
          {/* right part of container */}
          <div>
            <img src={collectprize} alt="" />
          </div>
        </div>
      </div>

      {/* bottom part of component */}
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col">
          <span className="font-bold text-center text-[28px] ">
            Study At Unilag
          </span>

          <span className=" mt-[15px]text-[18px]  lg:mx-[80px]  ">
            Our curriculum encourages every student to learn, communicate and
            share knowledge for the benefit of the society. It gives students
            the opportunity to make an original discovery and inspires a passion
            for knowledge and innovation.{" "}
          </span>
        </div>

        <div className=" flex flex-col  mt-[20px]  lg:mx-[20px]">
          <div className="mx-auto">
            <div className=" text-center  flex flex-col m-2">
              <span className="text-[#830020] text-[48px]">#1</span>

              <span className="text-[14px]">
                Top “50 under 50 <br /> Universities in Nigeria”
              </span>
            </div>
          </div>
          <div className="my-2  grid grid-cols-2 gap-x-16  ">
            <div className="flex flex-col ">
              <span className="text-[#830020] text-[48px]">#8</span>
              <span className="text-[14px]">
                African Universities <br />
                Rankings 2022
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#830020] text-[48px]">#500</span>
              <span className="text-[14px] ">
                Global Universities Rankings <br />
                <span className="text-center ml-14">2022</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
