import React from "react";
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BsPaletteFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";

const categories = [
  {
    title: "health",
    icon: <FaHeartbeat className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaCartPlus className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaBullhorn className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaLaptopCode className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <BsPaletteFill className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaHandsHelping className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaChalkboardTeacher className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
  {
    title: "health",
    icon: <FaBusinessTime className="fill-white" />,
    imageSrc: "/assets/images/categories.jpg",
  },
];

const Category = () => {
  const getIconColorClass = (number: number) => {
    let iconClass = "bg-[#36baff]";

    switch (number) {
      case 1:
      case 5:
        iconClass = "bg-[#36baff]";
        break;
      case 2:
      case 6:
        iconClass = "bg-[#f5b83d]";
        break;
      case 3:
      case 7:
        iconClass = "bg-[#dc3545]";
        break;
      case 4:
      case 8:
        iconClass = "bg-[#38b576]";
        break;
      default:
        iconClass = "bg-[#36baff]";
        break;
    }

    return iconClass;
  };
  return (
    <div className="mt-[30px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, index) => (
        <div className="bg-white text-center pb-[30px] rounded overflow-hidden">
          <div className="relative w-full h-[110px]">
            <Image
              src={category.imageSrc}
              alt=""
              layout="fill"
              className=" object-cover object-top"
            />
          </div>
          <div className="-mt-[25px] z-10 relative">
            <div
              className={`w-[50px] h-[50px] flex justify-center items-center mx-auto rounded-full ${getIconColorClass(
                index + 1
              )}`}
            >
              {category.icon}
            </div>
          </div>
          <h4 className="text-xl text-[#333] mt-[10px] capitalize">
            {category.title}
          </h4>
          <a
            href=""
            className="py-2 px-6 mt-[15px] border-[2px] border-[#4d2573] inline-block text-[#4d2573] text-sm cursor-pointer font-semibold rounded-[30px]"
          >
            Browse
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;
