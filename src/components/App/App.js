import React from "react";
import './App.css'

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Footer from "../Footer/Footer";
import TaskList from "../TaskList/TaskList"

const App =() => { 
  const todoData = [
    {label: 'driink coffee', important : false,id : 1 },
    {label: 'create app', important : true, id : 2},
    {label: 'havea lunch', important: false, id : 3}
  ];

return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todoData}/>
        <Footer />
      </section>
    </section>
  );
}
export default App ; 