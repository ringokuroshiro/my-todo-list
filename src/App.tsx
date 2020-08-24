import React, {　useState　} from 'react';
import './App.css';
import  {　ToDo　} from './types'
import {　ToDoList　} from './toDoList'
import { AddTodoForm } from './addToDoForm'
import { v4 as uuidv4} from 'uuid';

function App() {
  const [ toDos, setToDos ] = useState<Array<ToDo>>([])
  const [ newText, setNewText ] = useState("")

  function deleteToDo(deleteToDo: ToDo) {
    const newToDoList = toDos.filter(todo => todo.id !== deleteToDo.id)
    setToDos(newToDoList)
  }

  function addToDo() {
    if (newText === "") {
      return
    }
    const newOne: ToDo = {
      id: uuidv4(),
      text: newText
    }
    const newToDos = Array.from(toDos)
    setToDos(newToDos.concat(newOne))
    setNewText("")
  }
  
  function handleChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <AddTodoForm onAdd={addToDo} onChange={handleChanged} title={newText}/>
        </div>
        <div>
        <ToDoList toDos={toDos} onDelete={deleteToDo}/>
        </div>
      </header>
    </div>
  );
}

export default App;
