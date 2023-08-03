import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateUser from "../Components/Users/CreateUser"
import User from '../Components/Users/User'
import EditUser from '../Components/Users/EditUser';
import ViewUser from '../Components/Users/ViewUser';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/dashboard/Dashboard';
import AuditLogs from '../Components/Layout/AuditLogs';
import Settings from '../Components/services/Settings';

const Routed = () => {
  return  <Router>   
      <Routes>
      <Route path='/'  element={<Navigate to="/login" element={<Login />} /> } />
      <Route path='/login' element={<Login />}/>     
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path="/user" element={<User />} />
      <Route path="/adduser" element={<CreateUser />}/>
      <Route path='/edituser/:userId' element={<EditUser />}/>
      <Route path='/viewuser/:userId' element={<ViewUser />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/log' element={<AuditLogs />}/>
      </Routes>        
    </Router>   
   
}

export default Routed
