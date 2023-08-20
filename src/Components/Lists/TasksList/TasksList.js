//#region Import Components
import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { API } from "../../../Global/Constants";
import axios from "axios";
//#endregion

//#region Import Stylings
import "../../../Styles/Components/Lists/TasksList/TasksList.css";
//#endregion

function TasksList(props) {

  //#region Variables

  /* Empty Tasks List Message */
  const [message, setMessage] = useState('');

  const apiURL = `${API.getUserTasksListURL}${props.userId}`;
  const apiKey = API.key;

  /* Data for Tasks List */
  const [tasksListData, setTasksListData] = useState([]);

  /* className for SimpleBar */
  const className = ` TasksList-container ${props.className}`;
  
  //#endregion

  //#region Functions 

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
          setTasksListData(JSON.parse(JSONFormat));
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

  //#endregion

  return (
    <SimpleBar className={className}>
      {tasksListData.length === 0 ? (
        <p className="TasksList-message paragraph2">{message}</p>
      ) : (
        tasksListData.map((task) => (
          <TaskCard
            key={task.taskId}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskDueDate={task.taskDueDate}
          />
        ))
      )}
    </SimpleBar>
  );
}

export default (TasksList);
