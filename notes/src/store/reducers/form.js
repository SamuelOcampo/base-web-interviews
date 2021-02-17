import { } from "../actionTypes";

const initialState = {
  values: {
      id: null,
      title: '',
      content: ''
  }
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default formReducer;
