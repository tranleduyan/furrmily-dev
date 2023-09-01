//#region Import Components
import React, { useState, useEffect } from "react";
import SimpleBar from 'simplebar-react';
import axios from "axios";
import { API } from "../../../Global/Constants";
import FriendCard from '../../Cards/FriendCard/FriendCard';
// #endregion

// #region Import Stylings
import "../../../Styles/Components/Lists/FriendsList/FriendsList.css";
// #endregion

function FriendsList(props) {
  // #region Variables Declaration

  /** Empty Message */
  const [message, setMessage] = useState('');

  /** API URL: `/api/users/friends/{userId}` and API Key */
  const apiURL = `${API.getUserFriendsListURL}${props.userId}` 
  const apiKey = API.key;

  /** User's friends list use state */
  const [friendsListData, setFriendsListData] = useState([]);

  /** ClassName for friends list */
  const className= `FriendsList-container ${props.className}`;

  // #endregion

  // #region Fetch User's Friend List 
  useEffect(() => {
    /* Get Method */
    axios
      .get(apiURL, {
        headers: {
          'X-API-KEY': apiKey,
        }
      })
      .then(response => {
        if(response.status === 200){
          const JSONFormat = JSON.stringify(response.data.responseObject);
          setFriendsListData(JSON.parse(JSONFormat));
          setMessage('');
        }
        else{
          setMessage(response.data.message);
        }
      })
      .catch(error => {
        setMessage(error.response.data.message);
      })
  }, [apiURL, apiKey])
  return (
    <SimpleBar className={className}>
        {friendsListData.length === 0 ? (
          <div className="FriendsList-messageContainer"> 
            <p className='FriendsList-message paragraph2'>{message}</p>
          </div>
        ) : (
            <div className="FriendList-cardContainer">
            {friendsListData.map((friend,index) => (
                <FriendCard 
                    key={friend.friendshipId}
                    id={friend.friendshipId}
                    friendId={friend.friendId}
                    firstName={friend.firstName}
                    middleName={friend.middleName}
                    lastName={friend.lastName}
                    username={friend.username}
                    friendAvatar={friend.friendAvatar}
                    className={index === friendsListData.length - 1 ? 'FriendCard-lastCardContainer' : ''} //Initialize className for the last card
                />
            ))}
            </div>
        )}
    </SimpleBar>
  )
}

export default FriendsList