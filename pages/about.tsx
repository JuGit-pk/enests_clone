import { NextPage } from 'next'
import React from 'react'
import Container from '../components/layout/Container/index'
import { ABOUT_PAGE_QUERY } from '@graphql/queries/getAboutPage'
import { useQuery } from '@apollo/client'
import Layout from '@components/layout/Layout'
import Header from '@components/layout/Header'

const About: NextPage = () => {
  const { data, loading } = useQuery(ABOUT_PAGE_QUERY)

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Layout>
          <Header
            heading={data.about.heading}
            subHeading={data.about.heading}
          />
          <Container className='py-20 font-lato'>
            <div className='flex items-center'>
              <div className='flex-1 mx-[15px] overflow-hidden'>
                <img
                  src={data.about.image.url}
                  alt={data.about.image.alternativeText}
                  className='hover:scale-110 transition-all duration-500 ease-in-out'
                />
              </div>
              <div className='flex-1 px-[15px]'>
                <h2 className='font-raleway text-[34px] capitalize text-[#333] font-medium leading-[1.2]'>
                  {data.about.heading}
                </h2>
                <div
                  className='whitespace-pre-line mt-[25px] text-base leading-6 text-[#505050]'
                  dangerouslySetInnerHTML={{
                    __html: data.about.imageRightContent,
                  }}
                ></div>
              </div>
            </div>
            <div
              className='whitespace-pre-line mt-[25px] px-[15px] text-base leading-6 text-[#505050]'
              dangerouslySetInnerHTML={{
                __html: data.about.content,
              }}
            ></div>
          </Container>
        </Layout>
      )}
    </>
  )
}

export default About
