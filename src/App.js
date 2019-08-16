import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import  { LineChart } from "./lineChart.js";
import  { InputData } from "./inputData.js";
import  UserInput from "./userInput.js";

function App() {

  return (
    <Router>
      <div>
        <h1 className="Header">Simple Dynamic Chart</h1>
        <nav>
          <Link to="/">Dynamic Chart</Link>
          <Link to="/submit-data/">Submit Data</Link>
          <Link to="/data/">Data</Link>
        </nav>
        <Route path="/" exact component={LineChart} />
        <Route path="/submit-data/" component={UserInput} />
        <Route path="/data/" component={InputData} />
        {/* <div className="App">
          <UserInput />
          <LineChart />
          <InputData />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
