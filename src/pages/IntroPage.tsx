import * as React from "react";

import "./IntroPage.css";

import { Header } from "semantic-ui-react";

export function IntroPage() {
  return (
    <div className="page-intro">
      <Header as="h2">
        {" "}
        Balancing patient load across testing sites can cut waiting times by 90%{" "}
      </Header>
      <p>
        Forecast peak hospitalization rates at zip-code level: based on
        demographics, contagion rate, length of stay. Optimally assign patients
        to hospitals: prioritize balanced load across hospitals and ensure
        driving times below one hour. Load Score = Incoming patients per
        available bed Compare to default scenario: in the absence of routing
        app, patients choose large hospitals within 30 minutes driving distance.
      </p>
    </div>
  );
}
