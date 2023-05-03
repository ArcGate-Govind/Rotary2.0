import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarList } from "./Utils/Constant";
import { GoGrabber } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileNav,setMobileNav]=useState(false)
  const openMobileNav = ()=>{
    setMobileNav(true)
  }
  return (
    <>
      <div className="w-full h-20 mb-12">
        <div className="top-nav   flex  justify-between h-12 w-[100%] ">
          <div className="text-white p-2 font-karla break-words ">
            Kunawat & Associates, 65, Panch Sheel Marg, Near Town Hall, Udaipur
          </div>
          <div className="flex  p-2  font-karla">
            Follow:
            <span className="mt-1">
              <FaFacebookF />
            </span>
            <span className="mt-1">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="flex  h-20 w-[100%] navbar">
          <div className="w-1/5 flex justify-center m-2">
            <img
              src="Images/Rotary-logo.png"
              alt="Rotary-logo"
              width="175"
              height="79"
              className="bg-white ml-4 object-fill"
            />
          </div>
           
          <div className="navbar-hidden w-3/5 m-2  ">
          
          
            <ul className="flex space-x-3 pt-5 justify-center items-center font-karla">
              {NavbarList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" hover:border-b-4 border-indigo-500 md:ml-5 "
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-1/5 flex justify-end mt-2 m-4 marginauto">
          <GoGrabber className="hamburger w-8 h-8 text-white mt-3 mr-2" onClick={openMobileNav}/>
            <Link to={"/login/"}><button className=" bg-white px-4 py-0 mt-2 mb-2 ml-0 mr-0 rounded font-karla h-10">
            Login
          </button></Link>
          </div>
        </div>
      </div>
     
      
    </>
  );
};

export default Navbar;
