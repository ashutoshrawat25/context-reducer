import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [todoItem, setTodoItem] = useState("");
  const addTodoItem = () => {
    addTodo(todoItem);
  };
  return (
    <div>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={addTodoItem}>Add</button>
    </div>
  );
}

export default AddTodoForm;
