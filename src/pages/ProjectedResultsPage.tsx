import * as React from "react";

import { Header, Image, Grid, Container } from "semantic-ui-react";

import Before from "../assets/before.png";
import After from "../assets/after.png";

export function ProjectedResultsPage() {
  return (
    <div>
      <Container>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Projected Results
        </Header>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h4">Default Scenario</Header>
              <Image src={Before} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Load Balanced Scenario</Header>
              <Image src={After} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <p>Radius shows patients per bed for each hospital.</p>
      </Container>
    </div>
  );
}
