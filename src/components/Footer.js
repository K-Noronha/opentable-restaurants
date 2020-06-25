import React from "react";
import { connect } from "react-redux";
import { searchRestaurants } from "../store/actions/restaurants";

const Footer = ({ params, total_entries, searchRestaurants }) => {
  const { page, per_page } = params;
  const totalPages = Math.ceil(total_entries / per_page);
  const morePages = totalPages - page;
  const lessPages = page > 1;

  const flipPages = (flip) => {
    const change = {
      ...params,
      page: page + flip,
    };
    searchRestaurants(change);
  };
  return (
    <footer>
      {total_entries ? (
        <>
          <div>
            {lessPages ? <div onClick={() => flipPages(-1)}>-</div> : null}
            <h4>{`${page} of ${totalPages}`}</h4>
            {morePages ? <div onClick={() => flipPages(1)}>+</div> : null}
          </div>
          <h4>- {total_entries} Resturants Found -</h4>
        </>
      ) : null}
    </footer>
  );
};

const mapStateToProps = (state) => ({
  total_entries: state.restaurantsReducer.total_entries,
  params: state.restaurantsReducer.params,
});
const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (e) => dispatch(searchRestaurants(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
