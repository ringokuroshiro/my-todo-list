import React from 'react'
import { ToDoListItem } from './toDoItem'
import { ToDo } from './types'
import { List } from '@material-ui/core';

export type ToDoListProps = {
    toDos: ToDo[]
    onDelete: (todo: ToDo) => void;
}

export const ToDoList = (props: ToDoListProps) => {
  return (
  <List >
       {props.toDos.map(todo => (
      <ToDoListItem toDo={todo}  onDelete={props.onDelete} />
    ))}   
  </List>
)}