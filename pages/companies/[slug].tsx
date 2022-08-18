import BusinessCard from '@components/companies/BusinessCard'
import Container from '@components/layout/Container'
import Header from '@components/layout/Header'
import Layout from '@components/layout/Layout'
import React from 'react'

const Companies = () => {
  return (
    <Layout>
      <Header heading='Heading' subHeading='subHeading' />
      <Container>
        <div className='py-20 lg:flex lg:gap-x-8 w-full'>
          <aside className='hidden lg:flex lg:flex-col lg:flex-1 lg:rounded-md lg:space-y-8'>
            <div className=' shadow-md p-5 text-sm w-full'>
              <h3 className=' text-2xl text-secondary-500 text-center '>
                Filter By
              </h3>
              <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300 mt-8'>
                <option>All</option>
                <option>1</option>
              </select>
              <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300 mt-4'>
                <option>All</option>
                <option>1</option>
              </select>
              <div>
                <h5 className=' mb-2 mt-4 text-base font-raleway text-secondary-700'>
                  Location
                </h5>
                <div className=' rounded-xl border border-secondary-300 p-4 text-secondary-400'>
                  <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300'>
                    <option>All</option>
                    <option>1</option>
                  </select>
                  <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300 mt-2'>
                    <option>All</option>
                    <option>1</option>
                  </select>
                </div>
                <button className='w-full text-white bg-primary border-2 border-primary hover:text-primary hover:bg-white rounded-full transition-all mt-8 font-semibold px-4 py-2'>
                  Apply
                </button>
              </div>
            </div>
            <div className=' shadow-md p-5 text-sm w-full'>
              <h3 className=' text-2xl text-secondary-500 text-center mb-8 '>
                Sub-Categories
              </h3>
              <ul className=' divide-y divide-primary/10 divide-solid'>
                {[1, 2, 3, 4, 5, 6].map((item, i) => (
                  <li
                    key={i}
                    className='flex justify-between items-center text-base py-3 text-secondary-500'
                  >
                    <p>{`Category ${item}`}</p>
                    <p className='rounded-full py-1 px-3 bg-primary/10 text-sm'>
                      {i}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className='flex-2'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <h2 className='capitalize text-[22px] text-secondary-600 font-raleway font-medium'>
                List of the best Digital Marketing Companies
              </h2>
              <select className='px-4 text-center text-sm border border-gray-300 bg-gray-100 appearance-none w-36 h-9'>
                <option>Select</option>
                <option>1</option>d
              </select>
            </div>
            {/* Cards Lists */}
            <BusinessCard />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Companies

// TODO : Reusable Select Component
// TODO : Reusable Button Component
// TODO : Reusable Header

// TODO : Pagination
// TODO : Search
// TODO : Filter By
