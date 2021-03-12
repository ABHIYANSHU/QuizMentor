import db from '../Firebase/firebase';
import React, { useState, useEffect } from 'react';

function Todo(props) {

    const [ editTodo, setEditTodo ] = useState(true)
    const [ input, setInput ] = useState('')
    const [ message, setMessage ] = useState('')

    const updateTodo = (event) => {
        db.collection('todos').doc(props.todo.id).set({
            timestamp: Date.now(),
            todo: input
        })
        .then(() => {
            setMessage('Updated Successfully')
            console.log(message)
        })
        .catch((error) => {
            setMessage('Update Failed')
            console.error(error)
        })

        setEditTodo(true)
    }
    
    useEffect(() => {
        setInput(props.todo.todo)
        // eslint-disable-next-line
    }, [message]);

    return (
        <div key={ props.todo.id }>
            <input key={ props.todo.id+'A' } type="text" value={ input } readOnly={ editTodo } onChange={(event) => { setInput(event.target.value) }} />
            <input key={ props.todo.id+'B' } type="button" value="X" onClick={ event => db.collection('todos').doc(props.todo.id).delete() } />
            {
                editTodo ? <input key={ props.todo.id+'C' } type="button" value="Edit" onClick={() => setEditTodo(false)} /> : <input key={ props.todo.id+'D' } type="button" value="Save" onClick={ updateTodo } />
            }
            <div>
                { message }
            </div>
        </div>
      )
}

export default Todo
