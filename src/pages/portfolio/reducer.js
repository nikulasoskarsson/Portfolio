import { handleActions } from "redux-actions"

import { GET_PORTFOLIO_ITEMS } from "./constants"

const initialState = {
  portfolioItems: [],
}

export default handleActions({
  [GET_PORTFOLIO_ITEMS]: ({ portfolioItems }) => ({
    ...state,
    portfolioItems: portfolioItems,
  }),
  initialState,
})
