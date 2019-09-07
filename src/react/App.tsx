import React from 'react';
import { HashRouter } from "react-router-dom";
import '../scss/App.css';
import MainContentRouter from "./components/shell/mainContentRouter";
import { Sidebar } from "./components/shell/sidebar";

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
