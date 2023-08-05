/* Components */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../../../storage'
import {UITEXT} from '../../../Global/Constants'
import { Converters, Helpers} from '../../../Global/Helpers'

/* Stylings */
import '../../../Styles/Components/NavBars/SideNavBar/SideNavBar.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPaw, faBarsProgress, faBell, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton'

/* Avatar Icons */
import { faFishFins, faHippo, faOtter, 
  faCow, faDog, faFeather, faFish, 
  faDragon, faKiwiBird, faWorm, faShrimp, 
  faHorseHead, faHorse, faFrog, faFeatherPointed, 
  faDove, faCrow, faCat, faUser } from '@fortawesome/free-solid-svg-icons'
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

  /* Return the user avatar icon based on the stored string */
  const GetAvatarIcon = (avatarName) => {
    switch(avatarName){
      case 'faFishFins':
        return faFishFins;
      case 'faHippo':
        return faHippo;
      case 'faDog':
        return faDog;
      case 'faCow':
        return faCow;
      case 'faFeather':
        return faFeather;
      case 'faFish':
        return faFish;
      case 'faDragon':
        return faDragon;
      case 'faKiwiBird':
        return faKiwiBird;
      case 'faWorm':
        return faWorm;
      case 'faShrimp':
        return faShrimp;
      case 'faHorseHead':
        return faHorseHead;
      case 'faHorse':
        return faHorse;
      case 'faFrog':
        return faFrog;
      case 'faFeatherPointed':
        return faFeatherPointed;
      case 'faDove':
        return faDove;
      case 'faCrow':
        return faCrow;
      case 'faCat':
        return faCat;
      case 'faOtter':
        return faOtter;
      default:
        return faUser;
    }
  }
  
  const OnSignOut = () => {
    props.signOutUser();
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
        <NavBarButton icon={faHouse} title={UITEXT.DASHBOARD_TEXT}/>
        <NavBarButton icon={faPaw} title={UITEXT.PETS_TEXT}/>
        <NavBarButton icon={faBarsProgress} title={UITEXT.TASKS_TEXT}/>
        <NavBarButton icon={faBell} title={UITEXT.ACTIVITIES_TEXT}/>
        <NavBarButton icon={faGear} title={UITEXT.SETTINGS_TEXT}/>
      </div>
      <NavBarButton icon={faRightFromBracket} title={Converters.CapitalConverter(UITEXT.SIGN_OUT_TEXT)} onClick={OnSignOut}/>
    </div>
  )
}

const mapDispatchToProps = {
  signOutUser,
}

export default connect(null, mapDispatchToProps)(SideNavBar)