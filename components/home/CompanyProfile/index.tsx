import React from "react";

interface ICompanyProfile {
  listingTitle: string;
  listingDescription: string;
  listingImage: {
    url: string;
    alternativeText: string;
  };
}

const CompanyProfile = ({
  listingDescription,
  listingTitle,
  listingImage,
}: ICompanyProfile) => {
  return (
    <section className="bg-companyProfileBg bg-cover bg-no-repeat bg-top py-9 px-4 ">
      <div className="flex flex-col md:flex-row gap-4 items-center max-w-[520px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <div className="flex-1">
          <h1 className="text-[30px] font-medium capitalize">{listingTitle}</h1>
          <p className="text-base leading-6 text-[#505050]">
            {listingDescription}
          </p>
          <a
            href=""
            className="text-white bg-[#4d2573] border-[#4d2573] border-[2px]  hover:text-[#4d2573] hover:bg-white transition-all text-sm cursor-pointer font-semibold rounded-[30px] py-2 px-6 shadow-lg mt-10 inline-block"
          >
            Get Listed
          </a>
        </div>
        <div className="relative flex-1">
          <img
            src={listingImage?.url}
            className="w-[420px] h-[332px] mx-auto"
            alt={listingImage?.alternativeText}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
