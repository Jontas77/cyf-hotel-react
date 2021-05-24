import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    return setOrders(prevState => prevState + 1);
  };

  return (
    <li>
      {orderType}: {orders} <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;
