import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Destacadas from "./Pages/Destacadas/Destacadas";
import Generos from "./Pages/Generos/Generos";
import Peliculas from "./Pages/Peliculas/Peliculas";
import Detalles from "./Pages/Detalles/Detalles";

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
          <Destacadas/>
        </Route>
        <Route path="/generos">
          <Generos/>
        </Route>
        <Route path="/peliculas">
          <Peliculas/>
        </Route>
        <Route path="/:id">
          <Detalles />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
