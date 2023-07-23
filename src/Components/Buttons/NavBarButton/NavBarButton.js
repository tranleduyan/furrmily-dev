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
    const currentLocation = location.pathname;
    if(currentLocation.startsWith('/Dashboard') && props.title === 'Dashboard'){
      return true;
    }
    else if(currentLocation.startsWith('/Pets') && props.title === 'Pets'){
      return true;
    }
    else if(currentLocation.startsWith('/Tasks') && props.title === 'Tasks'){
      return true;
    }
    else if(currentLocation.startsWith('/Activities') && props.title === 'Activities'){
      return true;
    }
    else if(currentLocation.startsWith('/Settings') && props.title === 'Settings'){
      return true;
    }
    return false;
  }

  const navigate = useNavigate();

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

  const className = (isPageActive()) ? 'navButtonContainer navButtonContainerActive': 'navButtonContainer';
  return (
    <button className= {className} onClick={NavigatePage}>
        <FontAwesomeIcon icon={props.icon} className='navIcon'/>
        <p className='paragraph2'>{props.title}</p>
    </button>
  )
}

export default NavBarButton