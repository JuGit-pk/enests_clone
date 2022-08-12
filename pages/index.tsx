import About from "../components/home/About";
import BlogPost from "../components/home/BlogPost";
import BrowseCategories from "../components/home/BrowseCategories";
import CompanyProfile from "../components/home/CompanyProfile";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { HOME_PAGE_QUERY } from "@graphql/queries/getHomePage";
import ReviewsContainer from "../components/home/ReviewsContainer";
const Home: NextPage = () => {
  const { data, loading, error } = useQuery(HOME_PAGE_QUERY);
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Layout>
          <div className="bg-[url('/assets/images/cta-bg.jpg')] text-white bg-no-repeat bg-cover">
            <Header />
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
          <ReviewsContainer />
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
  );
};

export default Home;
