import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'
import TodoFooter from './TodoFooter'

export default function TodoApp() {
    const [task, setTask] = useState([
        { id: 1, title: "Task" }
    ])

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <div className="card-header">
                            <TodoHeader task={task}/>
                        </div>
                        <div className="card-body d-flex">
                            <TodoBody task={task} setTask={setTask}/>
                        </div>
                        <div className="card-footer">
                            <TodoFooter task={task} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
