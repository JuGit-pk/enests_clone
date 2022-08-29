import type { NextPage } from 'next'

import { useQuery } from '@apollo/client'
import { HOME_PAGE_QUERY } from '@graphql/queries/getHomePage'

import About from '../components/home/About'
import BlogPost from '../components/home/BlogPost'
import BrowseCategories from '../components/home/BrowseCategories'
import CompanyProfile from '../components/home/CompanyProfile'
import Hero from '../components/home/Hero'
import ReviewsContainer from '../components/home/ReviewsContainer'
import Navbar from '../components/layout/Header/Navbar'
import Layout from '../components/layout/Layout'

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(HOME_PAGE_QUERY)
  return (
    <>
      {error && <p>ERROR here 🫤</p>}
      {loading ? (
        <p>Loading</p>
      ) : (
        <Layout>
          <div className="bg-[url('/assets/images/cta-bg.jpg')] text-white bg-no-repeat bg-cover">
            <Navbar />
            <Hero
              categories={data?.categories}
              mainHeading={data?.home?.mainHeading}
              subHeading={data?.home?.subHeading}
              textUnderSearchBox={data?.home?.textUnderSearchBox}
            />
          </div>
          <About
            aboutImage={data?.home?.aboutImage}
            aboutHeading={data?.home?.aboutHeading}
            aboutDescription={data?.home?.aboutDescription}
          />
          <BrowseCategories
            categoryTitle={data?.home?.categoryTitle}
            categoryDescription={data?.home?.categoryDescription}
            categories={data?.popularCategories}
          />
          <ReviewsContainer
            title={data?.homePage?.reviewsTitle}
            description={data?.homePage?.reviewsDescription}
            reviews={data?.reviews}
          />
          <CompanyProfile
            listingTitle={data?.home?.listingTitle}
            listingDescription={data?.home?.listingDescription}
            listingImage={data?.home?.listingImage}
          />
          <BlogPost
            blogTitle={data?.home?.blogTitle}
            blogDescription={data?.home?.blogDescription}
            posts={data?.posts}
          />
        </Layout>
      )}
    </>
  )
}

export default Home
