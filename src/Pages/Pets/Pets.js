/* Components */
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'


/* Stylings */
import '../../Styles/Pages/Pets/Pets.css'

/* Icons */

function Pets({ userData }) {
  return (
    <div className='wrapper Pets-wrapper'>
      <SideNavBar userAvatar={userData.userAvatar} userName={userData.firstName}/>
      <div className='Pets-content'>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(Pets)