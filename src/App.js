import React from "react";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRouteError,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ResearchPage from "./pages/ResearchPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import OurTeamPage from "./pages/OurTeamPage";
import FaqPage from "./pages/FaqPage";
import ContactUsPage from "./pages/ContactUsPage";
import JoinUsPage from "./pages/JoinUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurRetailers from "./pages/OurRetailersPage";
import OrderPage from "./pages/OrderPage";



import {
  fetchProduct,
  fetchProducts,
  fetchResearch,
  fetchResearchs,
  fetchArticle,
  fetchArticles,
  fetchHome,
  fetchAboutUs,
  fetchOurTeam,
  fetchFaq,
  fetchJoinUs,
  fetchRetailers,
  fetchContactUs,
} from "./utils/fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <HomePage />, loader: fetchHome },
      { element: <OrderPage />, path: "Order", errorElement: <></> },
      {
        path: "AboutUs",
        children: [
          { index: true, element: <AboutUsPage />, loader: fetchAboutUs },
          { path: "OurTeam", element: <OurTeamPage />, loader: fetchOurTeam },
          { path: "FAQ", element: <FaqPage />, loader: fetchFaq },
          {
            path: "ContactUs",
            element: <ContactUsPage />,
            loader: fetchContactUs,
          },
          { path: "JoinUs", element: <JoinUsPage />, loader: fetchJoinUs },
        ],
      },
      {
        path: "Products",
        children: [
          { index: true, element: <ProductsPage />, loader: fetchProducts },
          {
            path: ":CategoryId",
            children: [
              {
                index: true,
                element: <ProductsPage />,
                loader: fetchProducts,
              },
              {
                path: ":ProductId",
                element: <ProductDetailPage />,
                loader: fetchProduct,
              },
            ],
          },
        ],
      },
      {
        path: "Insights",
        children: [
          {
            path: "Researches",
            children: [
              {
                index: true,
                element: <ResearchPage />,
                loader: fetchResearchs,
              },
              {
                path: ":ResearchId",
                element: <ResearchDetailPage />,
                loader: fetchResearch,
              },
            ],
          },
          {
            path: "Articles",

            children: [
              { index: true, element: <ArticlePage />, loader: fetchArticles },
              {
                path: ":ArticleId",
                element: <ArticleDetailPage />,
                loader: fetchArticle,
              },
            ],
          },
        ],
      },
      {
        path: "/OurRetailers",
        element: <OurRetailers />,
        loader: fetchRetailers,
      },
    ],
  },
]);
export const CartContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", JSON.stringify("english"));
  }
  const [languageContext, setLanguageContext] = useState(
    JSON.parse(localStorage.getItem("language")),
  );
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(languageContext));
    console.log(
      "localStorage: ",
      localStorage.getItem("language"),
      "context: ",
      languageContext,
    );
  }, [languageContext]);
  const handleToggleEnglish = () => {
    setLanguageContext("english");
  };
  const handleToggleVietnamese = () => {
    setLanguageContext("vietnamese");
  };
  if (!localStorage.getItem("productCart")) {
    localStorage.setItem(
      "productCart",
      JSON.stringify({
        subtotal: 0,
        total: 0,
        quantity: 0,
        cartList: [],
      }),
    );
  }
  const [cartContext, setCartContext] = useState(
    JSON.parse(localStorage.getItem("productCart")),
  );
  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(cartContext));
    console.log(
      "localStorage: ",
      localStorage.getItem("productCart"),
      "context: ",
      cartContext,
    );
  }, [cartContext]);
  const handleAddToCart = (updatedCart) => {
    setCartContext(updatedCart);
  };
  const handleRemoveFromCart = (
    productId,
    productQuantity,
    productSubtotal,
    productTotal,
  ) => {
    const updatedCart = { ...cartContext };
    const updatedCartList = cartContext.cartList.filter((item) => {
      return item.itemId !== productId;
    });
    updatedCart.cartList = updatedCartList;
    updatedCart.quantity -= productQuantity;
    updatedCart.subtotal -= productSubtotal * productQuantity;
    updatedCart.total -= productTotal * productQuantity;
    setCartContext(updatedCart);
  };
  const handleIncrementCartItem = (
    productId,
    productSubtotal,
    productTotal,
  ) => {
    const updatedCart = { ...cartContext };
    const updatedCartListIdx = updatedCart.cartList.findIndex(
      (item) => item.itemId === productId,
    );
    updatedCart.cartList[updatedCartListIdx].itemQuantity += 1;
    updatedCart.quantity += 1;
    updatedCart.subtotal += Number(productSubtotal);
    updatedCart.total += Number(productTotal);
    setCartContext(updatedCart);
  };
  const handleDecrementCartItem = (
    productId,
    productSubtotal,
    productTotal,
  ) => {
    const updatedCart = { ...cartContext };
    const updatedCartListIdx = updatedCart.cartList.findIndex(
      (item) => item.itemId === productId,
    );
    if (updatedCart.cartList[updatedCartListIdx].itemQuantity > 1) {
      updatedCart.cartList[updatedCartListIdx].itemQuantity -= 1;
    } else {
      const updatedCartList = cartContext.cartList.filter((item) => {
        return item.itemId !== productId;
      });
      updatedCart.cartList = updatedCartList;
    }
    updatedCart.quantity -= 1;
    updatedCart.subtotal -= Number(productSubtotal);
    updatedCart.total -= Number(productTotal);
    setCartContext(updatedCart);
  };
  const handleResetCart = () => {
    setCartContext({ subtotal: 0, total: 0, quantity: 0, cartList: [] });
  };
  return (
    <LanguageContext.Provider
      value={{ languageContext, handleToggleEnglish, handleToggleVietnamese }}
    >
      <CartContext.Provider
        value={{
          cartContext,
          handleAddToCart,
          handleRemoveFromCart,
          handleIncrementCartItem,
          handleDecrementCartItem,
          handleResetCart,
        }}
      >
        <RouterProvider
          router={router}
        />
      </CartContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
