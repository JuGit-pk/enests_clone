import React from "react";
import Category from "./Category";

interface ICategoryProps {
  categoryDescription: string;
  categoryTitle: string;
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

const BrowseCategories = ({
  categoryDescription,
  categoryTitle,
  categories,
}: ICategoryProps) => {
  return (
    <div className="py-16 bg-categoriesBg px-[15px] text-center font-medium ">
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <h1 className="text-white text-[34px]">{categoryTitle}</h1>
        <p className="text-white text-base leading-6 max-w-[680px] mx-auto">
          {categoryDescription}
        </p>
        <Category categories={categories} />
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
