import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Layout from "../Layout/Layout";
import Cta from "./Cta/Cta";
import Service from "./Service/Service";
import Cible from "./Cible/Cible";
import Call from "./Call/Call";
const Home = () => {
  return (
    <Layout>
      <Banner />
      <Service />
      <Cible />
      {/* <Featured /> */}
      <About />
      <Call />
      {/* <Cta /> */}
      <Faq />
    </Layout>
  );
};

export default Home;