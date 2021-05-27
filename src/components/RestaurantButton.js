import React from "react";

const RestaurantButton = ({ order }) => (
  <button onClick={order} className="btn btn-primary mb-2">
    Add
  </button>
);

export default RestaurantButton;
