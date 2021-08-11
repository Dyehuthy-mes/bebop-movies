import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/inicio">
          <Home/>
        </Route>
        <Route path="/destacadas">
          <h1>Destacadas</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
