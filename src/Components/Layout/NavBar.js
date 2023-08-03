import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Assets/navbar.css';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="nav_container">
    <div className="nav_top">
      
      <h2>
      JPA AUDITING TOOL
      </h2>
     
    </div>
    <div className="nav_content">
    <div className="menu">
    <ul className="nav_list">
        <li className="nav_item">
          <NavLink className={` nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}          
           to={'/dashboard'}>
           <span><i class="ri-apps-2-line"></i></span>
            DASHBOARD
          </NavLink>
        </li>
        <li className="nav_item">
        
          <NavLink className={` nav-link ${activeTab === 'user-management' ? 'active' : ''}`}          
          to={'/user'}
          >
          <span><i class="ri-user-settings-line"></i></span>
            USER MANAGEMENT
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className={`nav-link ${activeTab === 'log' ? 'active' : ''}`}   to='/log'>
          <span><i class="ri-book-line"></i></span>
           AUDIT LOGS
          </NavLink>
        </li>
        
        <li className="nav_item">
          <NavLink className={` nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}          
           to={'/settings'}>
           <span><i class="ri-settings-2-line"></i></span>
            SETTINGS
            
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className={` nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}          
           to={'/'}>
          <span>
          <i className='ri-logout-circle-r-line'></i> </span>
          LOGOUT       
          </NavLink>
        </li>
      </ul>
    </div> 
    <div className="nav_bottom">
        
      </div>  

    </div>
     
    
      
    </div>
  );
};

export default NavBar
