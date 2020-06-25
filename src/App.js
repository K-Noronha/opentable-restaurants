import React from "react";

import "./App.css";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./store/reducers/root";
import Footer from "./components/Footer";

const store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
