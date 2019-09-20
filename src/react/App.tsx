import React from 'react';
import { HashRouter } from "react-router-dom";
import '../scss/App.css';
import "../scss/App.scss";
import MainContentRouter from "./components/shell/mainContentRouter";
import { Sidebar } from "./components/shell/sidebar";
import { TerminalWithRouter } from './components/shell/terminal/terminal';

const App: React.FC = () => {
  return (
      <div className="app">
        <HashRouter>
            <Sidebar/>
            <div className="app-main">
              <div className="app-header">
                <h1>Tanner Barlow</h1>
              </div>
              <MainContentRouter/>
              <TerminalWithRouter />
            </div>
        </HashRouter>
      </div>
  );
}

export default App;
