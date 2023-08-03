import React from 'react'
import userService from './UserService';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import "./../Assets/adduser.css"



const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      swal('Error', 'Passwords do not match', 'error');

    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      swal('Error', 'assword must be at least 8 characters long', 'error');

    } else {
      setPasswordError('');
      const user = { firstName, lastName, email, phone, role, password, username };
      const createdUser = await userService.createUser(user);
      setUsers([...users, createdUser]);
      swal('Congratulations', 'User created successfully', 'success');
      setfirstName('');
      setlastName('');
      setEmail('');
      setPhone('');
      setRole('');
      setPassword('');
      setUsername('');
      setConfirmPassword('');
    }
  };
  


  return (
    <div className='container '>
     <div className="row">
       <div className=" border rounded shadow">
       <h2 className="text-center"> Register User</h2>
      
       <div className="input_class">
    {
        <form onSubmit={handleSubmit}>

        <div className="input_class">
        <label htmlFor="name" >
         Username:
          </label>
          <input type="text"
          className='formControl'
           placeholder='Enter username'          
           value={username} onChange={(e) => setUsername(e.target.value)}
           required />
      

        </div>

        <div className="input_class">
        <label htmlFor="name" className='form-label'>
          Password:
          </label>
          <input type="password" required  placeholder='enter password' className='formControl'   value={password} onChange={handlePasswordChange} />

        </div>

        <div className="input_class">
        <label htmlFor="name" className='form-label'>
          Retype:
          </label>
          <input type="password" required placeholder='enter password' className='formControl'   value={confirmPassword} onChange={handleConfirmPasswordChange}  />
               

        </div>
        <div className="input_class">
        <label htmlFor='address' className='form-label'>
          First Name:
          </label>          
          <input 
           placeholder='Enter first name'
           className='formControl'
          type="text" required value={firstName} onChange={(e) => setfirstName(e.target.value)} include />
        </div>

        <div className="input_class">
        <label htmlFor='address' className='form-label'>
          Last Name:
          </label>          
          <input 
           placeholder='Enter last name'
           className='formControl'
          type="text" required value={lastName} onChange={(e) => setlastName(e.target.value)} include />
        </div>
       

       <div className="input_class">
       
       <label className='form-label' htmlFor='email'>
          Email:
          </label>
          <input 
          placeholder='Enter user email'      
          className='formControl'    
          type="text" required  value={email} onChange={(e) => setEmail(e.target.value)} />
      
       </div>
        
        <div className="input_class">
        <label className='form-label' htmlFor='phone'>
          Phone:
          </label>
          <input type="text"
           placeholder='Enter your phone'
           className='formControl'
           value={phone} onChange={(e) => setPhone(e.target.value)} required  />
       
        </div>
        
       
       <div className="input_class">

       <label className='form-label' htmlFor='role'>
          Role:
          </label>
          <select  id="role"
            className='formControl'
           placeholder='select' value={role} onChange={(event) => setRole(event.target.value)}>
            <option >Select Your Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="anonymous">Anonymous</option>

          </select>


       </div>
       {passwordError && <div>{passwordError}</div>}
        <button type="submit" className='btn btn-outline-primary'>Save</button>
        <Link to={"/user"} type='submit' className='btn btn-outline-danger mx-2'>Cancel</Link>
      </form>
     
    }
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default CreateUser
