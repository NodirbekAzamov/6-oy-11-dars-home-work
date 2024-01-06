import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
export default function ModalApp({ modal, toggle, users, setUsers }) {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")


    const addUser = (e)  => {
        e.preventDefault();
        let paylod = {
            firstname,
            lastname,
            phone,
            status: false,
            count: 0,
        }
        setUsers([...users, {...paylod}])
    }

    const changeFisrt = (e) => {
        setFirstname(e.target.value)

    }
    const changeLast = (e) => {
       setLastname(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }



    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
                <h1>Add new User</h1>
            </ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={addUser} id="form">
                        <input type="text" placeholder='FirstName' onChange={changeFisrt} className='form-control my-3' />
                        <input type="text" placeholder='LastName' onChange={changeLast} className='form-control my-3' />
                        <input type="text" placeholder='Phone' onChange={changePhone} className='form-control my-3' />
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-primary'>Add User</button>
            </ModalFooter>
        </Modal>
    )
}
