/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'

/* Stylings */
import '../../Styles/Pages/Activities/Activities.css'

/* Icons */

function Activities() {
  return (
    <div className='wrapper Activities-wrapper'>
      <SideNavBar userName={'Walker'}/>
      <div className='Activities-content'>

      </div>
    </div>
  )
}

export default Activities