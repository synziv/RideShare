import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
              <div className="container">
                <Switch>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
