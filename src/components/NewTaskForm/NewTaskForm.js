import React from "react";

const NewTaskForm = () =>{

    return (
      <form className="new-todo-form">
        <input className="new-todo" placeholder="What needs to be done?"/>
        {/* <input className="new-todo-form__timer" placeholder="Min"/>
        <input className="new-todo-form__timer" placeholder="Sec"/> */}
      </form>
    );
}

export default NewTaskForm