import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaClock } from "react-icons/fa";

const reviewData = [
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
  {
    reviewSite: "AAM Consultants",
    reviewMsg:
      "TechnBrains is a reliable company. I have asked them to make an application ...",
    date: "May 3, 2021",
  },
];

const Review = () => {
  return (
    <div className="mt-10 grid gap-8">
      {reviewData.map((review, i) => (
        <div
          key={i}
          className="flex gap-[14px] py-5 px-[15px] items-center border border-[#dfdede] rounded-[5px]"
        >
          <div>
            <div className="w-[94px] h-[94px] text-white bg-[#4d2573] rounded-full flex justify-center items-center">
              <span className="text-[32px] leading-10">FF</span>
            </div>
            <h4 className="text-[#4d2573] text-[13px] mt-1">Hussain Khan</h4>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <a href="" className="text-sm text-[#4d2573] font-medium">
                {review.reviewSite}
              </a>
              <div className="flex">
                <AiFillStar fill="#4d2573" />
                <AiFillStar fill="#4d2573" />
                <AiFillStar fill="#4d2573" />
                <AiFillStar fill="#4d2573" />
                <AiFillStar fill="#4d2573" />
              </div>
            </div>
            <p className="text-base leading-[22px] text-left mt-2 text-[#505050] font-lato">
              "{review.reviewMsg}"
            </p>
            <div className="flex items-center text-xs text-[#aeaab2] mt-3 gap-1">
              <span>
                <FaClock />
              </span>
              {review.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
