import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Contact from "../components/Contact";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
const ProductsDetailPage = () => {
  const data = useLoaderData();

  return (
    <div>
      {data ? (
        <>
        <ScrollToTop />
          <NavBar />
          <ProductDetail data={data} />
          <Contact />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsDetailPage;
