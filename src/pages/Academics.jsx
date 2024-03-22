import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import DashNavbar from "../components/DashNavbar";
import SideBar from "../components/SideBar";
import CI from "../assets/Frame 174.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import sliderData from "../slider.json";

const Academics = () => {
  return (
    <div>
      <DashNavbar />
      <div className="flex mt-6">
        <SideBar />
        <div className=" w-full lg:ml-6 p-1">
          {/* image goes here */}
          <div className="outline outline-blue-500 w-[100%] mt-4 h-[150px] bg-[url('/src/assets/amy-hirschi-uwpo02K55zw-unsplash.jpg')] bg-cover ">
            <h2 className="text-white font-bold  w-[30px] mt-auto">
              ACADEMICS
            </h2>
          </div>
          <div className="  lg:w-[680px] font-medium text-center m-auto mt-5">
            By working closely across campus, we discover fresh insights through
            joined up thinking to create an environment where learning
            flourishes.
          </div>

          {/* the  issue starts here */}

          {/* faculties and departments  goes here  */}
          <div className=" mt-[40px] outline-dotted p-4  bg-gray-200  ">
            {/* upper div */}
            <div className="outline outline-blue-400 ">
              <div className="p-6 text-white">
                <span className="  mb-3 md:text-[40px]">
                  Faculties and Departments{" "}
                </span>
                <div className="md:text-[20px]">
                  Every faculty is equipped with providing the full range of
                  creative rigor, offering students the opportunity to explore,
                  discover and realise their full potential in their chosen
                  career
                </div>
              </div>
            </div>

            {/* lower div */}
            <div className="outline outline-red-400 bg-white   mt-[12px]   ">
              {/* <Swiper
                spaceBetween={90}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="bg-white outline outline-amber-500 p-5 m-5 flex flex-col ">
                  <div className="text-[#830020] font-bold min-w-[360px] md:text-[28px]   outline ">
                    FACULTY OF ENGINEERING
                  </div>
                  <div className="mt-3">
                    The faculty of engineering encompasses transformational
                    reserach and teaching areas as diveverse as
                    computer/civil/systems/biomedical/chemical/electrical/mechanical
                    engineering
                  </div>
                  <div className="mt-4 ml-[1rem]">
                    <div className="flex text-[#0055A5] cursor-pointer">
                      <div className="font-semibold">
                        VISIT THE FACULTY WEBSITE
                      </div>
                      <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper> */}
              {/* block one  */}
              <div className="m-6 p-4">
                <div className="text-[#830020] font-semibold  md:text-[20px]   ">
                  <h1 className=" m-[17px] ">FACULTY OF ENGINEERING</h1>
                </div>
                <div className="mt-3   m-3">
                  The faculty of engineering encompasses transformational
                  reserach and teaching areas as diveverse as
                  computer/civil/systems/
                  biomedical/chemical/electrical/mechanical engineering
                </div>
                <div className="mt-4 ml-[1rem]">
                  <div className="flex text-[#0055A5] cursor-pointer">
                    <div className="font-semibold">
                      VISIT THE FACULTY WEBSITE
                    </div>
                    <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* itemszzz */}

          <div>
            <div>
              <div className="md:flex mt-5">
                <div>
                  <img src={CI} alt="communityimpact" />
                </div>
                <div className="flex flex-col ml-5">
                  <h1 className="text-[#830020] font-bold text-[28px] w-[70px] ml-2 ">
                    SDGs
                  </h1>
                  <div className="lg:w-[500px] mt-3">
                    Join the United Nations to reform the world, eradicate
                    poverty, and protect the planet to ensure everyone enjoy
                    peace and prosperity.
                  </div>
                  <div className="mt-4 ml-[1rem]">
                    <div className="flex text-[#0055A5] cursor-pointer">
                      <div className="font-bold">FIND OUT MORE</div>
                      <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:flex mt-9">
                <div>
                  <img src={CI} alt="communityimpact" />
                </div>
                <div className="flex flex-col ml-5">
                  <h1 className="text-[#830020] font-bold text-[28px] w-[170px] ml-2 ">
                    MY PROFILE
                  </h1>
                  <div className="lg:w-[500px] mt-3">
                    Join the United Nations to reform the world, eradicate
                    poverty, and protect the planet to ensure everyone enjoy
                    peace and prosperity.
                  </div>
                  <div className="mt-4 ml-[1rem]">
                    <div className="flex text-[#0055A5] cursor-pointer">
                      <div className="font-bold">EDIT PROFILE</div>
                      <IoArrowForwardOutline className="mt-1 ml-5 w-5 h-5  " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
