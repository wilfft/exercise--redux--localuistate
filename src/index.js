import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  persons: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
        //age: Math.floor(Math.random() * 40),
      };
      return { persons: state.persons.concat(newPerson) };
    }
    //    console.log(this.state);

    case "REMOVE": {
      return {
        persons: state.persons.filter((person) => person.id !== action.id),
      };
    }

    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
