import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import About from "../components/About";
import OurTeamMembers from "../components/OurTeamMembers";
import OurTeamFounder from "../components/OurTeamFounder";
import Products from "../components/Products";
import Research from "../components/Research";
import AboutUsIntro from "../components/AboutUsIntro";
import Technology from "../components/Technology";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import SimpleMap from "../components/SimpleMap";
import { useLoaderData } from "react-router-dom";

const AboutUsPage = () => {
  const data = useLoaderData()
  return (
    <div>
      <ScrollToTop />
      <StaticNavBar />
      <AboutUsIntro />
      <About />
      <Technology />
      <OurTeamFounder />
      {data ? <OurTeamMembers data={data.member} /> : <></>}
      <Contact />
      {data ? <Research data={data.research} /> : <></>}
      {data ? <Products data={data.product} /> : <></>}
      {data ? <FAQ data={data.faq} /> : <></>}
      <Footer />

    </div>
  );
};

export default AboutUsPage;
