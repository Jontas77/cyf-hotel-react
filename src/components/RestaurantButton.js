import React from "react";

const RestaurantButton = ({ order }) => (
  <button onClick={order} className="btn btn-primary">
    Add
  </button>
);

export default RestaurantButton;
