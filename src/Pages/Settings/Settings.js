/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'

/* Stylings */
import '../../Styles/Pages/Settings/Settings.css'

/* Icons */

function Settings() {
  return (
    <div className='wrapper Settings-wrapper'>
      <SideNavBar userName={'Walker'}/>
      <div className='Settings-content'>

      </div>
    </div>
  )
}

export default Settings