import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Layout from "../Layout/Layout";
import Cta from "./Cta/Cta";
import useHttps from "../../hooks/useHttps";
import Service from "./Service/Service";
const Home = () => {
  const { http } = useHttps();
  const testBack = async () => {
    try {
      let response = await http.get("/users")
      if(response)
        console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    testBack()
  }, [])
  return (
    <Layout>
      <Banner />
      <Service />
      {/* <Featured /> */}
      <About />
      <Cta />
      <Faq />
    </Layout>
  );
};

export default Home;