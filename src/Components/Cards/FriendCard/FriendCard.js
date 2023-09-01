//#region Import Components
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { Helpers } from '../../../Global/Helpers';
// #endregion

// #region Import Stylings
import '../../../Styles/Components/Cards/FriendCard/FriendCard.css'
// #endregion

function FriendCard(props) {

    // #region Variables Declaration
    
    /** ClassName for the card  */
    const className = props.className.length === 0 ? `FriendCard-container` : props.className;

    /** Friend Entity with information */
    const friendInformation = {
        id: props.friendshipId,
        friendId: props.friendId,
        firstName: props.firstName,
        middleName: props.middleName,
        lastName: props.lastName,
        username: props.username,
        friendAvatar: props.friendAvatar
    }

    /** Retrieving user avatar from library 'free-solid-svg-icons' */
    const icon = solidIcons[friendInformation.friendAvatar];

    // #endregion
    
  return (
    <div className={className}>
         {/* Friend's Avatar Container*/}
        <div className="FriendCard-userAvatarContainer flexRowCenter">
            <div className="FriendCard-userAvatar flexRowCenter">
                <FontAwesomeIcon icon={icon}/>  
            </div>
        </div>
        {/* Friend's Name Container*/}
        <div className="FriendCard-userNameContainer paragraph1 flexRowCenter">
           {Helpers.TruncateString(friendInformation.firstName, 7)}
        </div>
    </div>
  )
}

export default FriendCard