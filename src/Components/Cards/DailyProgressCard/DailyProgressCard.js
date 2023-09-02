//#region Import Components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../Global/Constants";
import GeneralCard from "../GeneralCard/GeneralCard";
// #endregion

// #region Import Stylings
import "../../../Styles/Components/Cards/DailyProgressCard/DailyProgressCard.css";
// #endregion

function DailyProgressCard(props) {
  // #region Variable Declaration

  /** ClassName for GeneralCard */
  const className=`DailyProgressCard-cardContainer ${props.className}`;
  
  /** Task Daily Progress Object */
  const [taskDailyProgress, setTaskDailyProgress] = useState({});

  /** Empty Message */
  const [message, setMessage] = useState('');

  /** API URL: `/api/users/{userId}/daily-progress?datetime={datetime}` and API Key */
  const apiURL = `${API.getUserURL}${props.userId}/daily-progress?datetime=${new Date().toLocaleDateString()}`;
  const apiKey = API.key;

  // #endregion

  // #region Fetch User's Task Daily Progress 

  useEffect(()=>{
    /* Get Method */
    axios
      .get(apiURL, {
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then(response => {
        /* If success, set message to empty */
        if(response.status === 200){

          /* Stringify Response to parse for setting data for Task Daily Progress */
          const JSONFormat = JSON.stringify(response.data.responseObject);
          setTaskDailyProgress(JSON.parse(JSONFormat));
          setMessage('');
        }
      })

      /* Set error to the message */
      .catch(error => {
        setMessage(error.response.data.message);
      })
  }, [apiURL, apiKey]);

  // #endregin

  return (
    <GeneralCard className={className}>
      {message !== '' ? (
        <div className="DailyProgressCard-taskProgressMessageContainer flexRowCenter">
          <p className='paragraph2'>{message}</p>
        </div>
      ) : (
        <>
          <div className="DailyProgressCard-taskProgressContainer flexRowCenter">
            <div className="DailyProgressCard-taskProgressTextContainer flexRowCenter">
              <p className="paragraph1">{taskDailyProgress.taskDailyProgress}%</p>
            </div>
          </div>
          <div className="flexRowCenter DailyProgressCard-taskProgressStatusTextContainer">
            <p className="flexRowCenter">You completed {taskDailyProgress.taskCompleted} tasks today. There are {taskDailyProgress.taskLeft} tasks left with {taskDailyProgress.taskOverdue} tasks overdue. </p>
          </div>
        </>
      )}
    </GeneralCard>
  )
}

export default DailyProgressCard;
