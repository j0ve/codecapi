import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import SearchGit from "./containers/SearchGit";
import UserDetails from "./containers/UserDetails";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={SearchGit} />
            <Route exact path="/userdetails/:id" component={UserDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
