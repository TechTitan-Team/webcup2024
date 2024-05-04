import React from "react";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Layout from "../Layout/Layout";
import Cta from "./Cta/Cta";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Featured />
      <About />
      <Cta />
      <Faq />
    </Layout>
  );
};

export default Home;