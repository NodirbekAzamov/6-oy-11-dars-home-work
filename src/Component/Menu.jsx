import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className=' d-flex justify-content-center my-5'>
       <Link to="/users" className='btn btn-primary mx-3'>Home work1</Link>
       <Link to="/usersform" className='btn btn-primary mx-3'>Home work2</Link>
       <Link to="/todoapp" className='btn btn-primary mx-3'>Home work3</Link>
    </div>
  )
}
