import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../Assets/profile.PNG'
import '../Assets/topnav.css'

const TopNav = () => {
  return (
    <div className="top_nav">
        <div className="top_nav-wrapper">
            <div className="search_box">
                <input type="text" placeholder='search' className="text" />
                <span><i class="ri-search-line"></i></span>
            </div>
            <div className="top_nav-right">
                <span className="notification">
                <i class="ri-notification-3-line"></i>
                <div className="profile">
                    
                    <Link to='/settings'>
                        <img src={profileImg} alt="My Profile" />
                    </Link>          
                     </div>                

                </span>
            </div>
        </div>
    </div>
  );
}

export default TopNav;
