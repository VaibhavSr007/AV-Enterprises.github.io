import React from "react";
import "./topbar.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Login } from "../../pages/login/Login";

export default function Topbar() {

  const handleClick = () =>{
    localStorage.removeItem("persist:root");
    window.location.replace('http://localhost:3000/login');
}

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AV admin</span>
        </div>
        <div className="topRight">
        <span style={{cursor: 'pointer', marginRight: '12px'}} onClick={handleClick}> LOG OUT </span>
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
