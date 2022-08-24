import React from 'react'
import Pagination from 'react-js-pagination'

interface IPaginatorProps {
  onChange: (e: number) => void
  currentPage: number
  itemsCountPerPage: number
  totalItemsCount: number
  pageRangeDisplayed: number
}

const Paginator: React.FC<IPaginatorProps> = ({
  onChange,
  currentPage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
}) => {
  return (
    //   nextLabel={'»'}
    //   previousLabel={'«'}
    <Pagination
      activePage={currentPage}
      onChange={onChange}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={pageRangeDisplayed}
      linkClass='focus:shadow-paginator w-9 h-9 flex justify-center items-center text-secondary-700  border border-gray-300 rounded-full hover:bg-primary hover:text-white transition-all'
      activeLinkClass='focus:shadow-paginator text-secondary-100 bg-primary'
    />
  )
}

export default Paginator
