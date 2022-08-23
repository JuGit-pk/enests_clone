import React from 'react'
import { IReview } from 'types'
import ReviewCardList from './ReviewCardList'

interface IReviewProps {
  title: string
  description: string
  reviews: IReview[]
}

const ReviewsContainer: React.FC<IReviewProps> = ({
  title,
  reviews,
  description,
}) => {
  return (
    <div className='py-16 px-[15px] text-center font-medium '>
      <div className='max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
        <h1 className='text-[34px]'>{title}</h1>
        <p className='text-[#505050] text-base leading-6 max-w-[680px] mx-auto'>
          {description}
        </p>
        <ReviewCardList reviews={reviews} />
      </div>
    </div>
  )
}

export default ReviewsContainer
