import React from "react";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import About from "../components/About";
import Technology from "../components/Technology";
import Products from "../components/Products";
import Research from "../components/Research";
import Contact from "../components/Contact";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const data = useLoaderData();

  const handleContentLoaded = () => {
    setIsContentLoaded(true);
  };

  return (
    <div>
      <ScrollToTop />

      {!isContentLoaded && <></>}

      <div style={{ display: isContentLoaded ? "block" : "none" }}>
        <NavBar />
        <Intro onVideoLoaded={handleContentLoaded} />
        <About />
        <Technology />
        {data && <Research data={data.research} />}
        {data && <Products data={data.product} />}
        <Contact />
        {data && <Articles data={data.article} />}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
