import React from "react";
import './Task.css'

const Task = ({label, important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };
    return (
        <li>
        <div className="view">
          <label>
            <span className="title" style={style}>{label}</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Icon input edit"/>
          <button className="icon icon-destroy" type="button" aria-label="Icon input deleted"/>
        </div>

      </li>
    );
}

export default Task