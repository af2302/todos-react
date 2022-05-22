import React from "react";
import './NewTaskForm.css'

const NewTaskForm = () =>{

    return (
      <form className="new-todo-form">
        <input className="new-todo" placeholder="What needs to be done?"/>
      </form>
    );
}

export default NewTaskForm