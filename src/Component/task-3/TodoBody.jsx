import React, { useState } from 'react'

export default function TodoBody({ task, setTask }) {
    const [newTask, setNewTask] = useState("")
    const changeInp = (e) => {
        setNewTask(e.target.value)
    }

    const addTodo = () => {
        let paylod = {
            id: task.length + 1,
            title: newTask
        }
        setTask([...task, {...paylod}])
    }

    return (
        <div className=' d-flex'>
            <input type="text" placeholder='add' onChange={changeInp} className='form-control ' />
            <button onClick={addTodo} className='btn btn-primary mx-4'>Add</button>
        </div>
    )
}
