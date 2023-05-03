import React from "react";

const HeaderImg = () => {
  return (
    <>
      <div className="relative h-0 mt-12" style={{ paddingTop: "56.25%" }}>
        <img
          className="absolute inset-0 object-cover object-center w-full h-full"
          src="Images/5.png"
          alt="Your Image"
        />
      </div>
    </>
  );
};

export default HeaderImg;
