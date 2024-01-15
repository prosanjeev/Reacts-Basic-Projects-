import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';


const Add = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state)=> state);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
      e.preventDefault();

      const checkEmail= contacts.find(
        (contact) => contact.email === email && email
      );
      const checkNumber= contacts.find(
        (contact) => contact.number === parseInt(number)  
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
        id: contacts[contacts.length-1].id +1,
        name,
        email,
        number,
      }
      dispatch({type: "ADD_CONTACT", payload: data});
      toast.success('Student Addded Successfully!');
    };

  return (
    <>
    <ToastContainer/>
    <div className='container'>
    <div className='row'>
        <h1 className='display-3  text-center'>
           Add Student
        </h1>
        <div className='col-md-6 shadow mx-auto p-5'>
           <form onSubmit={handleSubmit} >
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
                value={number} onChange={e => setNumber(e.target.value)} />
              </div>
              <div className='form-group'>
                <input type="submit" value="Add Student"  className='btn btn-block btn-dark' />
              </div>
           </form>
        </div>

    </div> 
    </div></>
  )
}

export default Add