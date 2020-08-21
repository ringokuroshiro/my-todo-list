import React from 'react'
import { ToDo } from './types'
import './toDoItem.css'

// ***************************************
//  TODOリストのItem（TODOの内容と削除ボタン）
// ***************************************
// TODO: を引数に追加する
// TODO: <button onClick={ () => onDelete(props.item.toDo)}>Delete</button>に変更する

export type ToDoListItemProps = {
    toDo: ToDo
    onDelete: (toDo: ToDo) => void
}

export const ToDoListItem　=  (props: ToDoListItemProps) => {
    return (
        <li className="ToDoListItem-todo">
          {props.toDo.text}　<button className="btn-delete" onClick= {() => props.onDelete(props.toDo)}>Delete</button>
        </li>
        )    
  };