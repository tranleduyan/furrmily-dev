/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'

/* Stylings */
import '../../Styles/Pages/Activities/Activities.css'

/* Icons */

function Activities({ userData }) {
  return (
    <div className='wrapper Activities-wrapper'>
      <SideNavBar userAvatar={userData.userAvatar} userName={userData.firstName}/>
      <div className='Activities-content'>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(Activities)