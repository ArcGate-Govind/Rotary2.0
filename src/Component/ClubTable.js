import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import AppContext from "../Context/Context";

const ClubTable = () => {
  const [clubList, setClubList] = useState([]);
  const navigate = useNavigate();
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    getClubList();
  }, []);
  async function getClubList() {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/club/list?page=${1}`
    );
    const json = await data?.json();
    setState({ metadata: json.meta_data });
    setClubList(json);
  }

  async function handleChangePage(e, value) {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/club/list?page=${
        value == "next"
          ? state?.metadata?.currentPage + 1
          : state?.metadata?.currentPage - 1
      }`
    );
    const json = await data?.json();
    setState({ metadata: json.meta_data })
    setClubList(json);
  }

  return (
    <>
      <div className="mt-2 mr-2 flex justify-end">
        <button
          className="mt-2  ml-0   px-8 py-3 bg-[#6153fc] text-[#f8f8f8] rounded flex items-center font-[600] md:ml-2 md:mt-0   lg:ml-5"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="mr-2 text-lg ">
            <BsFillArrowLeftSquareFill />
          </span>
          Back
        </button>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 px-4 mb-4">
          <div className="p-2 ">
            <h1 className="text-4xl font-bold font-karla  pt-10  ">
              CLUB'S(20)
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-4 mb-4">
          <div className="flex flex-col md:flex-row justify-center items-center, sm:flex-row , font-karla ">
            <div className="w-full md:w-1/4 px-2 pt-10">
              <input
                type="text"
                className="w-full  border-gray-300 border p-1 outline-none"
                placeholder="Search By Name"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light font-karla">
                <thead className="border-b font-medium bg-[rgb(97,83,252)] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Club Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Club Officers
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Assistant Governer
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Club Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total Members
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clubList?.result?.map((item) => {
                    return (
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <Link to={"/clubinfo/" + item.id} key={item.id}>
                            <p className="text-[#6153fc] text-xl font-[600] cursor-pointer">
                              {item?.name}
                            </p>
                          </Link>
                          <p className="text-l opacity-80">
                            Club id: {item?.rotary_club_id} ({item?.club_type})
                          </p>
                          <p className="text-m opacity-80">
                            Location: {item?.city}, {item?.state}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <p>President: {item?.club_officers["President"]}</p>
                          <p>Secretary: {item?.club_officers["Secretary"]}</p>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <p>{item?.assistant_governer}</p>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item?.club_type}
                        </td>
                        <td className="whitespace-nowrap  underline text px-6 py-4">
                          {item?.club_member_count} Active Members
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-4">
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={state?.metadata?.currentPage == 1 && true}
            className="px-4 py-2 text-sm font-medium text-white bg-[rgb(97,83,252)] rounded-l hover:bg-[rgb(97,83,252)] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={(e) => handleChangePage(e, "prev")}
          >
            Prev
          </button>
         <span className="flex justify-center items-center text-white bg-[rgb(97,83,252)] w-5 rounded-full h-5 m-2 ">{state?.metadata?.currentPage}</span>
          <button
          disabled={state?.metadata?.currentPage == state.metadata.pageCount && true}
            className="px-4 py-2 text-sm font-medium text-white bg-[rgb(97,83,252)] border-0 border-l border-gray-700 rounded-r hover:bg-[rgb(97,83,252)] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={(e) => handleChangePage(e, "next")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ClubTable;
