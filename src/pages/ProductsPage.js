import React from "react";
import ProductsIntro from "../components/ProductsIntro";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
const ProductsPage = () => {
  const data = useLoaderData();

  return data ? (
    <>
      <NavBar />
      <ScrollToTop />
      <ProductsIntro />
      <ProductsList data={data} />
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default ProductsPage;
