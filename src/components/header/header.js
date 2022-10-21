import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div className="buttons">
        <i className="fa fa-arrow-left"></i>
        <i className="fa fa-arrow-right"></i>
        <i className="fa fa-close"></i>
        <i className="fa fa-home"></i>
        <input className="input" type="url" />
      </div>
    </div>
  );
}

export default Header;
