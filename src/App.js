import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddForm from "./components/add-form";
import TodoList from "./components/todo-list";
import { addNumber, removeNumber } from "./redux/slices/counter-slice";
// import { addNumber, removeNumber } from "./redux/modules/counter";

function App() {
  // 리듀서로 액션객체를 보내는 전달자 함수
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const counterReducer = useSelector(state => {
    return state.counter;
  });

  return (
    <div>
      <div>{counterReducer.number}</div>
      <input
        type="number"
        value={count}
        onChange={e => setCount(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
