import * as React from "react";

import "./IntroPage.css";
import MasDist from "../assets/mas_dist.png";

import {
  Container,
  Button,
  Header,
  Grid,
  Segment,
  Image
} from "semantic-ui-react";

export function IntroPage() {
  return (
    <div>
      <Container>
        <Segment vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Demand for services such as testing or hospitalization is
                  highly heterogeneous
                </Header>
                <p>
                  For example, zip-codes with a preponderance of a high risk
                  population
                </p>
                <p>
                  Our goal is to programatically route this demand to the
                  appropriate testing facilities so that{" "}
                  <b>load across facilities is balanced</b> and{" "}
                  <b>travel to these facilities is not onerous</b>
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image src={MasDist} size="large" />
                <small>
                  Relative country risk in Massachusetts based on % 65+,
                  incidence of diabetes, hypertension, and obesity
                </small>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: "2em 0", background: "#faff7c" }}>
              <Grid.Column textAlign="center">
                <Header as="h2">
                  Solution: A highly-available, easy to integrate API powered by
                  a Machine Learning-driven router.
                </Header>
                <Button size="large" color="blue">
                  Try the API
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Testing Centers
                </Header>
                <p>
                  Optimal utilization of limited resources. Lower average
                  delays.
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Hospitals
                </Header>
                <p>
                  Systematic distribution and assignment of high risk load in
                  need of ICUs.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
