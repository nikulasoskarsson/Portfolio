import { handleActions } from "redux-actions"

import { SET_DEVICE_THEME } from "./constants"
import { lightTheme, darkTheme } from "./themes"

export const initialThemeState = {
  currentTheme: { ...lightTheme },
}

export const themeReducer = handleActions(
  {
    [SET_DEVICE_THEME]: (state, { nextTheme }) => ({
      ...state,
      currentTheme: nextTheme === "lightTheme" ? lightTheme : darkTheme,
    }),
  },
  initialThemeState
)
