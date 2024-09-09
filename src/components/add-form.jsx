import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todos-slice";
// import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>todo list</h1>
      <input
        type="text"
        value={todo}
        onChange={e => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: new Date().getTime(),
              title: todo,
            }),
          );
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddForm;
