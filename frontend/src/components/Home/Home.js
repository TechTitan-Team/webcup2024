import React from "react";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Layout from "../Layout/Layout";
import Cta from "./Cta/Cta";
import Searchbar from "./Searchbar/Searchbar";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Searchbar />
      <Featured />
      <About />
      <Cta />
      <Faq />
    </Layout>
  );
};

export default Home;