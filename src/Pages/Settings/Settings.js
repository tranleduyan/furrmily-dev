/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'

/* Stylings */
import '../../Styles/Pages/Settings/Settings.css'

/* Icons */

function Settings({userData}) {
  return (
    <div className='wrapper Settings-wrapper'>
      <SideNavBar userAvatar={userData.userAvatar} userName={userData.firstName}/>
      <div className='Settings-content'>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(Settings)