import React from 'react';
import "./Components/Assets/App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import User from './Components/Users/User';
import CreateUser from './Components/Users/CreateUser';
import EditUser from './Components/Users/EditUser';
import ViewUser from './Components/Users/ViewUser';
import Settings from './Components/services/Settings';
import AuditLogs from './Components/Layout/AuditLogs';



function App() {
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

export default App;
