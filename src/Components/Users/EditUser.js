import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';
import "./../Assets/adduser.css"

function EditUser() {
  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setlastName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const {userId} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        setfirstName(response.data.firstName);
        setEmail(response.data.email);
        setlastName(response.data.lastName);
        setPhone(response.data.phone);
        setRole(response.data.role);
        setPassword(response.data.password);
        setUsername(response.data.username);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Failed to retrieve user information.');
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      firstName,
      lastName,
      email,
      phone,
      role,
      username,
      password
    };

    axios.put(`http://localhost:8080/users/${userId}`, updatedUser)
      .then(response => {
        console.log(response.data);
        swal("congradulations", "data saved successfully", "success")
      })
      .catch(error => {
        console.log(error);       
        swal("sorry", "Failed to update user information.", "error")
      });
  };

  return (
    <div className='container pt-1'>
    <div className="row pt-1">
      <div className="display border rounded shadow">
      <h2 className="text-center m-1"> Edit User</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <div className="input_class">
   {
       <form onSubmit={handleSubmit}>

       <div className="input_class">
       <label htmlFor="name" className='form-label'>
         Name:
         </label>
         <input type="text"
         className='form-control'
         placeholder='Enter user name'  
         required        
          value={firstName} onChange={(e) => setfirstName(e.target.value)} />
     

       </div>
       <div className="input_class">
       <label htmlFor='lastname' className='form-label'>
         Address:
         </label>          
         <input 
          className='form-control'
         placeholder='Enter user lastname'
         type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} required/>
       </div>
      

      <div className="input_class">
      
      <label className='form-label' htmlFor='email'>
         Email:
         </label>
         <input 
         className='form-control'
         placeholder='Enter user email'          
         type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
     
      </div>
       
       <div className="input_class">
       <label className='form-label' htmlFor='phone'>
         Phone:
         </label>
         <input type="tel"
                 className='form-control'
         placeholder='Enter your phone'
         required
          value={phone} onChange={(e) => setPhone(e.target.value)} />
      
       </div>
      
      <div className="input_class">

      <label className='form-label' htmlFor='role'>
         Role:
         </label>
         <select className='form-control' id="role"  value={role} onChange={(event) => setRole(event.target.value)}>
           <option value="admin">Admin</option>
           <option value="user">User</option>
         </select>


      </div>
      <div className="input_class">
       <label className='form-label'>
         Username:
         </label>
         <input type="text"
         className='form-control'
         placeholder='Enter your username'
          value={username} onChange={(e) => setUsername(e.target.value)} 
            required
          />
      
       </div>

      <div className="input_class">

      <label className='form-label'>
        Password:
         </label>
         <input type='password' className='form-control'  placeholder='Enter your username' id="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          

      </div>
      
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

export default EditUser;
