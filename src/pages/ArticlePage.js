import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArticlesList from "../components/ArticlesList";
import ArticlesIntro from "../components/ArticlesIntro";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
const ArticlePage = () => {
  const data = useLoaderData();
  return data ? (
    <>
      <ScrollToTop />
      <NavBar />
      <ArticlesIntro />
      <ArticlesList data={data} />
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default ArticlePage;
