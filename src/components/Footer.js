import React from "react";
import { connect } from "react-redux";

const Footer = ({ params }) => {
  return (
    <footer>
      <h4> {params.page} </h4>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  params: state.restaurantsReducer.params,
});

export default connect(mapStateToProps)(Footer);
