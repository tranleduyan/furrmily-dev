/* Components */
import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

/* Stylings */
import '../../../Styles/Components/Buttons/NavBarButton/NavBarButton.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBarButton(props) {

  const location = useLocation();

  const isPageActive = () => {
    
    /* Get Current Location Path Name */
    const currentLocation = location.pathname;
    
    /* If title is Dashboard and Location Path Name starts with '/Dashboard', return true as 'active' with the page */
    if(currentLocation.startsWith('/Dashboard') && props.title === 'Dashboard'){
      return true;
    }

    /* Else if title is Pets and Location Path Name starts with '/Pets', return true as 'active' with the page */
    else if(currentLocation.startsWith('/Pets') && props.title === 'Pets'){
      return true;
    }

    /* Else if title is Tasks and Location Path Name starts with '/Tasks', return true as 'active' with thepage */
    else if(currentLocation.startsWith('/Tasks') && props.title === 'Tasks'){
      return true;
    }

    /* Else if title is Activities and Location Path Name starts with '/Activities', return true as 'active' with the page */
    else if(currentLocation.startsWith('/Activities') && props.title === 'Activities'){
      return true;
    }

    /* Else if title is Settings and Location Path Name starts with '/Settings', return true as 'active' with the page */
    else if(currentLocation.startsWith('/Settings') && props.title === 'Settings'){
      return true;
    }

    /* Else, is not active with the page*/
    return false;
  }

  const navigate = useNavigate();

  /* Navigate to the corresponding page */
  const NavigatePage = () => {
    if(props.title === 'Dashboard'){
      navigate('/Dashboard');
    }
    else if(props.title === 'Pets'){
      navigate('/Pets');
    }
    else if(props.title === 'Tasks'){
      navigate('/Tasks');
    }
    else if(props.title === 'Activities'){
      navigate('/Activities');
    }
    else if(props.title === 'Settings'){
      navigate('/Settings');
    }
  }

  /* Active based on if the button is active with the page */
  const className = (isPageActive()) ? 'navButtonContainer navButtonContainerActive'
                                     : 'navButtonContainer';
  return (
    <button className= {className} 
            onClick={(!props.onClick) ? NavigatePage : props.onClick}>
        <FontAwesomeIcon icon={props.icon} className='navIcon'/>
        <p className='paragraph2'>{props.title}</p>
    </button>
  )
}

export default NavBarButton