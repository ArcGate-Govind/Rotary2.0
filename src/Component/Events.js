import React, { useEffect } from "react";

const Events = () => {
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
      <div className="w-[100%] flex justify-center items-center">
        <h1 className="font-karla text-4xl font-bold border-b-4 cursor-pointer border-[#051843] hover ">
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
