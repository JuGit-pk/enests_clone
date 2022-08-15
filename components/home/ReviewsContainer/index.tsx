import React from "react";
import ReviewCardList from "./ReviewCardList";

const ReviewsContainer = () => {
  return (
    <div className="py-16 px-[15px] text-center font-medium ">
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <h1 className="text-[34px]">Recent Reviews</h1>
        <p className="text-[#505050] text-base leading-6 max-w-[680px] mx-auto">
          Browse reviews from 100% verified users to choose the right company
          with confidence.
        </p>
        <ReviewCardList />
      </div>
    </div>
  );
};

export default ReviewsContainer;
