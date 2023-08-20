/* Components */
import React, { useState } from "react";
import GeneralCard from "../GeneralCard/GeneralCard";
import { Helpers } from "../../../Global/Helpers";

/* Styling */
import "../../../Styles/Components/Cards/TaskCard/TaskCard.css";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBolt } from "@fortawesome/free-solid-svg-icons";

function TaskCard(props) {
  const taskId = props.taskId;
  const taskName = `${props.taskName}`;
  const taskStatus = `${props.taskStatus}`;
  const taskDueDate = `${Helpers.ConvertTimeStamp(props.taskDueDate)}`;
  const taskStatusClassName =
    taskStatus === "C" || taskStatus === "c"
      ? "flexColumnCenter TaskCard-taskCompleteIconContainer" //If taskStatus is C - means Complete (C)
      : "flexColumnCenter TaskCard-taskInProgressIconContainer"; //If taskStatus is not C - means In Progress (IP)
  const taskStatusIcon =
    taskStatus === "C" || taskStatus === "c" ? faCheck : faBolt; //Use faCheck icon if taskStaus is C, faBolt if taskStatus is not C

  return (
    <GeneralCard>
      {/* Task Status Icon Section */}
      <div className="flexRowCenter TaskCard-taskStatusContainer">
        <div className={taskStatusClassName}>
          <FontAwesomeIcon icon={taskStatusIcon} />
        </div>
      </div>

      {/* Task Information Section */}
      <div className="TaskCard-taskInformationContainer">
        <p className="paragraph2 TaskCard-taskDueDateContainer">{taskDueDate}</p>
        <p className="paragraph2 TaskCard-taskNameContainer">{taskName}</p>
      </div>
    </GeneralCard>
  );
}

export default TaskCard;
