import React, { useState } from 'react'

export default function Users() {

    const [users, setUsers] = useState([
        { id: 1, name: 'John1', check: false },
        { id: 2, name: 'John2', check: false },
        { id: 3, name: 'John3', check: false },
    ])

    const [active, setActive] = useState([
        // { id: 4, name: 'John', check: false },
    ])

    const addButton = (value) => {
        if (value === "users") {
            users.forEach((item, index) => {
                if (item.check === true) {
                    active.push({ ...item, check: false })
                    users.splice(index, 1)
                    setActive([...active])
                    setUsers([...users])
                }
            })
        } else {
            active.forEach((item, index) => {
                if (item.check === true) {
                    users.push({ ...item, check: false })
                    active.splice(index, 1)
                    setUsers([...users])
                    setActive([...active])
                }
            })
        }
    }


    const changeInp = (id) => {
        users.forEach((item, index) => {
            if (item.id === id) {
                item.check = !item.check
            }
        })
    }

    const changeInp2 = (id) => {
        active.forEach((item, index) => {
            if (item.id === id) {
                item.check = !item.check
            }
        })
    }


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>Active</h1>
                        </div>
                        <div className="card-body">
                            <table className=' table table-bordered table-striped'>
                                {
                                    users.map((item, index) => {
                                        return <div key={index} className=' d-flex '>
                                            <h3>{item.id}.  {item.name}</h3>
                                            <input type="checkbox" onChange={() => changeInp(item.id)} className='mx-3' />
                                        </div>
                                    })
                                }
                            </table>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => addButton("users")} className=' btn btn-primary'>o'tkazish</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>Users</h1>
                        </div>
                        <div className="card-body">
                            <table className=' table table-bordered table-striped'>
                                {
                                    active.map((item, index) => {
                                        return <div key={index} className=' d-flex '>
                                            <h3>{item.id}.  {item.name}</h3>
                                            <input type="checkbox" onChange={() => changeInp2(item.id)} className='mx-3' />
                                        </div>
                                    })
                                }
                            </table>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => addButton("active")} className=' btn btn-primary'>o'tkazish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
