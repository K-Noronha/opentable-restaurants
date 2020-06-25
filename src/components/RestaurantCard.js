import React from "react";

const RestaurantCard = ({ name, address, price, area }) => {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{address}</h3>
      <h3>{area}</h3>
      <h3>{"$".repeat(price)}</h3>
    </article>
  );
};

export default RestaurantCard;
