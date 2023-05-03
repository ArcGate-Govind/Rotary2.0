import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeaderCarousel = () => {
  return (
    <>
      <div className="">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={0.1}
          infiniteLoop={true}
        >
          <div className="h-50">
            <img src="/Images/1.png" alt="CarouselImg" />
          </div>
          <div>
            <img src="/Images/2.jpg" alt="CarouselImg" />
          </div>
          <div>
            <img src="/Images/3.png" alt="CarouselImg" />
          </div>
          <div>
            <img src="/Images/4.png" alt="CarouselImg" />
          </div>
          <div>
            <img src="/Images/5.png" alt="CarouselImg" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeaderCarousel;
