import { handleActions } from "redux-actions"

import { GET_PORTFOLIO_ITEMS } from "./constants"

const initialState = {
  portfolioItems: [],
}

export default handleActions(
  {
    [GET_PORTFOLIO_ITEMS]: state => ({
      ...state,
      portfolioItems: state.portfolioItems,
    }),
  },
  initialState
)
