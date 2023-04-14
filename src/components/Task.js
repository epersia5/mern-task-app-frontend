import React from "react";
import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Task = ({
  task,
  index,
  deleteTask,
  getSingleTask,
  setToComplete,
  setToUncomplete,
}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div class="task-icons">
        <FaCheckDouble
          color="green"
          onClick={() => {
            if (!task.completed) {
              setToComplete(task);
            } else {
              setToUncomplete(task);
            }
          }}
        />
        <FaEdit color="purple" onClick={() => getSingleTask(task)} />
        <FaRegTrashAlt
          color="red"
          onClick={() => {
            deleteTask(task._id);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
