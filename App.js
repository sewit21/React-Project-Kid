import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Activity" exact component={Activity} />
        <Route path="/Recipes" exact component={Recipes} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
