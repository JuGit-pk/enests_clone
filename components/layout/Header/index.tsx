import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

interface IHeaderProps {
  heading: string
  subHeading: string
}
const Header: React.FC<IHeaderProps> = ({ heading, subHeading }) => {
  return (
    <header className=' bg-headerBg bg-no-repeat bg-cover text-secondary-100 border-b border-transparent'>
      <Navbar />
      <div className=' flex justify-center items-center flex-col font-raleway my-16'>
        <h1 className=' text-[40px] uppercase font-medium'>{heading}</h1>
        <p className='space-x-2'>
          <Link href='/'>
            <a className=' hover:underline'>Home</a>
          </Link>
          <i className='fas fa-angle-right ml-auto' />
          <span>{subHeading}</span>
        </p>
      </div>
    </header>
  )
}

export default Header
