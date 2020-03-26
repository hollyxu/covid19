import * as React from "react";
import "./App.css";
import Nav from "./pages/Nav";

import { Header, Divider } from "semantic-ui-react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IntroPage } from "./pages/IntroPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { ProjectedResultsPage } from "./pages/ProjectedResultsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="layout-header">
          <Header as="h1"> COVID-19 Policy Alliance Routing API </Header>
          Load Balancing Across Stressed Facilities with a High-Availability, ML
          powered API
          <div className="layout-nav">
            <Nav />
          </div>
        </div>
        <div className="layout-contents">
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/start">
                <GetStartedPage />
              </Route>
              <Route path="/projected">
                <ProjectedResultsPage />
              </Route>
              <Route path="/">
                <IntroPage />
              </Route>
            </Switch>
          </div>
        </div>
        <div className="layout-footer">
          <Divider />
          <p>For media inquiries: media@covidalliance.com</p>
          <p>For partnership inquiries: covidalliance@mit.edu</p>
          <p>
            <a href="https://www.covidalliance.com/">
              Part of the Covid Alliance: www.covidalliance.com
            </a>
          </p>
        </div>
      </Router>
    </div>
  );
}

export default App;
