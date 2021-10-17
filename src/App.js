import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import Contact from "./Contact"


function App() {
  return (
    <>

    <Router>

    <Switch>

    <Route path = "/education">
      <Education />
    </Route>

    <Route path ='/experience'>
      <Experience />
    </Route>

    <Route path ='/skill'>
      <Skill />
    </Route>

    <Route path ="/contact">
      <Contact />
    </Route>

    <Route Exact path ="/">
      <Home />
    </Route>

    

    

    </Switch>

    </Router>
    
    
    </>
  );
}

export default App;
