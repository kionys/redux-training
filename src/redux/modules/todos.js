const ADD_TODO = "ADD_TODO";

const initialState = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
];

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
