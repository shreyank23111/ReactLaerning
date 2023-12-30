
import { createContext, useContext } from "react";
import React{createContext,useContext} from "react";

export const TodoContaxt=createContext({
  todos:[
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    }
  ],
  addTodo: (todo)=>{},
  updateTodo: (id, todo) =>{},
  deleteTodo: (id) =>{},
  toggleComplete: (id) =>{}
});

export const useTodo=()=>{
  return useContext(TodoContaxt);
}

export const TodoProvider=TodoContaxt.Provider;