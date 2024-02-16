
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import userImage from './images/user-removebg-preview.png'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from './Redux/Slice/Contacts';
import Edit from './Edit';
import { getAllContactsAPI } from './Services/allAPIs';

function App() {
  const dispatch=useDispatch()
  const [allContacts,setAllContacts]=useState("")
  const [contactDetails,setContactDetails]=useState({
    name:"",number:""
  })
  
  const handleAdd=()=>{
    const {name,number}=contactDetails
    if( !name || !number){
      alert("Please fill the form completly")
    }
    else{
      handleClose()
      setContactDetails({
       name:"",number:""
      })
      dispatch(addContact(contactDetails))
      
    }
  }
  const getAllContacts=async()=>{
    const result=await getAllContactsAPI()
    if(result.status==200){
      setAllContacts(result.data)
    }else{
      console.log(result.response.data);
    }
  }
  useEffect(()=>{
    getAllContacts()
  },[handleAdd])
  const handleRemove=(id)=>{
    dispatch(removeContact(id))
  }
  // AddShow
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div style={{minWidth:'800px'}} className='border border-3 ps-5 '>
          {allContacts?.length>0?<div style={{minHeight:'500px'}} >
          <Table className='fs-5' striped bordered hover>
      <thead >
        {allContacts?.map((detail,index)=>(
          <tr>
          <th>{index+1}</th>
          <th><img width={40} src={userImage} alt="" /></th>
          <th >{detail.name}</th>
          <th>{detail.number}</th>
          <th><Edit  detail={detail}/></th>
          <th><button onClick={()=>handleRemove(detail._id)} className='btn bg-danger rounded-3 px-3 py-1 text-black mt-3'><i class="fa-solid fa-trash-can"></i></button></th>
        </tr>
        ))}
      </thead>
        </Table>
          </div>:
          <div style={{minHeight:'500px'}} className='d-flex justify-content-center align-items-center'>
            <h1>Your Contacts is Empty please Add</h1></div>
          }
        <div className='d-flex justify-content-end '>
        <Button className='bg-success text-black border  rounded-5 m-3' onClick={handleShow}><i class="fa-solid fa-user-plus"></i></Button>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control onChange={e=>setContactDetails({...contactDetails,name:e.target.value})} type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Phone Number">
        <Form.Control onChange={e=>setContactDetails({...contactDetails,number:e.target.value})}
         type="number" placeholder="phoneNumber" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-black' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} className='bg-success text-black' variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
       
      </div>
  )
}

export default App
