import _ from 'lodash'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ICompany } from 'types/requests'
import Link from 'next/link'
import Image from 'next/image'

interface ICompanyCardProps {
  company: ICompany
}
const CompanyCard: React.FC<ICompanyCardProps> = ({ company }) => {
  const {
    name,
    tagline,
    summary,
    createdAt,
    companySize,
    country,
    city,
    website,
    logo,
  } = company
  console.log(companySize, ' companySize')
  return (
    <div className='border border-secondary-300 px-7 py-9 gap-x-4 my-8 rounded-md flex flex-col md:flex-row'>
      <div className=' text-center w-[13%] relative'>
        <Image
          src={logo.url}
          alt='company card logo'
          objectFit='contain'
          width='100'
          height='100'
        />
      </div>
      <div className='w-[87%]'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <p className=' text-xl font-raleway font-semibold text-secondary-500'>
              {name}
            </p>
            <p className='capitalize text-sm font-lato text-secondary-400 mt-1'>
              {_.truncate(tagline, { length: 47 })}
            </p>
          </div>
          <div className='flex items-center md:items-start space-x-2 font-lato text-primary mt-1'>
            <div className='flex'>
              <AiFillStar fill='#4d2573' size='18px' />
              <AiFillStar fill='#4d2573' size='18px' />
              <AiFillStar fill='#4d2573' size='18px' />
              <AiFillStar fill='#4d2573' size='18px' />
              <AiFillStar fill='#4d2573' size='18px' />
            </div>
            <p className='flex items-center space-x-1 text-sm uppercase'>
              <span>3 Reviews</span>{' '}
              <i className='fas fa-chevron-right mt-[2px]' />
            </p>
          </div>
        </div>
        <p className='py-5 text-secondary-500'>{`"${_.truncate(summary, {
          length: 155,
        })}"`}</p>

        <div className=' text-secondary-400 pt-5 border-t border-t-secondary-400 flex flex-col md:flex-row md:justify-between text-xs gap-y-4'>
          <div className='flex'>
            <p className=' pr-3 flex items-center space-x-1'>
              <i className='far fa-flag' />
              <span className=''>{`Founded ${new Date(
                createdAt
              ).getFullYear()}`}</span>
            </p>
            <p className='px-3 flex items-center space-x-1 border-x border-x-secondary-400'>
              <i className='far fa-user' /> <span>{companySize}</span>
            </p>
            <p className='pl-3 flex items-center space-x-1'>
              <i className='fas fa-map-marker-alt' />
              <span>{`${city}, ${country}`}</span>
            </p>
          </div>
          <div className='flex '>
            <p className='pr-3 flex items-center space-x-1 border-r border-r-secondary-400 hover:text-primary transition-all'>
              <i className='fas fa-user-circle' />
              <span>View Profile</span>
            </p>
            <Link href={website}>
              <a
                className='pl-3 flex items-center space-x-1 hover:text-primary transition-all'
                target='_blank'
              >
                <i className='fas fa-globe' />
                <span>Visit Website</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard

// TODO: add company reviews
// TODO: add profile link
