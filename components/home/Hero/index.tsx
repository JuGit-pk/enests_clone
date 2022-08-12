import CategoryBox from "../CategoryBox";
import Container from "../../layout/Container";
import Image from "next/image";
import LocationIcon from "../../../public/assets/images/loc-icon.png";
import React from "react";
interface IHeroProps {
  mainHeading: string;
  subHeading: string;
  textUnderSearchBox: string;
  categories: [
    {
      id: string;
      name: string;
      shortName: string;
      slug: string;
      icon: string;
    }
  ];
}

const Hero: React.FC<IHeroProps> = ({
  categories,
  mainHeading,
  subHeading,
  textUnderSearchBox,
}) => {
  return (
    <Container className="text-center pt-7 pb-1 lg:pt-40 lg:h-[89vh]">
      <div className=" mb-10 sm:mb-14 font-raleway">
        <h1 className=" text-4xl leading-[50px] md:text-[56px] font-bold uppercase md:leading-[60px]">
          {mainHeading}
        </h1>
        <p className="text-lg md:text-2xl mt-3">{subHeading}</p>
      </div>
      <div className="w-full bg-white/40 rounded-md my-4 p-4 text-black space-x-0 space-y-1 md:space-y-0 md:space-x-4 flex justify-center items-center flex-col md:flex-row lg:max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="I'm looking for..."
          className="w-full md:w-1/4 lg:w-3/6 py-3 px-6 text-lg rounded-md flex-1 outline-primary placeholder:text-gray-600  md:flex-none"
        />
        <div className="relative mb-6 w-full md:w-2/4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
            <Image src={LocationIcon} width="17" height="17" alt="location" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="w-full py-3 px-6 pl-10 text-lg rounded-md flex-1  outline-primary placeholder:text-gray-600"
            placeholder="Location"
          />
        </div>
        <button className="w-full md:max-w-[184px] justify-center uppercase bg-primary border hover:bg-primary/70 transition-all border-white py-3 px-10 flex items-center text-white font-raleway text-lg rounded-md">
          <span>
            <svg
              className="h-6 w-6 text-white relative -top-[2px] -left-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          Search
        </button>
      </div>
      <p className=" text-lg">{textUnderSearchBox}</p>
      <div className="flex flex-wrap gap-3 justify-center pt-8 pb-4">
        {categories?.map((category, i) => (
          <CategoryBox title={category.name} key={category.name + i}>
            {category.icon}
          </CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
