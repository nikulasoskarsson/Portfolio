import { createStore as reduxCreateStore } from "redux"
import { initialThemeState, themeReducer } from "../theme/reducer"

const createStore = () => reduxCreateStore(themeReducer, initialThemeState)
export default createStore
