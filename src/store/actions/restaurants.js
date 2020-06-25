import { fetchRestaurants } from "../../config";

const updateRestaurants = (payload) => {
  return {
    type: "UPDATE_RESTAURANTS",
    payload,
  };
};

export const setParams = (payload) => {
  return {
    type: "SET_PARAMS",
    payload,
  };
};

export const searchRestaurants = (params) => {
  return (dispatch) => {
    fetchRestaurants(params)
      .then((res) => {
        dispatch(updateRestaurants(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};
