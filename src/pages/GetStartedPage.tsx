import * as React from "react";

import {
  Container,
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Input,
  Checkbox
} from "semantic-ui-react";

export function GetStartedPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
    debugger;
    setIsLoading(true);

    fetch(
      "https://ct7x7cvhak.execute-api.us-east-1.amazonaws.com/default/facility?zipcode=02139"
    )
      .then(res => res.json())
      .then(data => {
        debugger;
        console.log(data);
        setApiData(data);
        setIsLoading(false);
      })
      .catch(console.log);
  };

  return (
    <Container>
      <div className="page-start">
        <Segment vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Try the API
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Form onSubmit={handleSubmit} loading={isLoading}>
                  <Form.Field>
                    <label>ZIP Code (required)</label>
                    <Input
                      placeholder="02139"
                      fluid={false}
                      type="text"
                      pattern="[0-9]*"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="Trouble Breathing" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="Chest Pain" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="Confusion " />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="Bluish Face" />
                  </Form.Field>
                  <Button type="submit">Find Best Facility</Button>
                </Form>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <p>
                  View the{" "}
                  <a href="https://app.swaggerhub.com/apis-docs/covidalliance/COVID-19_routing/1.0.0#/">
                    Swagger docs
                  </a>
                  .
                </p>
              </Grid.Column>
              <Grid.Column>Hello</Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    </Container>
  );
}
