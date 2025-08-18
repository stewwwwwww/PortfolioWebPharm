import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";

const OrderPage = () => {
  return (
    <div>
      <StaticNavBar />
      <OrderSummary />
      <Footer />
      

    </div>
  );
};

export default OrderPage;
