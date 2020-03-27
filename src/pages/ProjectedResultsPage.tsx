import * as React from "react";

import { Header, Image, Grid } from "semantic-ui-react";

import Before from "../assets/before.png";
import After from "../assets/after.png";

export function ProjectedResultsPage() {
  return (
    <div>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as="h4">Default Scenario</Header>
          <Image src={Before} />
        </Grid.Column>
        <Grid.Column>
          <Header as="h4">Load Balanced Scenario</Header>
          <Image src={After} />
        </Grid.Column>
      </Grid>
      <br />
      <p>Radius shows patients per bed for each hospital.</p>
    </div>
  );
}
