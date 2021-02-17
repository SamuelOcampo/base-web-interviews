import { CHANGE_ROUTE } from "../actionTypes";

const initialState = {
  current: "home",
};

function routerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE: {
      const current = action.payload;
      return {
        ...state,
        current,
      };
    }
    default:
      return state;
  }
}

export default routerReducer;
