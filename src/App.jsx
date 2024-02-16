import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const { todoItems } = useContext(TodoContext);
  console.log(todoItems);
  return (
    <>
      <h1>Hello</h1>
      <AddTodoForm />
      {todoItems.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
}

export default App;
