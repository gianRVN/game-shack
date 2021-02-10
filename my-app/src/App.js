import './App.css';
import React from 'react'
import Welcome from './views/Welcome'
import FavoritePage from './views/FavoritePage'
import HeroDetail from './views/HeroDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './views/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      <div>
         <Navbar/>
        <Switch>
          <Route exact path="/heroes/:heroId">
            <HeroDetail />
          </Route>
          <Route exact path="/favorites">
            <FavoritePage/>
          </Route>
          <Route exact path="/">
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
