import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Edit = () => {
  const {id} =useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state)=> state);
  const dispatch = useDispatch();
  const currentContact = contacts.find(contact => contact.id === parseInt(id))

  useEffect(()=> {
   if (currentContact){
    setName(currentContact.name);
    setEmail(currentContact.email);
    setNumber(currentContact.number);
   }
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();

    const checkEmail= contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email &&email );
    const checkNumber= contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number)  
    );

    if(!email || !number || !name) {
      return toast.warning("Please fill in all Fiels!")
    }
    if (checkEmail){
      return toast.error("This Email already exists!")
    }
    if (checkNumber){
      return toast.error("This Number already exists!")
    }
    const data ={
      id: parseInt(id),
      name,
      email,
      number,
    }
    dispatch({type: "UPDATE_CONTACT", payload: data});
    toast.success('Student Updated Successfully!');
  };
  
  return (
    <div className='container'>
      <ToastContainer/>
      {currentContact? ( <> <div className='row'>
        <h1 className='display-3  text-center'>
           Edit Student {id}
        </h1>
        <div className='col-md-6 shadow mx-auto p-5'>
           <form onSubmit={handleSubmit}>
              <div className='form-group py-2'>
                <input type="text" placeholder='Name' className='form-control' 
                  value={name} onChange={e => setName(e.target.value)}/>
              </div>
              <div className='form-group py-2'>
                <input type="email" placeholder='Email' className='form-control' 
                value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className='form-group py-2'>
                <input type="number" placeholder='Phone Number' className='form-control'
                value={number} onChange={e => setNumber(e.target.value)}  />
              </div>
              <div className='form-group'>
                <input type="submit" value="Update Student"  className='btn  btn-dark ' />
                <Link to="/"  className='btn  btn-danger mx-3' >Cancel</Link>
              </div>
           </form>
        </div>

    </div> </>) : ( <h1 className='display-3  text-center'>
            Studentcontact with id {id} not exits
        </h1>)}
    </div>
  )
}

export default Edit