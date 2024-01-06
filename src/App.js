import React from 'react'
import Users from './Component/task-1/Users';
import UsersForm from './Component/task-2/UsersForm';
import TodoApp from './Component/task-3/TodoApp';
import { Route, Routes } from 'react-router-dom';
import Menu from './Component/Menu';
export default function App() {

  return (
    <div className='container'>
      {/* task-1 */}
      {/* <Users/> */}

      {/* task-2 */}
      {/* <UsersForm /> */}

      {/* task-3 */}
      {/* <TodoApp /> */}

      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='users' element={<Users />}/>
        <Route path='usersform' element={<UsersForm />}/>
        <Route path='todoapp' element={<TodoApp />}/>
      </Routes>

    </div>
  )
}
