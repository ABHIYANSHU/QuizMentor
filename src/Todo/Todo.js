import db from '../Firebase/firebase';
import React, { useState, useEffect } from 'react';

function Todo(props) {

    const [ editTodo, setEditTodo ] = useState(true)
    const [ input, setInput ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ date, setDate ] = useState(false)

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

    const reducePriority = (event) => {
        db.collection('todos').doc(props.todo.id).set({
            priority: props.todo.priority + 1,
            timestamp: props.todo.timestamp,
            todo: props.todo.todo
        })
    }

    const increasePriority = (event) => {
        db.collection('todos').doc(props.todo.id).set({
            priority: props.todo.priority - 1,
            timestamp: props.todo.timestamp,
            todo: props.todo.todo
        })
    }
    
    const openModal = (event) => {
        setDate(true)
    }

    useEffect(() => {
        setInput(props.todo.todo)
        // eslint-disable-next-line
    }, [message]);

    return (
            <div key={ props.todo.id }>
                <input key={ props.todo.id+'A' } type="text" value={ input } readOnly={ editTodo } onChange={(event) => { setInput(event.target.value) }} />
                <input type="button" value=".." onClick={openModal} />
                <input key={ props.todo.id+'B' } type="button" value="X" onClick={ event => db.collection('todos').doc(props.todo.id).delete() } />
                {
                    editTodo ? <input key={ props.todo.id+'C' } type="button" value="Edit" onClick={() => setEditTodo(false)} /> : <input key={ props.todo.id+'D' } type="button" value="Save" onClick={ updateTodo } />
                }
                { props.todo.priority !== 1 ? <input type="button" value="⬆" onClick={ increasePriority } /> : <></> }
                <input type="button" value="⬇" onClick={ reducePriority } />
                { date ? <><input type="time" /><input type="date" /></> : <></> }
                <div>
                    { message }
                </div>
            </div>
      )
}

export default Todo
