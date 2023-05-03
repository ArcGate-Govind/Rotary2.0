import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Directory = () => {
  const [directoryList, setDirectoryList] = useState();
  console.log("vvvv", Cookies.get("authentication_code"));

  useEffect(() => {
    getClubList();
  }, []);
  async function getClubList() {
    const token = Cookies.get("authentication_code");

    const page = 1;
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/club/club_directory/list?page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await data?.json();
    setDirectoryList(json);
    console.log("json", json);
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 px-4 mb-4">
          <div class="p-2 ">
            <h1 className="text-4xl font-bold font-karla  pt-10  ">
              Directory'S(20)
            </h1>
          </div>
        </div>
        <div class="w-full sm:w-1/2 px-4 mb-4">
          <div className="flex flex-col md:flex-row justify-center items-center, sm:flex-row , font-karla ">
            <div className="w-full md:w-1/4 px-2 pt-10">
              <input
                type="text"
                className="w-full  border-gray-300 border p-1 outline-none"
                placeholder="Search By Name"
              />
            </div>
            <div className="w-full md:w-1/4 px-2 pt-10">
              <input
                type="text"
                className="w-full  border-gray-300 border p-1 outline-none"
                placeholder="Search By Club "
              />
            </div>
            <div className="w-full md:w-1/4 px-2 pt-10">
              <input
                type="text"
                className="w-full  border-gray-300 border p-1 outline-none"
                placeholder="Search By City"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light font-karla">
                <thead class="border-b font-medium bg-[rgb(97,83,252)] text-white">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Club
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Role
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {directoryList?.result?.map((items) => {
                    return (
                      <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                         <Link to={"/directoryinfo/" + items.id} key={items.id}> <p className="text-[#6153fc] text-2xl font-[600] cursor-pointer">
                         {items.member_name}
                       </p></Link>
                          <p className="text-xl opacity-80"></p>
                          <p className="text-xl opacity-80">
                            Rotary ID: {items.rotary_id}
                          </p>
                          <p className="text-xl opacity-80">
                            Location: {items.city}, {items.state}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {items.club_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {items.club_role}
                        </td>

                        <td className="whitespace-nowrap  underline text px-6 py-4">
                          {items.email}
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

      <div className="flex flex-col items-center mb-2">
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-white bg-[rgb(97,83,252)] rounded-l hover:bg-[rgb(97,83,240)] dark:bg-[rgb(97,83,252)]  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Prev
          </button>
          <button className="px-4  py-2 text-sm font-medium text-white bg-[rgb(97,83,252)] border-0 border-l border-gray-700 rounded-r hover:bg-[rgb(97,83,240)] dark:bg-[rgb(97,83,240)] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Directory;
