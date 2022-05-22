import React from "react";
import Task from "../Task/Task";
import './TaskList.css'

const TaskList = ({ todos }) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <Task {...itemProps} />
            </li>
        );
    })
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TaskList;