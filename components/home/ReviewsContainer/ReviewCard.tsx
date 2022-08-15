import { AiFillStar } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import React from "react";

interface IReview {
  reviewSite: string;
  reviewMsg: string;
  date: string;
}

const Review: React.FC<IReview> = ({ reviewMsg, reviewSite, date }) => {
  return (
    <div className="flex gap-[14px] py-5 px-[15px] items-center border border-[#dfdede] rounded-[5px] min-w-[340px]">
      <div>
        <div className="w-[94px] h-[94px] text-white bg-[#4d2573] rounded-full flex justify-center items-center">
          <span className="text-[32px] leading-10">FF</span>
        </div>
        <h4 className="text-[#4d2573] text-[13px] mt-1">Hussain Khan</h4>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <a href="" className="text-sm text-[#4d2573] font-medium">
            {reviewSite}
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
          {`"${reviewMsg}"`}
        </p>
        <div className="flex items-center text-xs text-[#aeaab2] mt-3 gap-1">
          <span>
            <FaClock />
          </span>
          {date}
        </div>
      </div>
    </div>
  );
};

export default Review;
