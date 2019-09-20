import React from 'react';
import { HashRouter } from "react-router-dom";
import '../scss/App.css';
import "../scss/App.scss";
import MainContentRouter from "./components/shell/mainContentRouter";
import { Sidebar } from "./components/shell/sidebar";
import { TerminalWithRouter } from './components/shell/terminal/terminal';
import { Header } from './components/header/header';

const App: React.FC = () => {
  return (
      <div className="app-main">
        <Header/>
        <HashRouter>
          <div className="app-shell">
            <Sidebar/>
            <div className="app-shell-page">
              <MainContentRouter/>
              <TerminalWithRouter />
            </div>
          </div>
        </HashRouter>
      </div>
  );
}

export default App;
