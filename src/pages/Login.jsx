import React from "react";
import unilaglogo from "../assets/LandinPageImages/Ellipse 1.svg";
import { Outlet, Link } from "react-router-dom";
// import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  return (
    <div className="outline bg-gradient-to-r from-yellow-500 from-10% via-slate-200 via-30% to-amber-700 to-90% h-screen ">
      <div className="   flex flex-col ">
        <div className="flex ml-[60px] mt-[40px]">
          <img src={unilaglogo} alt="" />
          <div className="mt-2  text-[24px]">
            <span>University</span> <br />
            <span>Of Lagos</span>
          </div>
        </div>
        <div className="flex justify-between  ">
          <div></div>
          <div className=" bg-[#830020] w-[500px]  mr-[70px] flex flex-col">
            <h1 className="text-white text-center text-[24px] m-10">
              Login To Your Account
            </h1>
            <div className="border-b-2 mx-10">
              <input
                type="text"
                placeholder="Email / Password"
                className="border-b-black my-4 mr-auto  bg-[#830020] "
              />
            </div>

            <div className="border-b-2 mx-10">
              <input
                type="text"
                placeholder="Password"
                className=" my-4  bg-[#830020]  
                      "
              />
            </div>

            <span className="text-white ml-[358px] text-[14px] mt-4 cursor-pointer ">
              Forgot Password
            </span>
            <Link to={`/dashboard`}>
              <button className="text-[20px] mt-[30px] p-2 rounded-sm bg-white text-[#830020] w-[260px] mx-auto">
                {/* <a href={`/dashboard`}>Login</a> */}
                Login
              </button>
            </Link>

            <h4 className="text-white text-[10px] mx-auto mt-4">
              Note: Your default password is your surname in lowercase
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
