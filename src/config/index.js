import axios from "axios";

const url = "https://opentable.herokuapp.com/api/restaurants";

export async function fetchRestaurants(params) {
  try {
    const response = await axios.get(url, {
      params,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
