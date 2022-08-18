import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const BusinessCard = () => {
  return (
    <div className='border border-secondary-300 px-7 py-9 gap-x-4 my-8 rounded-md flex flex-col md:flex-row'>
      <div className=' text-center w-[13%]'>
        <img src='/assets/images/aam_consultnats_logo_8209522a84_fa524f6aa8.jpg' />
      </div>
      <div className='w-[87%]'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <p className=' text-xl font-raleway font-semibold text-secondary-500'>
              AAM Consultants
            </p>
            <p className='capitalize text-sm font-lato text-secondary-400 mt-1'>
              The best digital marketing company
            </p>
          </div>
          <div className='flex items-center md:items-start space-x-2 font-lato text-primary mt-1'>
            <div className='flex'>
              <AiFillStar fill='#4d2573' size='21px' />
              <AiFillStar fill='#4d2573' size='21px' />
              <AiFillStar fill='#4d2573' size='21px' />
              <AiFillStar fill='#4d2573' size='21px' />
              <AiFillStar fill='#4d2573' size='21px' />
            </div>
            <p className='flex items-center space-x-1 text-sm uppercase'>
              <span>3 Reviews</span>{' '}
              <i className='fas fa-chevron-right mt-[2px]' />
            </p>
          </div>
        </div>
        <p className='py-5 text-secondary-500'>
          {`"AAM Consultants is one of the most trusted SEO services companies in
          the world. We have completed a lot of search engine optimization,
          website develop..."`}
        </p>

        <div className=' text-secondary-400 pt-5 border-t border-t-secondary-400 flex flex-col md:flex-row md:justify-between text-xs gap-y-4'>
          <div className='flex'>
            <p className=' pr-3 flex items-center space-x-1'>
              <i className='far fa-flag' />
              <span className=''>Founded 2016</span>
            </p>
            <p className='px-3 flex items-center space-x-1 border-x border-x-secondary-400'>
              <i className='far fa-user' /> <span>50</span>
            </p>
            <p className='pl-3 flex items-center space-x-1'>
              <i className='fas fa-map-marker-alt' />
              <span>Location</span>
            </p>
          </div>
          <div className='flex '>
            <p className='pr-3 flex items-center space-x-1 border-r border-r-secondary-400 hover:text-primary transition-all'>
              <i className='fas fa-user-circle' />
              <span>View Profile</span>
            </p>
            <p className='pl-3 flex items-center space-x-1 hover:text-primary transition-all'>
              <i className='fas fa-globe' />
              <span>Visit Website</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
