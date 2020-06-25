import React from "react";
import { connect } from "react-redux";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ list }) => {
  return (
    <section>
      {list && list.length > 0 ? (
        list.map((item) => (
          <RestaurantCard
            key={item.id}
            name={item.name}
            address={item.address}
            price={item.price}
            area={item.area}
          />
        ))
      ) : (
        <h2>No Restaurants Found</h2>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  list: state.restaurantsReducer.list,
});

export default connect(mapStateToProps)(RestaurantList);
