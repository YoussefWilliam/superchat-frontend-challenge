import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "../components/HomePage/Landingpage";
import RepoDetailsPage from "../components/RepoPage/RepoDetailsPage";

import "./App.css";

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/repos/:username/:reponame/:color/:image" component={RepoDetailsPage} />
        </Switch>
   
    </Router>
  );
}

export default App;
