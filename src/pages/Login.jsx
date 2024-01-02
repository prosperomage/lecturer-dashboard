import React from "react";
import unilaglogo from "../assets/LandinPageImages/Ellipse 1.svg";
import { Outlet, Link } from "react-router-dom";
// import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  return (
    <div className=" bg-cover   bg-[url('/src/assets/LandinPageImages/UNI-RANK-banner.svg')] h-screen">
      <div className="flex mx-10 justify-between  ">
        <div className="flex mt-[40px]">
          <div>
            <img src={unilaglogo} alt="logo" />
          </div>

          <div className="mt-2 ml-1 text-white font-bold leading-tight  text-[21px]">
            <span>University</span> <br />
            <span>Of Lagos</span>
          </div>
        </div>
        <div className="flex justify-between mt-[7.5rem]">
          <div className=" bg-[#830020] w-[450px] flex flex-col">
            <h1 className="text-white text-center  text-[18px] m-10">
              Login To Your Account
            </h1>
            <div className=" w-[430px]  ">
              <div className="border-b-2  mx-5">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="border-b-black my-4 w-full  bg-[#830020] "
                />
              </div>

              <div className="border-b-2  mx-5 ">
                <input
                  type="text"
                  placeholder="Password"
                  className=" my-4 w-full  bg-[#830020]  
                      "
                />
              </div>
            </div>

            <span className="text-white w-[160px] ml-auto  text-[14px] mt-4 cursor-pointer ">
              Forgot Password
            </span>
            <Link to={`/dashboard`}>
              <button className="text-[20px] mt-[30px] p-2 rounded-sm bg-white text-[#830020]  w-[260px] ml-20">
                {/* <a href={`/dashboard`}>Login</a> */}
                Login
              </button>
            </Link>

            <h4 className="text-white text-[8px] w-[240px]  ml-[6.4rem] mt-3 mb-5">
              Note: Your default password is your surname in lowercase
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
