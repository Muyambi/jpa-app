import { useState, useEffect } from 'react';
import userService from './UserService';
import { Link } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import swal from 'sweetalert';
import '../Assets/dashboard.css'
import '../Assets/user.css'




const User = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const customersData = await userService.getAllUsers();
      const filteredUsers = customersData.filter(user => !user.deleted);
      setUsers(filteredUsers);
      console.log(filteredUsers);
      console.log(customersData);
    };
    fetchUsers();
   
  }, []);

 

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
       if (willDelete) {
        userService.deleteUser(id);
        const updatedUsers = users.filter((user) => user.userId !== id);
        setUsers(updatedUsers);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
   
  };

  return (
    <div className='user_container'>
      
     <div className="nav_bar">
    <NavBar />
      </div>
       <div className="user_table">
      <Link className='btn add_btn' to={"/adduser"}>Add User</Link>
      <table className='table border shadow'>
      
        <thead>
          <tr>
          <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Role</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((customer,index) => (
            
            <tr >
               <th scope='row' key={index}>{index+1}</th>
              <td >{customer.firstName}</td>
              <td >{customer.lastName}</td>
              <td >{customer.email}</td>
              <td >{customer.phone}</td>
              <td >{customer.role}</td>
              <td className='buttons_users'>
                <Link to={`/viewuser/${customer.userId}`} className='btn btn_view'>view</Link>
                <Link to={`/edituser/${customer.userId}`} className='btn btn_edit'>edit</Link>
                <button className='btn btn_delete'
                 onClick={() => handleDelete(customer.userId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default User;
