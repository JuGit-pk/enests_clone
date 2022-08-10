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
import cn from "classnames";
import ReviewsContainer from "../components/home/ReviewsContainer";
const Home: NextPage = () => {
  const { data, loading, error } = useQuery(HOME_PAGE_QUERY);
  console.log(data, "data");
  return (
    <Layout>
      <div className="bg-[url('/assets/images/cta-bg.jpg')] text-white bg-no-repeat bg-cover">
        <Header />
        <Hero
          mainHeading={data?.home?.mainHeading}
          subHeading={data?.home?.subHeading}
          textUnderSearchBox={data?.home?.textUnderSearchBox}
        />
      </div>
      <About />
      <BrowseCategories />
      <ReviewsContainer />
      <CompanyProfile />
      <BlogPost />
    </Layout>
  );
};

export default Home;
