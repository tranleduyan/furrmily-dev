//#region Import Component
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'
//#endregion

//#region Import Stylings
import '../../Styles/Pages/Pets/Pets.css'
//#endregion

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
  userData: state.user.userData,
});

export default connect(mapStateToProps)(Pets)