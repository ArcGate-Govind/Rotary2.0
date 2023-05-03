import React, { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Media() {
  const [mediaList, setMediaList] = useState();
  console.log("mediaList", mediaList);

  useEffect(() => {
    getMediaLIst();
  }, []);

  async function getMediaLIst() {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/media_gallery/media/list`,
      {
        method: "GET",
      }
    );
    const json = await data?.json();
    setMediaList(json.data);
  }
  if (!mediaList) return null;

  return mediaList.length === 0 ? (
    <p>gfdgdfbgf00</p>
  ) : (
    <>
      <div className="mt-2 mr-2 flex justify-end">
        <button className="mt-2  ml-0   px-8 py-3 bg-[#6153fc] text-[#f8f8f8] rounded flex items-center font-[600] md:ml-2 md:mt-0   lg:ml-5">
          <span className="mr-2 text-lg ">
            <BsFillArrowLeftSquareFill />
          </span>
          Back
        </button>
      </div>
      <h1 className="text-center  text-4xl font-[500] mt-10 font-karla text-[#6153fc] ">
        Media
      </h1>
      <div className="flex mb-10   flex-wrap mt-10 mx-10 justify-center">
        {mediaList?.map((item) => {
          return (
            <Link to={"/mediaslug/" + item.id} key={item.id}>
              {" "}
              <div className="w-96 h-52 shadow-xl  rounded-lg flex  mx-auto my-10 hover: shadow-[0 2px 6px rgba(0,0,0,0.15)]">
                <div className="w-full  hover:bg-[#6151fc] hover:opacity-50 hover:boreder opacity-50 hover:text-white text-black border-b-4 border-indigo-500 bg-[#f9f9fb] flex items-center cursor-pointer justify-center pl-5">
                  <p className=" text-l font-semibold cursor-pointer font-karla">
                    {" "}
                    {item.title.length > 100
                      ? item.title.slice(0, 100) + "  ..."
                      : item.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Media;
