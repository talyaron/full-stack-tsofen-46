import React, { useState, useEffect } from "react";
import Select from "../Select";
import _ from "lodash";
import "./style.css";

const newOldSelectOptions = [
  { id: 1, label: "New", value: "newValue" },
  { id: 2, label: "Old", value: "oldValue" },
];
export default function Chart(params) {
  const [statuses, setStatuses] = useState([]);
  const [status, setStatus] = useState("");
  const [newOrOld, setNewOrOld] = useState(""); // we should find another name for this state
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/status")
      .then((data) => data.json())
      .then((statuses) => setStatuses(statuses))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (status && newOrOld) {
      fetch(`/api/getChangeTicketStatus/?status=${status}&oldOrNew=${newOrOld}`)
        .then((data) => data.json())
        .then((data) => setData(data));
    }
  }, [newOrOld, status]);

  const handleSelect = (e) => {
    const select = e.currentTarget;

    if (select.name === "status") setStatus(select.value);
    else if (select.name === "newOld") setNewOrOld(select.value);
  };

  return (
    <main className="chart">
      <div className="chart-inputs">
        <div className="selectInput">
          <Select
            options={newOldSelectOptions}
            onSelect={handleSelect}
            name="newOld"
            value={newOrOld}
          ></Select>
        </div>
        <div className="selectInput">
          <select name="status" id="status" onChange={handleSelect}>
            <option value=""></option>
            {statuses.map((s) => (
              <option value={_.startCase(s.name)} key={s._id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="chart-content">
        <ul>
          {data.map((data) => (
            <li key={data._id}>
              <span>{data._id}</span>
              <ul>
                {data.tasks.map((task, index) => (
                  <li key={index} className="jira-item">
                    {task.jiraItem.jiraId}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

{
  /* <ol>
{data.map((data) => (
  <li key={data._id}>
    {data._id}
    <ol>
      {data.tasks.map((task) => (
        <li>{task.jiraItem.jiraId}</li>
      ))}
    </ol>
  </li>
))}
</ol> */
}
