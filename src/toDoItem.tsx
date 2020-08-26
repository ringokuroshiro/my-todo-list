import React from 'react'
import { ToDo } from './types'
import './toDoItem.css'
import { ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


// ***************************************
//  TODOリストのItem（TODOの内容と削除ボタン）
// ***************************************

export type ToDoListItemProps = {
    toDo: ToDo
    onDelete: (toDo: ToDo) => void
}

export const ToDoListItem　=  (props: ToDoListItemProps) => {
    return (
      <ListItem className="ToDoListItem-todo">
        <ListItemText className="todo-text">{props.toDo.text}</ListItemText> 
        <Button
         className=".delete-btn"
         variant="contained"
         color="primary"
         startIcon={<DeleteIcon />}
         onClick= {() => props.onDelete(props.toDo)}>
         Delete
        </Button>
      </ListItem>
        )    
  };