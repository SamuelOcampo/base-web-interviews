import {} from "../actionTypes";

const initialState = {
  data: [
    {
      title: "This is my first note",
      content: "This is my first note's content",
      createdAt: 1612254268823,
      id: "IUftu6N",
    },
  ],
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default notesReducer;
