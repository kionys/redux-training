import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter-slice";
import todosSlice from "../slices/todos-slice";

// const rootReducer = combineReducers({
//   counter,
//   todos,
// });

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
  },
});

export default store;
