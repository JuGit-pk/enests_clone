import React from "react";

const CompanyProfile = () => {
  return (
    <section className="bg-companyProfileBg bg-cover bg-no-repeat bg-top py-9 px-4 ">
      <div className="flex flex-col md:flex-row gap-4 items-center max-w-[520px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <div className="flex-1">
          <h1 className="text-[30px] font-medium capitalize">
            Want to Create a Company Profile?
          </h1>
          <p className="text-base leading-6 text-[#505050]">
            It’s time to get found by the right customers! Submit your company
            and boost your business online.
          </p>
          <a
            href=""
            className="text-white bg-[#4d2573] border-[#4d2573] border-[2px] text-sm cursor-pointer font-semibold rounded-[30px] py-2 px-6 shadow-lg mt-10 inline-block"
          >
            Get Listed
          </a>
        </div>
        <div className="relative flex-1">
          <img
            src="/assets/images/company-profile.png"
            className="w-[420px] h-[332px] mx-auto"
            alt="company-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
