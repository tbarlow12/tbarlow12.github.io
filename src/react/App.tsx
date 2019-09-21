import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import '../scss/App.css';
import "../scss/App.scss";
import MainContentRouter from "./components/shell/mainContentRouter";
import { Sidebar } from "./components/shell/sidebar";
import { TerminalWithRouter } from './components/shell/terminal/terminal';

const App: React.FC = () => {
  
  const [terminalOpen, setTerminalOpen] = useState(true)

  return (
      <div className="app">
        <HashRouter>
            <Sidebar
              toggleTerminal={() => setTerminalOpen(!terminalOpen)}
            />
            <div className="app-main">
              <div className="app-header">
                <h1>Tanner Barlow</h1>
              </div>
              <MainContentRouter/>
              <TerminalWithRouter 
                open={terminalOpen}
              />
            </div>
        </HashRouter>
      </div>
  );
}

export default App;
