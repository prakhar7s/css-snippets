const {
  default: featureReducerActionTypes,
} = require("./features-reducer.action.types");

const INITIAL_STATE = {
  darkMode: false,
  hamburgerMenu: false,
};

const featuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case featureReducerActionTypes.TOGGLE_EDITOR_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case featureReducerActionTypes.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        hamburgerMenu: !state.hamburgerMenu,
      };

    default:
      return state;
  }
};

export default featuresReducer;
