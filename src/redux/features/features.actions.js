const {
  default: featureReducerActionTypes,
} = require("./features-reducer.action.types");

export const toggleEditorMode = () => ({
  type: featureReducerActionTypes.TOGGLE_EDITOR_MODE,
});
