import React from "react";
import Slider from "react-slick";
import mobileApp from "../images/icons8-mobile-app-development-68.png";
import devops from "../images/icons8-jenkins.svg";

import cloud from "../images/icons8-google-cloud.svg";

import aws from "../images/icons8-aws.svg";
import kuber from "../images/icons8-kubernetes.svg";
import sap from "../images/icons8-sap.svg";
function ProductSliders() {
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
      img: aws,
    },
    {
      name: "Cloud Support",
      desc: "Delivering cloud support services: scalable cloud infrastructure, migration, management, and optimization for secure and efficient operations.",
      img: cloud,
    },
    {
      name: "Seo Friendly Websites",
      desc: "Offering SEO services: boosting your website's visibility with optimized content, keyword strategy, and performance improvements",
      img: kuber,
    },
    {
      name: "Noteworthy technology acquisitions 2021",
      desc: " Here are the biggest enterprise technology acquisitions of  2021 so far, in reverse chronological order.",
      img: sap,
    },
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
    <div className="slider-container p-5 mx-auto w-[70%] bg-transparent">
      <Slider {...settings}>
        {productDetails?.map((item, index) => (
          <div className="w-full h-auto flex justify-center">
            <img className="object-cover w-28" src={item?.img} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSliders;
