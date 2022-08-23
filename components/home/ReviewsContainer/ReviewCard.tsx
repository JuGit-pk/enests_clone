import { FaClock } from 'react-icons/fa'
import React from 'react'
import Rating from 'react-rating'
import _ from 'lodash'
import { formatDate } from '@utils/helper'

interface IReview {
  id: string
  rating: number
  review: string
  user: {
    username: string
    firstName: string
    lastName: string
    photo: {
      url: string
      alternativeText: string
    }
  }
  company: {
    slug: string
    name: string
  }
  createdAt: string
}

const Review = ({ review }: { review: IReview }) => {
  return (
    <div className='flex gap-[14px] py-5 px-[15px] items-center border border-[#dfdede] rounded-[5px] min-w-[340px] h-[170px]'>
      <div>
        <div className='w-[94px] h-[94px] text-white bg-[#4d2573] rounded-full flex justify-center items-center overflow-hidden'>
          {review.user.photo?.url && (
            <img
              className='w-full h-full'
              src={`${review.user.photo?.url}`}
              alt={review.user.firstName}
            />
          )}
          {!review.user.photo?.url && (
            <span className='text-[32px] leading-10'>{`${review.user.firstName[0].toUpperCase()}${review.user.lastName[0].toUpperCase()}`}</span>
          )}
        </div>
        <h4 className='text-[#4d2573] text-[13px] mt-1 capitalize'>{`${review?.user?.firstName} ${review?.user?.lastName}`}</h4>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <a
            href={`/profile/${review.company.slug}`}
            className='text-sm text-[#4d2573] font-medium'
          >
            {_.truncate(review?.company?.name, { length: 18 })}
          </a>
          <div className='flex'>
            <Rating
              emptySymbol='far fa-star text-primary'
              fullSymbol='fa fa-star text-primary'
              initialRating={review.rating}
              readonly={true}
            />
          </div>
        </div>
        <p className='text-base leading-[22px] text-left mt-2 text-[#505050] font-lato'>
          {_.truncate(review?.review, { length: 76 })}
        </p>
        <div className='flex items-center text-xs text-[#aeaab2] mt-3 gap-1'>
          <span>
            <FaClock />
          </span>
          {formatDate(review?.createdAt)}
        </div>
      </div>
    </div>
  )
}

export default Review
