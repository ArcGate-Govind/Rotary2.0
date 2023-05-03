import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context";


const Login = ({ setLoginshow, LoginShow }) => {
  // const {onLogin} = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://arcappproject.pythonanywhere.com/loginapi",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    console.log("data",data)
    //  console.log( "fff",onLogin(data))

    if (data.status === "200") {
      const expirationTime = new Date(Date.now() + 600000);
      Cookies.set("authentication_code", data.authentication_code, {
        expires: expirationTime,
      });
    }
    navigate('/');
  };

  const handleClose = () => {
    setLoginshow(!LoginShow);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="">
        <div className="border w-[full]">
          <div className="flex items-center justify-center">
            <img src="Images/rotary-logo12.svg" width="150" height="100" />
            <p className="ml-5 mb-1 text-[#6153fc] text-[1.2rem] font-[600] lg:text-2xl">
              SIGN IN
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-24 px-5 max-w-[560px] m-auto font-karla">
              <p></p>
              <div className="max-w-[500px] w-[100%] border-2 border-slate-200 p-3">
                <label className="max-w-[500px] w-[100%] ">Email</label>
                <input
                  type="text"
                  className="focus:outline-none pt-2 w-[100%] max-w-[500px]"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="max-w-[500px] w-[100%] border-2 border-slate-200 border-t-0 rounded-b-lg bg-white">
                <div className=" p-3">
                  <label className="max-w-[500px] w-[100%]">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="focus:outline-none pt-2 w-[100%] max-w-[500px]"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between w-[96%] mt-2">
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer" />
                  <label className="ml-1 text-slate-600">Remember me</label>
                </div>
                <div className="underline text-slate-600 cursor-pointer">
                  <p>Forgot password?</p>
                </div>
              </div>
              <div className="py-10 w-[100%]">
                <button className="bg-[#6153fc] text-[#f8f8f8] w-[100%] py-4 rounded flex justify-center items-center">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
