import React from "react";
import "./sidebarButton.css";
import { Link } from "react-router-dom";

function SidebarButton(props) {
  return (
    <Link to={props.to}>
      <div>S</div>
    </Link>
  );
}

export default SidebarButton;
