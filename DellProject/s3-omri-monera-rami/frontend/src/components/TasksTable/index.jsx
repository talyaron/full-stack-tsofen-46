import React, { Fragment } from "react";
import Select from "../Select";
import "./style.css";

const selectDoneOptions = [
  { id: 1, label: "Yes", value: "yes" },
  { id: 2, label: "No", value: "no" },
];
export default function TasksTable({ openTasks }) {
  return (
    <Fragment>
      <div className="open-tasks">
        <div className="open-tasks-title">
          <h3>Open Tasks</h3>
        </div>
        <div className="open-tasks-table">
          <table className="table x">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Jira Name</th>
                <th scope="col">Field Name</th>
                <th scope="col">Old Val</th>
                <th scope="col">New Val</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>
              {openTasks.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{++index}</th>
                  <td>{task.jiraItem.jiraId}</td>
                  <td className="jiraname-column">{task.jiraItem.jiraName}</td>
                  <td>{task.diffItem.updatedFields[0].fieldName}</td>
                  <td>{task.diffItem.updatedFields[0].oldValue}</td>
                  <td>{task.diffItem.updatedFields[0].newValue}</td>
                  <td>
                    <Select options={selectDoneOptions} onSelect="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
