import React from 'react';
import '../scss/App.css';
import MainContentRouter from "./components/shell/mainContentRouter"
import { Route, NavLink, HashRouter } from "react-router-dom"
import { HomePage } from './pages/homePage';
import { BlogPage } from './pages/blogPage';
import { Sidebar } from "./components/shell/sidebar"

const App: React.FC = () => {
  return (
      <div className="app-main">
        <h1>Application</h1>
        <HashRouter>
          <Sidebar/>
          <MainContentRouter/>
        </HashRouter>
      </div>
  );
}

export default App;
