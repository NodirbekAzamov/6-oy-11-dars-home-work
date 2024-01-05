import React from 'react'

export default function TodoHeader({task}) {
  return (
    <div>
        <h1 className='text-center'>Todo app <span className='btn btn-primary fs-5'>{task.length}</span> </h1>
    </div>
  )
}
