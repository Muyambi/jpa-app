import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import '../Assets/login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', { username, password });
      const { message, status } = response.data;
      if (status) {
        setMessage(message)
        swal("Congrats!", message, "success");
        navigate('/dashboard');
      }
      else{
        setMessage(message)
        swal("Sorry", message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='container pt-4 bg-primary-light' >
    <div className='col-md-6 offset-md-3 border rounded p-3 mt-1 shadow'>
    <p>User Auditing </p>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className=''>
        <div className='username'>
          <label >Username:</label> 
          <input type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
       
        <div  className='password'>
        <label >
          Password:
        </label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
        </div>
       
       <div>
       <button label className='mb-2' type="submit">Submit</button>

       </div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default Login;
