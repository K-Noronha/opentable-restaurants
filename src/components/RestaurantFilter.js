import React from "react";
import { connect } from "react-redux";
import { searchRestaurants, setParams } from "../store/actions/restaurants";

const RestaurantFilter = ({ params, searchRestaurants, setParams }) => {
  const submitForm = (e) => {
    e.preventDefault();
    //checks if the fields are empty
    const valid = ["city", "address", "area"].filter(
      (field) => e.target[field].value
    );
    //queries with the user input else focuses on the city field
    if (valid.length > 0) {
      searchRestaurants(params);
    } else {
      e.target.city.focus();
    }
  };

  const handleChange = (e) => {
    setParams(e);
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search by City"
          onChange={handleChange}
        />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Search by Address"
          onChange={handleChange}
        />
        <label htmlFor="area">Area: </label>
        <input
          type="text"
          id="area"
          name="area"
          placeholder="Search by Area"
          onChange={handleChange}
        />

        <input type="submit" value="Find!" />
      </form>
    </section>
  );
};
const mapStateToProps = (state) => ({
  params: state.restaurantsReducer.params,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (e) => dispatch(searchRestaurants(e)),
    setParams: (e) => dispatch(setParams(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFilter);
