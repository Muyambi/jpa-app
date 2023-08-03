import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import "../Assets/auditlog.css"


const AuditLogs = () => {    
    
    const [logs, setLogs] = useState([])
    
     useEffect(() => {
        const fetchLogs = async () => {
        const logsData = await axios.get(`http://localhost:8080/users/logs`);
        console.log(logsData.data)
        setLogs(logsData.data);
        };
        fetchLogs();
           
          }, []);
       

  return (
    <div className='container'>
    <div className="nav_bar">
    <NavBar />
      </div>
     <div className="containers">
        <table className='table border shadow'>
      
        <thead>
          <tr>
          <th scope='col'>#</th>
            <th scope='col'>Action</th>
            <th scope='col'>Date</th>
            <th scope='col'>Modifier</th>
            <th scope='col'>Content</th>
            <th scope='col'>User ID</th>
            
          </tr>
        </thead>
        <tbody>
          {logs.map((log,index) => (
            <tr >
               <th scope='row' key={index}>{index+1}</th>
              <td >{log.action}</td>
              <td >{log.modifiedDate}</td>
              <td >{log.modifiedBy}</td>
              <td >{log.userContent}</td>
              <td >{log.userId}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
    </div>
  )
}


export default AuditLogs
