import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../../scss/icons";
import { appManifest } from "../../createManifest";


export interface SidebarProps {
  toggleTerminal: () => void;
  toggleTheme: () => void;
  darkTheme: boolean;
}

export interface SidebarItem {
  title: string;
  icon: string;
}

export interface SidebarNavLink extends SidebarItem {
  path: string;
}

export interface SidebarExternalLink extends SidebarItem {
  link: string;
}

export interface SidebarTool extends SidebarItem {
  action: () => void;
}


export function Sidebar(props: SidebarProps) {

  const navLinks: SidebarNavLink[] = [
    appManifest.getOptions(),
    ...appManifest.getChildren().map((child) => child.getOptions())
  ]

  const externalLinks: SidebarExternalLink[] = [
    {
      title: "GitHub",
      link: "https://github.com/tbarlow12",
      icon: icons.github
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/tannerbarlow/",
      icon: icons.linkedin
    },
  ]

  const tools: SidebarTool[] = [
    {
      title: "Terminal",
      icon: icons.terminal,
      action: props.toggleTerminal
    }
  ]

  // if (props.darkTheme) {
  //   tools.push({
  //     name: "Light Theme",
  //     icon: icons.sun,
  //     action: props.toggleTheme
  //   })
  // } else {
  //   tools.push({
  //     name: "Dark Theme",
  //     icon: icons.moon,
  //     action: props.toggleTheme
  //   })
  // }

  return (
    <ul className="app-sidebar">
      <div className="app-sidebar-links">
        {navLinks.map((item) =>
          <li className="app-sidebar-item">
            <NavLink to={item.path}>
              <i className={`app-sidebar-item-icon ${item.icon}`}></i>
            </NavLink>
          </li>)
        }
        {externalLinks.map((item) =>
          <li className="app-sidebar-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={`app-sidebar-item-icon ${item.icon}`}></i>
            </a>
          </li>)
        }
      </div>
      <div className="app-sidebar-tools">
        {tools.map((item) =>
          <li className="app-sidebar-item" onClick={() => item.action()}>
            <i className={`app-sidebar-item-icon ${item.icon}`}></i>
          </li>)
        }
      </div>      
    </ul>
  )
}