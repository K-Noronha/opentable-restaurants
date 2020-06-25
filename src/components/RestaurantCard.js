import React from "react";

const RestaurantCard = ({ name, address, price, area }) => {
  return (
    <article className="card">
      <h3 className="card__name">{name}</h3>
      <h3 className="card__place">{address}</h3>
      <h3 className="card__place">{area}</h3>
      <h3 className="card__price">{"$".repeat(price)}</h3>
    </article>
  );
};

export default RestaurantCard;
