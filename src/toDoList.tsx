import React from 'react'
import { ToDoListItem } from './toDoItem'
import { ToDo } from './types'

export type ToDoListProps = {
    toDos: ToDo[]
    onDelete: (todo: ToDo) => void;
}

export const ToDoList = (props: ToDoListProps) => {
  return (
  <ul >
       {props.toDos.map(todo => (
      <ToDoListItem toDo={todo}  onDelete={props.onDelete} />
    ))}   
  </ul>
)}