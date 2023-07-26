import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'

/* Stylings */
import '../../'

/* Icons */

function Tasks({ userData }) {
  return (
    <div className='wrapper Tasks-wrapper'>
      <SideNavBar userAvatar={userData.userAvatar} userName={userData.firstName}/>
      <div className='Tasks-content'>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(Tasks)