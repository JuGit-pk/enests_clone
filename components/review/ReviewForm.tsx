import Container from '@components/layout/Container'
import * as Yup from 'yup'
import React from 'react'
import Rating from 'react-rating'
import ProofImage from './ProofImage'
import { ErrorMessage, Field, Form, Formik } from 'formik'

interface IFormValues {
  rating: number
  title: string
  review: string
  proofImage: string
}

const ReviewForm = ({
  companyName,
  companyWebsite,
}: {
  companyName: string
  companyWebsite: string
}) => {
  const validationSchema = Yup.object({
    rating: Yup.number().min(1).max(5),
    title: Yup.string().required(),
    review: Yup.string().required(),
    proofImage: Yup.string(),
  })

  const initialValues = {
    rating: 0,
    title: '',
    review: '',
    proofImage: '',
  }

  const onSubmitHandler = (values: IFormValues) => {
    console.log(values)
  }

  return (
    <Container className='px-0 mt-[30px]'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className='py-10 px-[30px] text-center max-w-[900px] mx-auto bg-white shadow-lg'>
              <h2 className='text-[34px] text-[#333] font-medium font-raleway capitalize text-center leading-[1.2]'>
                Write A Review For{' '}
                <span className='text-[#4d2573] font-semibold'>
                  {companyName}
                </span>
              </h2>
              <a
                className='text-[#4d2573] mt-2 cursor-pointer'
                href={companyWebsite}
              >{`(${companyWebsite})`}</a>
              <div className='mt-20 text-left grid md:grid-cols-2 items-center'>
                <div className='text-[#9e9e9e] text-[14px]'>
                  <h4 className='text-[15px] text-[#575757] mb-2'>Ratings</h4>
                  <Rating
                    initialRating={values.rating}
                    emptySymbol='far fa-star'
                    fullSymbol='fa fa-star text-primary'
                    onClick={(value) => setFieldValue('rating', value)}
                  />
                  <span className='ml-4'>
                    Roll over the stars, then click to rate.
                  </span>
                </div>
                <div className='mt-4'>
                  <label
                    htmlFor=''
                    className='text-[#575757] text-[15px] inline-block'
                  >
                    Title of your review
                  </label>
                  <Field
                    type='text'
                    name='title'
                    className={
                      errors.title && touched.title
                        ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                        : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                    }
                  />
                  <ErrorMessage
                    name='title'
                    component='div'
                    className='text-red-400 text-[80%]'
                  />
                </div>
                <div className='mt-4 md:col-span-2'>
                  <label
                    htmlFor=''
                    className='text-[#575757] text-[15px] inline-block'
                  >
                    Tell us about your experience
                  </label>
                  <Field
                    as='textarea'
                    name='review'
                    rows='4'
                    className={
                      errors.review && touched.review
                        ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2 h-[105px]'
                        : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2 h-[105px]'
                    }
                  />
                  <ErrorMessage
                    name='review'
                    component='div'
                    className='text-red-400 text-[80%]'
                  />
                </div>
              </div>
            </div>
            <ProofImage setFieldValue={setFieldValue} />
            <button
              type='submit'
              className='mt-11 px-[23px] py-2 bg-primary hover:bg-white border-[2px] hover:border-primary hover:text-primary text-white text-sm font-semibold text-center tracking-[1px] leading-[1.5] cur block rounded-full cursor-pointer mx-auto'
            >
              Submit Your Review
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ReviewForm
