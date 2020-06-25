const restaurants = {
  list: [],
  total_enteries: null,
  params: {
    city: null,
    name: null,
    page: 1,
    per_page: 25,
  },
};

const restaurantsReducer = (state = restaurants, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default restaurantsReducer;
