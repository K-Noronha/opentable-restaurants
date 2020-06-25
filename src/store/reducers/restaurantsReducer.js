const restaurants = {
  list: [],
  total_entries: 0,
  params: {
    city: "toronto",
    name: null,
    page: 1,
    per_page: 25,
  },
};

const restaurantsReducer = (state = restaurants, { type, payload }) => {
  switch (type) {
    case "UPDATE_RESTAURANTS":
      return {
        ...state,
        list: payload.restaurants,
        total_entries: payload.total_entries,
        params: {
          ...state.params,
          page: payload.current_page,
        },
      };
    case "SET_PARAMS":
      const name = payload.target.name;
      const value = payload.target.value;
      return {
        ...state,
        params: {
          ...state.params,
          [name]: value,
        },
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
