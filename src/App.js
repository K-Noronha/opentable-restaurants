import React from "react";

import "./App.css";
import "./styles.scss";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./store/reducers/root";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantFilter from "./components/RestaurantFilter";
import RestaurantList from "./components/RestaurantList";

const store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RestaurantFilter />
        <RestaurantList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
