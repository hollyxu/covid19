import * as React from "react";
import "./App.css";
import Nav from "./pages/Nav";

import { Header, Divider } from "semantic-ui-react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IntroPage } from "./pages/IntroPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { SampleApps } from "./pages/SampleApps";
import { ProjectedResultsPage } from "./pages/ProjectedResultsPage";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <Router>
          <div className="layout-header">
            <Header as="h1"> COVID-19 Routing API </Header>
            Load Balancing Across Stressed Facilities with a High-Availability,
            ML powered API
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
                <Route path="/sample-apps">
                  <SampleApps />
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
            <p>
              For media inquiries:{" "}
              <a href="mailto:media@covidalliance.com">
                media@covidalliance.com{" "}
              </a>{" "}
            </p>
            <p>
              For partnership inquiries:{" "}
              <a href="mailto:covidalliance@mit.edu"> covidalliance@mit.edu</a>{" "}
            </p>
            <p>
              A member of the Covid Alliance:{" "}
              <a href="https://www.covidalliance.com/">www.covidalliance.com</a>
            </p>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
