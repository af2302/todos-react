import React from "react";

const Task = () => {
    return (
        <li>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>
            <span className="title">title</span>
            <span className="created">created 1s ago</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Icon input edit"/>
          <button className="icon icon-destroy" type="button" aria-label="Icon input deleted"/>
        </div>
        <input
          type="text"
          className="edit"
        />
      </li>
    );
}

export default Task