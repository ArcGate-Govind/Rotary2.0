import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavbarList } from "../Component/Utils/Constant";

const Footer = () => {
  const informationLink = [
    {
      id: "1",
      title: "RI President",
      url: "#",
    },
    {
      id: "2",
      title: "RI Director",
      url: "#",
    },
    {
      id: "3",
      title: "The Rotary Foundation",
      url: "#",
    },
    {
      id: "4",
      title: "Strategic Plan",
      url: "#",
    },
    {
      id: "5",
      title: "RI Citation",
      url: "#",
    },
    {
      id: "6",
      title: "Leaders From India",
      url: "#",
    },
  ];

  return (
    <>
      <div className="flex w-full, lg:flex-col w-full text-white">
        <div className="w-1/4 py-5 pl-10 pr-1 bg-[#6153fc] lg:w-full">
          <div className="py-8">
            <img src="Images/logo-footer.png" alt="Footer-logo" />
          </div>
          <p className="flex mt-2 text-xl font-karla">
            <span className="mr-2 mt-1">
              <MdLocationOn />
            </span>
            Kunawat & Associates, 65, Panch Sheel Marg, Near Town Hall, Udaipur
            - 313001,
          </p>
          <p className="flex mt-2 text-xl font-karla">
            <span className="mr-2 mt-1">
              <BsFillTelephoneFill />
            </span>
            9829008331, 8619490652
          </p>
          <p className="flex mt-2 text-xl font-karla">
            <span className="mr-2 mt-1">
              <IoMail />
            </span>
            dgkunawat99@gmail.com
          </p>
        </div>
        <div className="w-3/4 flex bg-[#051843]  lg:w-full">
          <div>
            <h1 className="upperCase text-2xl font-karla  px-10 py-5 font-semibold	 ">
              Quick Links
            </h1>
            <div className=" px-10 py-5">
              {NavbarList?.map((d) => {
                return (
                  <Link key={d.id} href={d.url}>
                    <li className="list-none font-karla flex items-center my-3 opacity-90 cursor-pointer">
                      <span className="mr-1">
                        <HiOutlineChevronDoubleRight />
                      </span>
                      {d.title}
                    </li>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="upperCase text-2xl font-karla  px-10 py-5 font-semibold	">
              Information Links
            </h1>
            <div className=" px-10 py-5 ">
              {informationLink?.map((d) => {
                return (
                  <Link key={d.id} href={d.url}>
                    <li className="list-none flex font-karla items-center my-3 opacity-90 cursor-pointer">
                      <span className="mr-1">
                        <HiOutlineChevronDoubleRight />
                      </span>
                      {d.title}
                    </li>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="upperCase text-2xl font-karla f px-10 py-5 font-semibold	">
              Social Links
            </h1>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Footer;
