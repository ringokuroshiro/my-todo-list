import React from 'react';
import './addToDoForm.css'

interface AddTodoFormProps {
    onAdd: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
    title: string
  }
  
  export const AddTodoForm = ({onAdd, onChange, title} : AddTodoFormProps) => {
    return (
    <>
      <input className="text" type="text" value={title}
      onChange={onChange}/><button className="btn-add" onClick={onAdd}>Add a todo</button>
    </>
  )}
  