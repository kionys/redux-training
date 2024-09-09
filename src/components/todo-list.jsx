import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/slices/todos-slice";

const TodoList = () => {
  const todos = useSelector(state => {
    return state.todos;
  });
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.title}</div>
            <div
              onClick={() => {
                console.log(todo);
                dispatch(
                  removeTodo({
                    id: todo.id,
                    title: todo.title,
                  }),
                );
              }}
            >
              삭제
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
