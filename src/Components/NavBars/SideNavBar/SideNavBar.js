/* Components */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signOutUser, clearPetProfilesData  } from '../../../storage'
import {UITEXT} from '../../../Global/Constants'
import { Converters, Helpers} from '../../../Global/Helpers'

/* Stylings */
import '../../../Styles/Components/NavBars/SideNavBar/SideNavBar.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPaw, faBarsProgress, faBell, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton'

import { useNavigate } from 'react-router-dom'

function SideNavBar(props) {

  const [welcomeState, setWelcomeState] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    /* Get the current time to determine which state of the day */
    const UpdateWelcomeState = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      if(currentHour >= 5 && currentHour < 12){
        setWelcomeState(Converters.CapitalConverter(UITEXT.GOOD_MORNING_TEXT));
      }
      else if(currentHour >= 12 && currentHour < 17){
        setWelcomeState(Converters.CapitalConverter(UITEXT.GOOD_AFTERNOON_TEXT));
      }
      else if(currentHour >= 17 && currentHour < 20){
        setWelcomeState(Converters.CapitalConverter(UITEXT.GOOD_EVENING_TEXT));
      }
      else{
        setWelcomeState(Converters.CapitalConverter(UITEXT.GOOD_NIGHT_TEXT));
      }
    };

    UpdateWelcomeState();

    const interval = setInterval(UpdateWelcomeState, 60000);

    return () => clearInterval(interval);
  }, []);
  
  const OnSignOut = () => {
    props.signOutUser();
    props.clearPetProfilesData();
    navigate('/');

  }

  return (
    <div className='sideNavBar'>
      {/* Profile Section */}
      <div className='profileContainer'>
        {/* Avatar */}
        <div className='flexRowCenter profileAvatarContainer'>
          <FontAwesomeIcon icon={Helpers.GetAvatarIcon(props.userAvatar)} className='profileAvatar'/>
        </div>
        {/* Text */}
        <div className='profileInformationTextContainer'>
          <p> 
            <span className='heading4'>{welcomeState}</span>
            <br/>
            <span className='paragraph3'>{props.userName}</span>
          </p>
        </div>
      </div>
      {/* Navigation List Section */}
      <div className='navigationListContainer'>
        <NavBarButton icon={faHouse} title='Dashboard'/>
        <NavBarButton icon={faPaw} title='Pets'/>
        <NavBarButton icon={faBarsProgress} title='Tasks'/>
        <NavBarButton icon={faBell} title='Activities'/>
        <NavBarButton icon={faGear} title='Settings'/>
      </div>
      <NavBarButton icon={faRightFromBracket} title='Sign Out' onClick={OnSignOut}/>
    </div>
  )
}

const mapDispatchToProps = {
  signOutUser,
  clearPetProfilesData,
}

export default connect(null, mapDispatchToProps)(SideNavBar)