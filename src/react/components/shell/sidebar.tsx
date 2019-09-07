import React from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {

  return (
    <ul className="app-sidebar">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
    </ul>
  )
}