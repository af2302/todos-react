import React from "react";
import './Footer.css'

const Footer = () => (
    <footer className="footer">
      <span className="todo-count"> 1 items left</span>
      <button className="clear-completed" type="button" >
        Clear completed
      </button>
    </footer>
  );

export default Footer;  