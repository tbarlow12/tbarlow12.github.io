import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../../scss/icons";

export function Sidebar() {

  return (
    <ul className="app-sidebar">
      <li className="app-sidebar-item">
        <NavLink to="/">
          <i className={`app-sidebar-item-icon ${icons.home}`}></i>
        </NavLink>
      </li>
      <li className="app-sidebar-item">
        <NavLink to="/blog">
          <i className={`app-sidebar-item-icon ${icons.blog}`}></i>
        </NavLink>
      </li>
    </ul>
  )
}