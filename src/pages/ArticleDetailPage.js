import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArticleDetails from "../components/ArticleDetails";
import Contact from "../components/Contact";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const ResearchDetailPage = () => {
  const data = useLoaderData()
  return data ? (
    <div>
      <ScrollToTop />
      <NavBar />
      <ArticleDetails data={data} />
      <Contact />
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default ResearchDetailPage;
