import './App.css';
import React, { useState, useEffect } from 'react';
import db from './Firebase/firebase';
import Todo from './Todo/Todo';

function App() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      timestamp: Date.now(),
      todo: input,
      priority: 1
    })
    .then((docRef) => {
      console.log(docRef.id)
    })

    setInput('');
  }

  useEffect(() => {
      db.collection('todos').orderBy('priority', 'asc').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => { 
        var val = {
          id: doc.id,
          todo: doc.data().todo,
          timestamp: doc.data().timestamp,
          priority: doc.data().priority
        }
        return val
      }))
    })
  }, []);

  return (
    <div>
      <form>
        <input type="text" placeholder="Add a task" value={ input } onChange={(event) => { setInput(event.target.value) }} ></input>
        <input type="submit" value="Add" onClick={ addTodo } />
      </form>
      {
        todos.map(todo => {
          return <Todo key={ todo.id } todo={ todo } />
        })
      }   
    </div>
  );
}

export default App;
