import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import OurTeamIntro from "../components/OurTeamIntro";
import OurTeamFounder from "../components/OurTeamFounder";
import OurTeamMembers from "../components/OurTeamMembers";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import SimpleMap from "../components/SimpleMap";
import ScrollToTop from "../utils/ScrollToTop";
import { useLoaderData } from "react-router-dom";
const OurTeamPage = () => {
  const data = useLoaderData();
  return (
    <div>
      {data ? (
        <>
          <ScrollToTop />
          <StaticNavBar />
          <OurTeamIntro />
          <OurTeamFounder />
          <OurTeamMembers data={data.member} />
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

export default OurTeamPage;
