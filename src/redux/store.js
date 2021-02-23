import { createStore } from "redux";

const { default: rootReducer } = require("./root.reducer");

const store = createStore(rootReducer);

export default store;
