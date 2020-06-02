import { createStore as reduxCreateStore } from "redux"
import { initialThemeState, themeReducer } from "./reducer"

const createStore = () => reduxCreateStore(themeReducer, initialThemeState)
export default createStore
