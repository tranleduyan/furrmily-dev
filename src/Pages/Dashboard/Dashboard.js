/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Pages/DashboardPage/Dashboard.css'

/* Icons */
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'

function Dashboard() {
  return (
    <div className='wrapper Dashboard-wrapper'>
      <SideNavBar userName={'Walker'}/>
      <div className='Dashboard-content'>

      </div>
    </div>
  )
}

export default Dashboard