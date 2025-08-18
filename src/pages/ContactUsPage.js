import React from "react";
import ContactUsIntro from "../components/ContactUsIntro";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SimpleMap from "../components/SimpleMap";
import ScrollToTop from "../utils/ScrollToTop";
import FAQ from "../components/FAQ";
import { useLoaderData } from "react-router-dom";
const ContactUsPage = () => {
  const data = useLoaderData();
  return (
    <div>
      <ScrollToTop />
      <StaticNavBar />
      <ContactUsIntro />
      <Contact />
      <FAQ data={data} />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
