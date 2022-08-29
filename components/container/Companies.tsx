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
import { Combobox, Transition } from '@headlessui/react'
import { unslugify } from '@utils/helper'
import _ from 'lodash'
import { ICompaniesListingQuery } from 'types/requests'

interface IFilter {
  'category.slug': string
  subCategoryUrl?: string
  country?: string
  city?: string
  companySize_gte?: string
  companySize_lte?: string
  _sort?: string
  rating?: string
}

export const Companies = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState<IFilter>({ 'category.slug': '' })
  const [selectedCountry, setSelectedCountry] = useState('')
  const [query, setQuery] = useState('')

  const { data, loading, error } = useQuery<ICompaniesListingQuery>(
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
  let countries = data?.countries
  countries = _.sortBy(countries, (country) => _.deburr(country.name)) // countries are sorted alphabetically

  const totalCompanies = data?.companiesCount || 0 // total companies in the database
  const companies = data?.companies

  const handleSubCategoryClick = (
    e: React.MouseEvent<HTMLLIElement>,
    url: string
  ): void => {
    e.preventDefault()
    router.push(`/companies/${router.query.category}/${url}`)
  }

  const handlePageClick = (e: number) => {
    setCurrentPage(e)
  }

  const filteredCountries =
    query === ''
      ? countries
      : countries?.filter((country) => {
          return country.name.toLowerCase().includes(query.toLowerCase())
        })

  // page in the query
  useEffect(() => {
    if (router.query) {
      if (totalCompanies >= PER_PAGE_COMPANIES && currentPage >= 1) {
        router.query.page = currentPage.toString()
        router.push(router)
      }
    }
  }, [currentPage, totalCompanies])
  // filtration of countries based on the query
  useEffect(() => {
    if (data && router.query) {
      if (router.query.category) {
        setFilter({
          'category.slug': router.query.category as string,
        })
      }
      if (router.query.subcategory) {
        setFilter({
          'category.slug': router.query.category as string,
          subCategoryUrl: router.query.subcategory as string,
        })
      }
      //   if (selectedCountry) {
      //     // to get the code of the country
      //     const alpha2code = countries?.find(
      //       (c) => c.name === selectedCountry
      //     )?.alpha2Code
      //     setFilter((previous) => {
      //       return {
      //         ...previous,
      //         country: alpha2code,
      //       }
      //     })
      //   }
    }
  }, [router.query.category, router.query.subcategory])
  // console area
  console.log('🔥')
  console.log(currentPage, 'currentPage')
  console.log(router.query.category, router.query.subcategory)
  console.log(totalCompanies, companies, 'totalCompanies, companies')
  console.log({
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
  })
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
              {data && (
                <div>
                  <h5 className=' mb-2 mt-4 text-base font-raleway text-secondary-700'>
                    Location
                  </h5>
                  <div className='rounded-xl border border-secondary-300 p-4 text-secondary-400 overflow-hidden'>
                    {/* Autocomplete for Country */}
                    <Combobox
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e)}
                    >
                      <Combobox.Input
                        className='px-4 py-2 border w-full border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] block rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out'
                        placeholder='Country'
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <Transition
                        enter='transition duration-100 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-75 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Combobox.Options className='mt-2 w-[100%] z-10 rounded-[4px] border border-[rgba(0,0,0,.125)] overflow-hidden'>
                          {filteredCountries.slice(0, 7).map((country) => (
                            <Combobox.Option
                              key={country.alpha2Code}
                              value={country.name}
                              className='px-4 py-2 text-[#495057] hover:bg-primary/90 border-l-4 border-l-transparent hover:border-l-secondary-400 hover:text-secondary-100 w-full text-base bg-white font-raleway mb-[-1px] cursor-pointer'
                            >
                              <li>{country.name}</li>
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </Transition>
                    </Combobox>
                    <select className='w-full px-4 py-2 bg-gray-100 border border-secondary-300 mt-2'>
                      <option>All</option>
                      <option>1</option>
                    </select>
                  </div>
                  <button className='w-full text-white bg-primary border-2 border-primary hover:text-primary hover:bg-white rounded-full transition-all mt-8 font-semibold px-4 py-2'>
                    Apply
                  </button>
                </div>
              )}
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
            {error && <p>ERROR here 🫤</p>}
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
// TODO : Headless ui Combobox Component needs improvement like selection hover on keyboard navigation

// TODO : Pagination
// TODO : Search
// TODO : Filter By

// TODO : See the behavior of the e and currentPage, currentPage in tiiiiiiiiiiiihe handlePageClick is behind and fix this using useEffect
// BUG : a single small component is in the main and large component with its state who renders a lot causing the main component to re-renders too 🥲, i. e. autocomplete for location feat. onChange

//solved
// TODO : if there is no any other page so, sometimes there is page=1, and after we click to back then our url removed page=1 but its already page=1 by default

// WHY

// Why router in the dependency array of  useEffect causing infinite loop
