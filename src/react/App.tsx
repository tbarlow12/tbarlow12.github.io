import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../scss/App.css';
import "../scss/App.scss";
import MainContentRouter from "./components/shell/mainContentRouter";
import { Sidebar } from "./components/shell/sidebar";
import { TerminalWithRouter } from './components/shell/terminal/terminal';
import { isMobile } from "react-device-detect"
import { Header } from './components/shell/header';

const App: React.FC = () => {
  
  const [terminalOpen, setTerminalOpen] = useState(!isMobile)
  const [darkTheme, setDarkTheme] = useState(true);

  return (
      <div className={`app`}>
        <Router>
            <Sidebar
              toggleTerminal={() => setTerminalOpen(!terminalOpen)}
              toggleTheme={() => setDarkTheme(!darkTheme)}
              darkTheme={darkTheme}
            />
            <div className="app-main">
              <Header/>
              <MainContentRouter/>
              <TerminalWithRouter 
                open={terminalOpen}
                closeTerminal={() => setTerminalOpen(false)}
              />
            </div>
        </Router>
      </div>
  );
}

export default App;
