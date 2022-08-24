import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useQuery } from '@apollo/client'
import BusinessCard from '@components/companies/CompanyCard'
import Container from '@components/layout/Container'
import Header from '@components/layout/Header'
import Layout from '@components/layout/Layout'
import Paginator from '@components/ui/Paginator'
import SelectBox from '@components/ui/SelectBox'
import { PER_PAGE_COMPANIES } from '@config/constants'
import { COMPANIES_LISTING_QUERY } from '@graphql/queries/getCompaniesListing'
import { unslugify } from '@utils/helper'
import _ from 'lodash'
import { ICompaniesListingQuery } from 'types/requests'

interface IFilter {
  'category.slug': string
  subCategoryUrl?: string
}

export const Companies = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState<IFilter>({ 'category.slug': '' })

  const handleSubCategoryClick = (
    e: React.MouseEvent<HTMLLIElement>,
    url: string
  ): void => {
    e.preventDefault()
    router.push(`/company/${router.query.category}/${url}`)
  }

  const { data, loading } = useQuery<ICompaniesListingQuery>(
    COMPANIES_LISTING_QUERY,
    {
      variables: {
        category: filter['category.slug'],
        categorySlug: filter['category.slug'],
        subCategory: unslugify(filter.subCategoryUrl || ''),
        limit: PER_PAGE_COMPANIES,
        offset: (currentPage - 1) * PER_PAGE_COMPANIES,
        where: {
          ...filter,
          status: 'Approved',
        },
      },
    }
  )

  const totalCompanies = data?.companiesCount || 0
  let countries = data?.countries
  countries = _.sortBy(countries, (country) => _.deburr(country.name))
  const companies = data?.companies

  const handlePageClick = (e: number) => {
    setCurrentPage(e)
  }

  useEffect(() => {
    if (typeof currentPage == 'number' && router.query.category) {
      router.query.page = currentPage.toString()
      router.push(router)
      // router.push(
      //   `/company/${router.query.category}/${router.query.subcategory}?page=${currentPage}`
      // )

      // router.push(
      //   {
      //     pathname: `/company/${router.query.category}`,
      //     query: { page: currentPage },
      //   },
      //   undefined,
      //   { shallow: true }
      // )
    }
    // don't know why `router` in the dep. array, causing infinite loop
  }, [currentPage])

  useEffect(() => {
    if (router.query.subcategory) {
      setFilter({
        'category.slug': router.query.category as string,
        subCategoryUrl: router.query.subcategory as string,
      })
    } else if (router.query.category) {
      setFilter({
        'category.slug': router.query.category as string,
      })
    }
  }, [router.query.category, router.query.subcategory])
  return (
    <Layout
      seoTitle={data?.companiesListingMetadata.pageTitle}
      seoDescription={data?.companiesListingMetadata.metaDescription}
    >
      <Header
        heading={unslugify(filter['category.slug'])}
        subHeading={unslugify(filter['category.slug'])}
      />
      <Container>
        <div className='py-20 lg:flex lg:gap-x-8 w-full'>
          <aside className='hidden lg:flex lg:flex-col lg:flex-1 lg:rounded-md lg:space-y-8'>
            <div className=' shadow-md p-5 text-sm w-full'>
              <h3 className=' text-2xl text-secondary-500 text-center '>
                Filter By
              </h3>
              <SelectBox options={[1, 2, 3, 4, 5]} className='mt-8' />
              <SelectBox options={[1, 2, 3, 4, 5]} className='mt-4' />
              <div>
                <h5 className=' mb-2 mt-4 text-base font-raleway text-secondary-700'>
                  Location
                </h5>
                <div className=' rounded-xl border border-secondary-300 p-4 text-secondary-400'>
                  <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300'>
                    {countries.map((country) => (
                      <option key={country.alpha2Code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
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
            {!router.query.subcategory && (
              <div className=' shadow-md p-5 text-sm w-full'>
                <h3 className=' text-2xl text-secondary-500 text-center mb-8 '>
                  Sub-Categories
                </h3>
                <ul className=' divide-y divide-primary/10 divide-solid'>
                  {data?.subCategoriesCompanyCount.map(
                    ({ _id, count, url: subCategorySlug }) => (
                      <li
                        key={_id + count}
                        className='flex justify-between items-center text-base py-3 text-secondary-500 '
                        onClick={(e) =>
                          handleSubCategoryClick(e, subCategorySlug)
                        }
                      >
                        <p className='hover:text-primary transition-all cursor-pointer'>
                          {_id}
                        </p>
                        <p className='rounded-full py-1 px-3 bg-primary/10 text-sm hover:text-primary transition-all'>
                          {count}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </aside>
          <div className='flex-2'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <h2 className='capitalize text-[22px] text-secondary-600 font-raleway font-medium'>
                {data?.companiesListingMetadata.listingTitle}
              </h2>
              <select className='px-4 text-center text-sm border border-gray-300 bg-gray-100 appearance-none w-36 h-9'>
                <option>Select</option>
                <option>1</option>d
              </select>
            </div>
            {loading && <p>Loading 🏃‍♀️🏃🏃‍♂️💨</p>}
            {data && data.companies.length < 1 && (
              <h3 className='font-raleway text-primary/80'>Nothing Found 🥲</h3>
            )}

            {/* Cards Lists */}
            {companies?.map((company, i) => (
              <BusinessCard key={i} company={company} />
            ))}
            {totalCompanies / PER_PAGE_COMPANIES > 1 && (
              <div>
                <Paginator
                  onChange={handlePageClick}
                  currentPage={
                    (router.query.page && +router.query.page) || currentPage
                  }
                  itemsCountPerPage={PER_PAGE_COMPANIES}
                  totalItemsCount={totalCompanies}
                  pageRangeDisplayed={5}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

// TODO : Reusable Select Component
// TODO : Reusable Button Component
// TODO : Reusable Header

// TODO : Pagination
// TODO : Search
// TODO : Filter By

// TODO : See the behavior of the e and currentPage, currentPage in the handlePageClick is behind and fix this using useEffect
