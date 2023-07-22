/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Pages/DashboardPage/Dashboard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFishFins, faHouse, faPaw, faBarsProgress, faBell, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  return (
    <div className='wrapper Dashboard-wrapper'>
      <div className='Dashboard-sideNavBar'>
        {/* Profile Section */}
        <div className='Dashboard-profileContainer'>
          {/* Avatar */}
          <div className='flexRowCenter Dashboard-profileAvatarContainer'>
            <FontAwesomeIcon icon={faFishFins} className='Dashboard-profileAvatar'/>
          </div>
          {/* Text */}
          <div className='Dashboard-profileInformationTextContainer'>
            <p> 
              <span className='heading4'>Good Afternoon, </span>
              <br/>
              <span className='paragraph3'>Walker</span>
            </p>
          </div>
        </div>
        {/* Navigation List Section */}
        <div className='Dashboard-navigationListContainer'>
          <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faHouse} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Dashboard</p>
          </div>
          <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faPaw} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Pets</p>
          </div>
          <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faBarsProgress} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Tasks</p>
          </div>
          <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faBell} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Activities</p>
          </div>
          <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faGear} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Settings</p>
          </div>
        </div>
        <div className='Dashboard-navButtonContainer'>
            <FontAwesomeIcon icon={faRightFromBracket} className='Dashboard-navIcon'/>
            <p className='paragraph2'>Sign Out</p>
          </div>
        
      </div>
      <div className='Dashboard-content'>

      </div>
    </div>
  )
}

export default Dashboard