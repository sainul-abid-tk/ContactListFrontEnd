import React, { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editContacts } from './Redux/Slice/Contacts';
function Edit({detail}) {
    const dispatch=useDispatch()
    const [editContact,setEditContact]=useState()
    const save=(editContact)=>{
        dispatch(editContacts(editContact))
        handleEditClose()
      }
    // Edit Show
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () =>{
    setEditShow(true);
    setEditContact({
     _id:detail._id,name:detail.name,number:detail.number
    })
  } 
  return (
    <div>
        <button onClick={handleEditShow} className='btn bg-warning rounded-3 px-3 py-1 text-black mt-3'><i class="fa-solid fa-user-pen"></i></button>
          <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control  value={editContact?.name} onChange={e=>setEditContact({...editContact,name:e.target.value})}
         type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Phone Number">
        <Form.Control value={editContact?.number} onChange={e=>setEditContact({...editContact,number:e.target.value})}
         type="text" placeholder="Password" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-black' variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button onClick={()=>save(editContact)} className='bg-success text-black' variant="primary">
            Save
          </Button>
        </Modal.Footer>
          </Modal>
    </div>
  )
}

export default Edit