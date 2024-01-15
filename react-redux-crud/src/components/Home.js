import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {
 
  const contacts = useSelector((state)=> state);
  const dispatch = useDispatch();

  const deleteContact = (id) =>{
    const shouldDelete = window.confirm('Are you sure you want to delete this contact?');
    if (shouldDelete) {
    dispatch({type: "DELETE_CONTACT", payload:id});
    toast.success('Student deleted Successfully!');
  };
  }
  return (
    <>
    <ToastContainer/>
    <div className='container'>
    <div className='row'>
        <div className='col-md-12 my-5 text-right'>
            <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
        </div>
        <div className='col-md-6 mx-auto'>
            <table className='table table-hover'>
              <thead className='text-white bg-dark text-center'>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Number</th>
                <th scope='col'>Action</th>
              </thead>
              <tbody>
                {
                  contacts.map((contact, id)=>(
                    <tr key={id}>
                      <td>{id+1}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.number}</td>
                      <td className='text-center'>
                        <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary'>Update</Link>
                       <button onClick={()=> deleteContact(contact.id)} className='btn btn-small btn-danger mx-2'>Delete</button>  
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>

    </div> 
    </div>
    </>
  )
}

export default Home