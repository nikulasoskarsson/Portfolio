import { combineReducers } from "redux"
import { themeReducer } from "../theme/reducer"
import { reducer as portfolioReducer } from "../pages/portfolio/reducer"

export default combineReducers({
  theme: themeReducer,
})
