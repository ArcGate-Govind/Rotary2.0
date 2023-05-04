import React from 'react'
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const EventSlug = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="mt-2 mr-2 flex justify-end">
    <button className="mt-2  ml-0   px-8 py-3 bg-[#6153fc] text-[#f8f8f8] rounded flex items-center font-[600] md:ml-2 md:mt-0   lg:ml-5" onClick={()=>{navigate('/media')}}>
      <span className="mr-2 text-lg ">
        <BsFillArrowLeftSquareFill />
      </span>
      Back
    </button>
    </div>
    </>

  )
}

export default EventSlug