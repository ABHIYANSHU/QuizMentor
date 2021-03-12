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
      todo: input
    })
    .then((docRef) => {
      console.log(docRef.id)
    })

    setInput('');
  }

  useEffect(() => {
      db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => { 
        var val = {
          id: doc.id,
          todo: doc.data().todo,
          timestamp: doc.data().id
        }
        return val
      }))
    })
  }, []);

  return (
    <div>
      <form>
        <input type="text" value={ input } onChange={(event) => { setInput(event.target.value) }} ></input>
        <input type="submit" value="+" onClick={ addTodo } />
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
