import React from "react";
import Category from "./Category";

const BrowseCategories = () => {
  return (
    <div className="py-16 bg-categoriesBg px-[15px] text-center font-medium ">
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <h1 className="text-white text-[34px]">Browse Categories</h1>
        <p className="text-white text-base leading-6 max-w-[680px] mx-auto">
          Navigate an endless list of categories, read authenticated reviews,
          and find the right company to suit your needs efficiently.{" "}
        </p>
        <Category />
        <a
          href=""
          className="border-[2px] border-[#4d2573] py-2 px-6 inline-block bg-white text-[#4d2573]  hover:text-white hover:bg-[#4d2573] text-sm font-semibold cursor-pointer text-center rounded-[30px] mt-[50px] transition-all"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default BrowseCategories;
