import BusinessCard from '@components/companies/CompanyCard'
import Container from '@components/layout/Container'
import Header from '@components/layout/Header'
import Layout from '@components/layout/Layout'
import React from 'react'
import SelectBox from '@components/ui/SelectBox'
import { COMPANIES_LISTING_QUERY } from '@graphql/queries/getCompaniesListing'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { unslugify } from '@utils/helper'
import { ICompaniesListingQuery, ICompany } from 'types/requests'
import Link from 'next/link'
import _ from 'lodash'

const Companies = () => {
  const router = useRouter()

  const category = (router.query.category as string) || ''

  const { data } = useQuery<ICompaniesListingQuery>(COMPANIES_LISTING_QUERY, {
    variables: {
      category,
      categorySlug: category,
      subCategory: unslugify(category || ''),
    },
  })
  let countries = data?.countries
  countries = _.sortBy(countries, (country) => _.deburr(country.name))
  let companies = data?.companies
  companies = _.filter(
    companies,
    (company: ICompany) => company.category.name == unslugify(category)
  )
  console.log(data, ' data from Companies')

  return (
    <Layout
      seoTitle={data?.companiesListingMetadata.pageTitle}
      seoDescription={data?.companiesListingMetadata.metaDescription}
    >
      <Header heading={unslugify(category)} subHeading={unslugify(category)} />
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
            <div className=' shadow-md p-5 text-sm w-full'>
              <h3 className=' text-2xl text-secondary-500 text-center mb-8 '>
                Sub-Categories
              </h3>
              <ul className=' divide-y divide-primary/10 divide-solid'>
                {data?.subCategoriesCompanyCount.map(({ _id, count, url }) => (
                  <Link href={url} key={_id + count}>
                    <a>
                      <li className='flex justify-between items-center text-base py-3 text-secondary-500 '>
                        <p className='hover:text-primary transition-all'>
                          {_id}
                        </p>
                        <p className='rounded-full py-1 px-3 bg-primary/10 text-sm hover:text-primary transition-all'>
                          {count}
                        </p>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
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
            {/* Cards Lists */}
            {companies.map((company, i) => (
              <BusinessCard key={i} company={company} />
            ))}
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
