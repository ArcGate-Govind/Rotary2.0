import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { NavbarList } from "./Utils/Constant";
import { Link } from 'react-router-dom';

const MobileNav = ({setLocationShow}) => {
  const handleClose =()=>{
    setLocationShow(false)

  }
  return (
    <>
    <div className="shadow-xl w-1/3 locationModal p-2 bg-black">
    <span class="SSFcO icon-close" onClick={handleClose}><AiOutlineClose/></span>
    <div className="flex justify-left  h-[20vh] mt-10 ml-4  ">
    <ul className="flex  flex-col   space-y-4 items-left font-karla">
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
  </div>
    </>
  )
}

export default MobileNav