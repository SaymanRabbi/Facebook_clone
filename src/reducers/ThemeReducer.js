import Cookies from "js-cookie";

export function ThemeReducer(
  state = Cookies.get("darkTheme")
    ? JSON.parse(Cookies.get("darkTheme"))
    : false,

  action
) {
  switch (action.type) {
    case "DARK":
      return true;
    case "LIGHT":
      return false;

    default:
      return state;
  }
}