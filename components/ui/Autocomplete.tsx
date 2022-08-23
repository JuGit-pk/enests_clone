import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { FaSearch } from 'react-icons/fa'
import { useQuery } from '@apollo/client'
import { SEARCH_COMPANIES } from '@graphql/queries/searchCompanies'

interface ICompany {
  name: string
  id: string
  website: string
}

const Autocomplete = ({
  setShowReviewForm,
  setCompany,
}: {
  setShowReviewForm: (arg0: boolean) => void
  setCompany: ({ name, website }: { name: string; website: string }) => void
}) => {
  const [selectedPerson, setSelectedPerson] = useState('')
  const [query, setQuery] = useState('')
  const { data } = useQuery(SEARCH_COMPANIES, {
    variables: {
      limit: 10,
      where: {
        name_contains: query,
        status: 'Approved',
      },
    },
  })

  const companies = data?.companies

  const filteredCompanies =
    query === ''
      ? companies
      : companies?.filter((company: ICompany) => {
          return company.name.toLowerCase().includes(query.toLowerCase())
        })

  const onClickHandler = (e: any, company: ICompany) => {
    setQuery(e.target.textContent)
    setShowReviewForm(true)
    setCompany({ name: company.name, website: company.website })
  }

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div className='relative'>
        <Combobox.Input
          className='px-10 py-[9.5px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] block rounded-[3px] w-full outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out'
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: { name: string }) => person.name}
        />
        <Combobox.Button className='absolute inset-y-0 left-[14px] flex items-center pr-2'>
          <FaSearch className='h-4 w-4 text-[#495057]' aria-hidden='true' />
        </Combobox.Button>
        <Combobox.Options className='absolute w-full z-10 rounded-[4px] border border-[rgba(0,0,0,.125)] overflow-hidden'>
          {filteredCompanies?.map((company: ICompany) => (
            <Combobox.Option
              key={company.id}
              value={company}
              onClick={(e: any) => onClickHandler(e, company)}
              className='px-5 py-3 text-[#495057] text-base bg-white font-raleway border border-[rgba(0,0,0,.125)] mb-[-1px] cursor-pointer'
            >
              {company.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default Autocomplete
