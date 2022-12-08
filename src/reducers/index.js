import { combineReducers } from "redux";
import { themeReducer } from "./ThemeReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  darkTheme:themeReducer
});

export default rootReducer;
