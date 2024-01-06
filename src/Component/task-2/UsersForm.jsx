import React, { useState } from "react";
import ModalApp from "./ModalApp";
export default function UsersForm() {
    const [modal, setModal] = useState(false)

    const [users, setUsers] = useState([
        {
            id: 1,
            firstname: "palonchi",
            lastname: "palonchiyev",
            phone: "+998882133234",
            status: false,
            count: 0,
        },
        {
            id: 2,
            firstname: "Javlon",
            lastname: "Torsunov",
            phone: "+998992133234",
            status: false,
            count: 0,
        },
        {
            id: 3,
            firstname: "kindur",
            lastname: "kinduriv",
            phone: "+998502133234",
            status: false,
            count: 0,
        },
    ]);


    const increase = (index) => {
        users[index].count += 1
        setUsers([...users])
    }
    const decrease = (index) => {
        users[index].count -= 1
        setUsers([...users])
    }

    const check = (index) => {
        if (users[index].status === false) {
            users[index].status = true
            setUsers([...users])
        } else {
            users[index].status = false
            setUsers([...users])
        }
    }


    const removeUser = (index) => {
        users.splice(index, 1)
        setUsers([...users])
    }
    return (
        <div className="container my-5">
            <ModalApp modal={modal} toggle={() => setModal(false)} users={users} setUsers={setUsers} />
            <div className="row">
                <div className="col-8 offset-2 mt-5">
                    <button onClick={setModal} className="btn btn-primary">Add</button>
                    <table className="table table-bordered table-hovered my-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Phone</th>
                                <th>Active</th>
                                <th>Count</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <h6>{item.status ? "True" : "False"}</h6>
                                            <input type="checkbox" onClick={() => check(index)} checked={item.status} />
                                        </td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => decrease(index)}>-</button>
                                            <span>{item.count}</span>
                                            <button className="btn btn-info" onClick={() => increase(index)}>+</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeUser(index)}>
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
