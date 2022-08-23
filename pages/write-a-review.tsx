import React, { useState } from 'react'
import Container from '@components/layout/Container'
import Header from '@components/layout/Header'
import Layout from '@components/layout/Layout'
import ReviewForm from '@components/review/ReviewForm'
import Autocomplete from '@components/ui/Autocomplete'

const WriteReview = () => {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [company, setCompany] = useState({ name: '', website: '' })

  return (
    <Layout>
      <Header heading='write a review' subHeading='write a review' />
      <Container className='py-20'>
        <div className='max-w-[900px] mx-auto'>
          <div className='pt-10 pb-[100px] px-[30px] shadow-lg'>
            <div className='text-center'>
              <span className='text-[#4d2573] text-[42px]'>
                <i className='far fa-building' />
              </span>
              <h2 className='capitalize text-[#333] text-[34px] font-medium font-raleway'>
                choose{' '}
                <span className='text-[#4d2573] font-semibold'>Company</span>
              </h2>
              <p className='text-[#505050] text-base leading-6'>
                First, which company are you reviewing?
              </p>
            </div>
            <form action='' className='mt-10 px-[15px]'>
              <label
                className='text-[#575757] text-[15px] mb-2 inline-block'
                htmlFor=''
              >
                Search for the company
              </label>
              <Autocomplete
                setShowReviewForm={setShowReviewForm}
                setCompany={setCompany}
              />
            </form>
          </div>
        </div>
        {showReviewForm && (
          <>
            <ReviewForm
              companyName={company.name}
              companyWebsite={company.website}
            />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default WriteReview
