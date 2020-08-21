import React, {　useState　} from 'react';
import './App.css';
import  {　ToDo　} from './types'
import {　ToDoList　} from './toDoList'
import { AddTodoForm } from './addToDoForm'

function App() {
  const [ toDos, setToDos ] = useState<Array<ToDo>>([])
  const [ newText, setNewText ] = useState("")
  const [ count, setCount ] = useState<number>(toDos.length + 1)

  function deleteToDo(deleteToDo: ToDo) {
    const newToDoList = toDos.filter(todo => todo.id !== deleteToDo.id)
    setToDos(newToDoList)
  }

  function addToDo() {
    const newOne: ToDo = {
      id: count,
      text: newText
    }
    const newToDos = Array.from(toDos)
    setToDos(newToDos.concat(newOne))
    setCount(count + 1)
  }

  function handleChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <AddTodoForm onAdd={addToDo} onChange={handleChanged}/>
        </div>
        <div>
        <ToDoList toDos={toDos} onDelete={deleteToDo}/>
        </div>
      </header>
    </div>
  );
}

export default App;
