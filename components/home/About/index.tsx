import Container from "../../layout/Container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Container className="flex flex-col md:flex-row py-16 lg:py-20">
      <div className="md:flex-1 md:text-center px-4 relative w-full h-full">
        <Image
          src="/assets/images/about.jpg"
          alt="multiple people doing work on their laptop on a table"
          width="540px"
          height="340px"
          className=" hover:scale-110 transition-all duration-500 ease-in-out"
        />
        <div className=" h-3/5 w-4/5 bg-[#f1edf5] absolute md:top-14 lg:top-32 -z-10  hidden md:block xl:hidden"></div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="font-raleway text-[#333] text-[34px] md:mt-4 lg:mt-8">
          About Us
        </h2>
        <p className=" mt-6 lg:mt-5 text-[#505050]">
          Enests is the world’s leading business listing site where you can find
          top companies or better service providers, read or write reviews and
          make buying decisions. Our purpose is to connect people with great
          agencies or businesses to meet their needs.
        </p>
        <button className="bg-primary text-white rounded-full hover:bg-white hover:text-primary py-2 px-6 border-2 border-transparent hover:border-2 hover:border-primary transition-all mt-12 md:mt-10 text-sm font-semibold">
          Read More
        </button>
      </div>
    </Container>
  );
};

export default About;
