export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

import { UPDATE_PRODUCTS, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};
