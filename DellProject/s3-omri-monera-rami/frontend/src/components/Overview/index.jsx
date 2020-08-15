import React, { useState, useEffect } from "react";
import DailyAlerts from "../DailyAlerts";
import TasksTable from "../TasksTable";
import "./style.css";

export default function Overview(props) {
  const [openTasks, setOpenTasks] = useState([]);

  useEffect(() => {
    fetch("/api/opentasks")
      .then((data) => data.json())
      .then((tasks) => setOpenTasks(tasks));
  }, []);

  return (
    <div className="overview">
      <DailyAlerts />
      <TasksTable openTasks={openTasks} />
    </div>
  );
}
