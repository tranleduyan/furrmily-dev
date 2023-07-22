/* Components */
import React, { useState, useEffect } from 'react'

/* Stylings */
import '../../../Styles/Components/NavBars/SideNavBar/SideNavBar.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFishFins, faHouse, faPaw, faBarsProgress, faBell, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton'

function SideNavBar(props) {

  const [welcomeState, setWelcomeState] = useState('');

  useEffect(() => {

    /* Get the current time to determine which state of the day */
    const updateWelcomeState = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      if(currentHour >= 5 && currentHour < 12){
        setWelcomeState('Good Morning,');
      }
      else if(currentHour >= 12 && currentHour < 17){
        setWelcomeState('Good Afternoon,');
      }
      else if(currentHour >= 17 && currentHour < 20){
        setWelcomeState('Good Evening,');
      }
      else{
        setWelcomeState('Good Night,');
      }
    };

    updateWelcomeState();

    const interval = setInterval(updateWelcomeState, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sideNavBar'>
      {/* Profile Section */}
      <div className='profileContainer'>
        {/* Avatar */}
        <div className='flexRowCenter profileAvatarContainer'>
          <FontAwesomeIcon icon={faFishFins} className='profileAvatar'/>
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
      <NavBarButton icon={faRightFromBracket} title='Sign Out'/>
    </div>
  )
}

export default SideNavBar