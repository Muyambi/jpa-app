import React from 'react'
import '../Assets/dashboard.css'
import NavBar from '../Layout/NavBar'
import TopNav from '../Layout/TopNav'
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const Dashboard = () => {
  const data = {
    labels:["mon", 'tue', 'wed', 'thur', 'fri'],
    datasets:[{
      label:"Daily modifications",
      data:[5,10,17,2,9,10],
      backgroundColor:'rgba(112,48,160,0.8)',
      borderColor:'black',
      borderWidth:1

  }]
  }
  const options = {}

  return (
    
    <div className='container'>
    <div className="nav_bar">
    <NavBar />
      </div>
     
      <div className="dashboard">
        
      <div className="dashboard_cards">
        <div className="single_card">
          <div className="card_content">
          <h4 >DELETIONS MADE</h4>
          <span>12</span>
          </div>
         
        </div>

        <div className="single_card">
          <div className="card_content">
          <h4>UPDATIONS MADE</h4>
          <span>13</span>
          </div>
         
        </div>

        <div className="single_card">
          <div className="card_content">
          <h4>CREATIONS MADE</h4>
          <span>8</span>
          </div>
         
        </div>        
      </div>
      <div className="bar_charts"></div>
      <Bar data={data}
      options={options}
      ></Bar>
      </div>
    </div>
  )
}

export default Dashboard