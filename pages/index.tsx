import About from "../components/home/About";
import BlogPost from "../components/home/BlogPost";
import BrowseCategories from "../components/home/BrowseCategories";
import CompanyProfile from "../components/home/CompanyProfile";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="bg-[url('/assets/images/cta-bg.jpg')] text-white bg-no-repeat bg-cover">
        <Header />
        <Hero />
      </div>
      <About />
      <BrowseCategories />
      <CompanyProfile />
      <BlogPost />
    </Layout>
  );
};

export default Home;
