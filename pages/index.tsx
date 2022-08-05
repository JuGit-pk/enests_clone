import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* <div className="bg-[url('/images/cta-bg.jpg')] text-white">
        <Header />
        <Hero />
      </div> */}
      <h1>Hero here</h1>
    </Layout>
  );
};

export default Home;
