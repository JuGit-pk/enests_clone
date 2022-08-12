import React from "react";
import Image from "next/image";

interface ICategoryProps {
  categories: [
    {
      id: string;
      name: string;
      shortName: string;
      slug: string;
      icon: string;
      coverImage: {
        url: string;
        alternativeText: string;
      };
    }
  ];
}

const Category = ({ categories }: ICategoryProps) => {
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
        <div
          key={index}
          className="bg-white text-center pb-[30px] rounded overflow-hidden"
        >
          <div className="relative w-full h-[110px]">
            <Image
              src={category?.coverImage?.url}
              alt=""
              layout="fill"
              className="hover:scale-110 transition-all duration-500 ease-in-out object-cover object-top"
            />
          </div>
          <div className="-mt-[25px] z-10 relative">
            <div
              className={`w-[50px] h-[50px] flex justify-center items-center mx-auto rounded-full ${getIconColorClass(
                index + 1
              )}`}
            >
              <i
                className={`${category.icon} text-white`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <h4 className="text-xl text-[#333] mt-[10px] capitalize">
            {category.name}
          </h4>
          <a
            href=""
            className="py-2 px-6 mt-[15px] border-[2px] border-[#4d2573] inline-block text-[#4d2573] hover:text-white hover:bg-[#4d2573] text-sm cursor-pointer font-semibold rounded-[30px] transition-all"
          >
            Browse
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;
