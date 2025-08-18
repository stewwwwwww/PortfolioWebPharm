import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReseachIntro from "../components/ReseachIntro";
import ResearchList from "../components/ResearchList";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const ResearchPage = () => {
  const data = useLoaderData();
  return data ? (
    <>
      <ScrollToTop />
      <NavBar />
      <ReseachIntro />
      <ResearchList data={data} />
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default ResearchPage;
