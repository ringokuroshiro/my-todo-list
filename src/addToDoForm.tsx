import React from 'react';
import './addToDoForm.css'
import BootstrapButton from '@material-ui/core/Button';

interface AddTodoFormProps {
    onAdd: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
    title: string
  }
  
  export const AddTodoForm = ({onAdd, onChange, title} : AddTodoFormProps) => {
    return (
    <>
      <input className="text" type="text" value={title}
      onChange={onChange}/><BootstrapButton variant="contained" color="primary" disableRipple onClick={onAdd}>
      Add a todo
    </BootstrapButton>
    </>
  )}
  