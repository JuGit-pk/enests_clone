import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

import { IReview } from '../../../types'
import React from 'react'
import ReviewCard from './ReviewCard'
import { sliceIntoChunks } from '@utils/helper'

// const settings = {
//   infinite: true,
//   rows: 2,
//   slidesPerRow: 2,
// }
const ReviewCardList = ({ reviews }: { reviews: IReview[] }) => {
  return (
    // <div className="flex flex-col gap-[14px] py-5 px-[15px] items-center border border-[#dfdede] rounded-[5px] min-w-[340px] overflow-hidden ">
    //   <Swiper
    //     spaceBetween={5}
    //     slidesPerView={3}
    //     onSlideChange={() => console.log("slide change")}
    //     onSwiper={(swiper) => console.log(swiper)}
    //   >
    //     {reviewData.map((review, index) => (
    //       <SwiperSlide key={review.reviewSite}>
    //         <ReviewCard {...review} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <div>
      <Swiper
        spaceBetween={14}
        slidesPerView={3}
        navigation
        modules={[Autoplay, Navigation]}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {sliceIntoChunks(reviews, 2).map((reviews: IReview[], i: number) => (
          <SwiperSlide key={i} className=' mt-8'>
            <div key={i} className='flex flex-col space-y-8'>
              {reviews.map((review: IReview) => (
                <ReviewCard review={review} key={review.id} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewCardList
