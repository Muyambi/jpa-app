import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ViewUser = () => {
const {userId} = useParams();

const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    role:'',
    createdDate:'',
    lastModifiedDate:'',
    createdBy:'',
    lastModifiedBy:''
})

useEffect(()=>{
    loadUser()
},[])

const loadUser = async (e) =>{
    const result = await axios.get(`http://localhost:8080/users/audit/${userId}`)
    setUser(result.data)
}

  return (
  <div className='container pt-1'>
  <div className="row pt-1">
    <div className="">
    <h2 className="text-center"> User Details</h2>
    
 {
     <div className='card'>
    
         Details of user id: {user.userId}
        <ul className="list-group">
            <li className="list-group-item">
                <b >First Name :</b>
              {user.firstName}
            </li>
            <li className="list-group-item">
                <b>Last Name : </b>
                {user.lastName}
            </li>
            <li className="list-group-item">
                <b>Email :</b>
                {user.email}
            </li>
            <li className="list-group-item">
                <b>Phone : </b>
                {user.phone}
            </li>
            <li className="list-group-item">
                <b> Role : </b>
               <span className='ml-3'>{user.role}</span> 

            </li>
            Auditing Info
            <li className="list-group-item">
           <b>Date Created</b> {user.createdDate}</li>
            <li className="list-group-item" ><b>Date Modified:</b> {user.lastModifiedDate} </li>
            <li className="list-group-item"><b>Creator:</b>  {user.createdBy} </li>
            <li className="list-group-item"><b>Modifier:</b>   {user.lastModifiedBy}</li>
            

        </ul>
    
    
    
     <Link to={"/user"} className='btn btn-outline-primary'>Back to home</Link>
        </div>
  
 }
 </div>

 </div>
   
 </div>
)
}

export default ViewUser
