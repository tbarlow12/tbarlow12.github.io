import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../../scss/icons";

export interface SidebarItem {
  name: string;
  path: string;
  icon: string;
}

export function Sidebar() {

  const sidebarItems: SidebarItem[] = [
    {
      name: "Home",
      path: "/",
      icon: icons.home
    },
    {
      name: "Home",
      path: "/blog",
      icon: icons.blog
    },
    {
      name: "Resume",
      path: "/",
      icon: icons.resume,
    },
    {
      name: "GitHub",
      path: "/github",
      icon: icons.github
    },
    {
      name: "LinkedIn",
      path: "/linkedin",
      icon: icons.linkedin
    },
    {
      name: "Interests",
      path: "/interests",
      icon: icons.basketball,
    },
    {
      name: "Terminal",
      path: "/",
      icon: icons.terminal,
    }
  ]



  return (
    <ul className="app-sidebar">
      {sidebarItems.map((item) =>
        <li className="app-sidebar-item">
        <NavLink to={item.path}>
          <i className={`app-sidebar-item-icon ${item.icon}`}></i>
        </NavLink>
      </li>)}
    </ul>
  )
}