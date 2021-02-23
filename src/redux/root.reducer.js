const { combineReducers } = require("redux");
const { default: featuresReducer } = require("./features/features.reducer");

const rootReducer = combineReducers({
  features: featuresReducer,
});

export default rootReducer;
