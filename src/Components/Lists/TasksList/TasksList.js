/* Components */
import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import TaskCard from "../../Cards/TaskCard/TaskCard";

/* Stylings */
import "../../../Styles/Components/Lists/TasksList/TasksList.css";

function TasksList(props) {
  /* Empty Tasks List Message */
  let message = "";

  /* Data for Tasks List */
  const [tasksListData, setTasksListData] = useState([
    {
      taskId: 1,
      taskName: "Walk to the park.",
      taskDescription: "Time to get starbuck.",
      taskStatus: "C",
      taskDueDate: "7/12/2023 - 9:45AM",
    },
    {
      taskId: 2,
      taskName: "Walk to the park.",
      taskDescription: "Time to get starbuck.",
      taskStatus: "C",
      taskDueDate: "7/12/2023 - 9:45AM",
    },
    {
      taskId: 3,
      taskName: "Walk to the park.",
      taskDescription: "Time to get starbuck.",
      taskStatus: "C",
      taskDueDate: "7/12/2023 - 9:45AM",
    },
    {
      taskId: 4,
      taskName: "Walk to the park.",
      taskDescription: "Time to get starbuck.",
      taskStatus: "IC",
      taskDueDate: "7/12/2023 - 9:45AM",
    },
  ]);

  /* className for SimpleBar */
  const className = ` TasksList-container ${props.className}`;

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

export default TasksList;
