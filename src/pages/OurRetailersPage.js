import React from "react";
import OurRetailersIntro from "../components/OurRetailersIntro";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import OurRetailersList from "../components/OurRetailersList";
import { useLoaderData } from "react-router-dom";
const OurRetailers = () => {
  const data = useLoaderData();
  return (
    <div>
      {data ? (
        <>
          <StaticNavBar />
          <OurRetailersIntro />
          <OurRetailersList data={data.retailer} />
          <Contact />
          <FAQ data={data.faq} />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OurRetailers;
