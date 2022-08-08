import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";
import type { NextPage } from "next";
import BrowseCategories from "../components/home/BrowseCategories";
import CompanyProfile from "../components/home/CompanyProfile";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="bg-[url('/assets/images/cta-bg.jpg')] text-white bg-no-repeat bg-cover">
        <Header />
        <Hero />
      </div>
      <BrowseCategories />
      <CompanyProfile />
    </Layout>
  );
};

export default Home;
