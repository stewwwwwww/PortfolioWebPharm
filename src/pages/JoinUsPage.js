import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import JoinUsIntro from "../components/JoinUsIntro";
import About from "../components/About";
import Technology from "../components/Technology";
import JoinUsPositions from "../components/JoinUsPositions";
import Contact from "../components/Contact";
import ScrollToTop from "../utils/ScrollToTop";
import { useLoaderData } from "react-router-dom";
const JoinUsPage = () => {
  const data = useLoaderData();
  return (
    <div>
      {data ? (
        <>
          <ScrollToTop />
          <StaticNavBar />
          <JoinUsIntro />
          <Technology />
          <About />
          <JoinUsPositions data={data}/>
          <Contact />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JoinUsPage;
