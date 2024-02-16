/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addTodo: () => {},
});

const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return { ...state, todoItems: [...state.todoItems, action.payload] };
  }

  return state;
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todoItems: ["hello"] });

  const addTodo = (todoitem) => {
    dispatch({
      type: "ADD_TODO",
      payload: todoitem,
    });
  };

  return (
    <TodoContext.Provider value={{ todoItems: state.todoItems, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
