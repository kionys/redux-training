import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
];
const counterSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      const deletedState = state.filter(item => {
        return item.id !== action.payload.id;
      });
      return deletedState;
    },
  },
});
export const { addTodo, removeTodo } = counterSlice.actions;
export default counterSlice.reducer;
