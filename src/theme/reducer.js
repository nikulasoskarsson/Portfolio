import { handleActions } from "redux-actions"

import { SET_DEVICE_THEME } from "./constants"
import { lightTheme, darkTheme } from "./themes"

export const initialThemeState = {
  currentTheme: lightTheme,
}

export const themeReducer = handleActions(
  {
    [SET_DEVICE_THEME]: state => ({
      ...state,
      currentTheme: state.currentTheme === lightTheme ? darkTheme : lightTheme, // set the theme to the opisite of what is currently is
    }),
  },
  initialThemeState
)
