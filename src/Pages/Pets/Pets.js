/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'

/* Stylings */
import '../../Styles/Pages/Pets/Pets.css'

/* Icons */

function Pets() {
  return (
    <div className='wrapper Pets-wrapper'>
      <SideNavBar userName={'Walker'}/>
      <div className='Pets-content'>

      </div>
    </div>
  )
}

export default Pets