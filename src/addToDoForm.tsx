import React from 'react';
import './addToDoForm.css'

interface AddTodoFormProps {
    onAdd: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
  }
  
  export const AddTodoForm = ({onAdd, onChange} : AddTodoFormProps) => {
    return (
    <>
      <input className="text" type="text" 
      onChange={onChange}/><button className="btn-add" onClick={onAdd}>Add a todo</button>
    </>
  )}
  