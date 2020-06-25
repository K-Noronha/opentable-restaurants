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
      //sets page to 1
      const tempParams = {
        ...params,
        page: 1,
      };
      searchRestaurants(tempParams);
    } else {
      e.target.city.focus();
    }
  };

  const handleChange = (e) => {
    setParams(e);
  };

  return (
    <section className="filter">
      <form onSubmit={submitForm} className="filter__form">
        <div className="filter__inputs">
          <div className="filter__input">
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Search by City"
              onChange={handleChange}
            />
          </div>
          <div className="filter__input">
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Search by Address"
              onChange={handleChange}
            />
          </div>
          <div className="filter__input">
            <label htmlFor="area">Area: </label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Search by Area"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="filter__button">
          <input type="submit" value="Find!" />
        </div>
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
