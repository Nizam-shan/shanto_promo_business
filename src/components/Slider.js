import React from "react";
import Slider from "react-slick";
import mobileApp from "../images/mobileApp.jpg";
import devops from "../images/7063786.jpg";
import webDevep from "../images/pngwing.com.png";
import cloud from "../images/cloud.jpg";
import seo from "../images/seo.png";
function AutoPlay() {
  const productDetails = [
    {
      name: "Mobile App Development",
      desc: "Expert mobile app development: creating user-friendly, responsive apps for iOS and Android, tailored to your business needs.",
      img: mobileApp,
    },
    {
      name: "Devops",
      desc: "Providing DevOps services: automating infrastructure, CI/CD pipelines, cloud solutions, and seamless deployment for efficient operations.",
      img: devops,
    },
    {
      name: "Web Support and Development",
      desc: "Offering professional web development services: responsive design, full-stack development, custom solutions, and seamless user experiences.",
      img: webDevep,
    },
    {
      name: "Cloud Support",
      desc: "Delivering cloud support services: scalable cloud infrastructure, migration, management, and optimization for secure and efficient operations.",
      img: cloud,
    },
    {
      name: "Seo Friendly Websites",
      desc: "Offering SEO services: boosting your website's visibility with optimized content, keyword strategy, and performance improvements",
      img: seo,
    },
    // {
    //   name: "Noteworthy technology acquisitions 2021",
    //   desc: " Here are the biggest enterprise technology acquisitions of  2021 so far, in reverse chronological order.",
    //   img: mobileApp,
    // },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    focusOnSelect: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-5">
      <Slider {...settings}>
        {productDetails?.map((item, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <div className="max-w-sm bg-white  rounded-lg shadow-xl dark:bg-white transition-all ease-in-out duration-400 overflow-hidden group ">
              <a href="/">
                <img
                  className="rounded-t-lg object-cover w-full h-56 transition duration-1000 ease-in-out group-hover:scale-[1.15]"
                  src={item?.img}
                  alt="img"
                />
              </a>
              <div className="p-2">
                <a href="/">
                  <h5 className="mb-2 text-2xl font-semibold  tracking-tight text-gray-700 ">
                    {item?.name}
                  </h5>
                </a>
                <p className="mb-3  text-gray-700  text-md font-medium ">
                  {item?.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
