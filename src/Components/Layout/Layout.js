import React from 'react'
import NavBar from './NavBar'
import TopNav from './TopNav'
import App from '../../App'

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <div className="main_layout">
         <TopNav />
        <div className="content">
            <App />
        </div>
      </div>

    </div>
  )
}

export default Layout
