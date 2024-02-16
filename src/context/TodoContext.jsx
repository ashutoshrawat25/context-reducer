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
  const initialState = {
    todoItems: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todoitem) => {
    dispatch({
      type: "ADD_TODO",
      payload: todoitem,
    });
  };

  const value = { todoItems: state.todoItems, addTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
