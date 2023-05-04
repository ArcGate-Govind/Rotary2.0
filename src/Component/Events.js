import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Events = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getClubEvent();
  }, []);

  async function getClubEvent() {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/club/club_event/list`
    );
    const json = await data?.json();

    console.log("json", json);
  }

  return (
    <>
    <div className="mt-2 mr-2 flex justify-end">
    <button className="mt-2  ml-0   px-8 py-3 bg-[#6153fc] text-[#f8f8f8] rounded flex items-center font-[600] md:ml-2 md:mt-0   lg:ml-5" onClick={()=>{navigate('/')}}>
      <span className="mr-2 text-lg ">
        <BsFillArrowLeftSquareFill />
      </span>
      Back
    </button>
    </div>
      <div className="w-[100%] flex justify-center items-center">
        <h1 className="font-karla text-[#6153fc]  text-4xl font-bold border-b-4 cursor-pointer border-[#051843] hover ">
          Events
        </h1>
      </div>

      <div className="w-full h-auto flex flex-wrap mt-4">
        <div className="w-[30%] drop-shadow m-2  grow bg-white h-[30vh] border-b-4  border-indigo-500"></div>
        <div className="w-[30%] drop-shadow m-2 grow bg-white h-[30vh] border-b-4 border-indigo-500"></div>
        <div className="w-[30%] drop-shadow m-2  grow bg-white  h-[30vh] border-b-4 border-indigo-500"></div>
      </div>
    </>
  );
};

export default Events;
