const {
  default: featureReducerActionTypes,
} = require("./features-reducer.action.types");

export const toggleEditorMode = () => ({
  type: featureReducerActionTypes.TOGGLE_EDITOR_MODE,
});

export const toggleHamburgerMenu = () => ({
  type: featureReducerActionTypes.TOGGLE_HAMBURGER_MENU,
});
