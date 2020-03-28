import * as React from "react";

import {
  Container,
  Icon,
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Input,
  Message,
  Checkbox
} from "semantic-ui-react";

interface ApiDataProps {
  facility_zipcode: string;
  name: string;
}

export function GetStartedPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasTroubleBreathing, setHasTroubleBreathing] = React.useState(false);
  const [hasChestPain, setHasChestPain] = React.useState(false);
  const [hasConfusion, setHasConfusion] = React.useState(false);
  const [hasBluishFace, setHasBluishFace] = React.useState(false);
  const [zipcode, setZipcode] = React.useState("");
  const [apiData, setApiData] = React.useState<ApiDataProps | undefined>(
    undefined
  );
  const [errorData, setErrorData] = React.useState(undefined);

  const onZipcodeChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZipcode(e.currentTarget.value);
  };

  // const handleReset = (e: React.FormEvent) => {
  //   setIsLoading(false);
  //   setErrorData(undefined);
  //   setApiData(undefined);
  //   setHasConfusion(false);
  //   setHasBluishFace(false);
  //   setHasChestPain(false);
  //   setHasTroubleBreathing(false);
  //   setZipcode("");
  // };

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    setErrorData(undefined);
    setApiData(undefined);
    e.preventDefault();

    fetch(
      `https://ct7x7cvhak.execute-api.us-east-1.amazonaws.com/default/facility?zipcode=${zipcode}&trouble_breathing=${hasTroubleBreathing}&chest_pain=${hasChestPain}&confusion=${hasConfusion}&bluish_face=${hasBluishFace}`
    )
      .then(res => res.json())
      .then(data => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch(data => {
        setIsLoading(false);
        setErrorData(data);
      });
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
                <Form
                  onSubmit={handleSubmit}
                  loading={isLoading}
                  // onReset={handleReset}
                >
                  <Form.Field>
                    <label>
                      ZIP Code *required - (currently Massachusetts-only)
                    </label>
                    <Input
                      placeholder="02139"
                      fluid={false}
                      type="text"
                      pattern="[0-9]*"
                      name="zipcode"
                      onChange={onZipcodeChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      label="Trouble Breathing"
                      name="trouble_breathing"
                      onChange={() =>
                        setHasTroubleBreathing(!hasTroubleBreathing)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      label="Chest Pain"
                      name="chest_pain"
                      onChange={() => setHasChestPain(!hasChestPain)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      label="Confusion"
                      name="confusion"
                      onChange={() => setHasConfusion(!hasConfusion)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      label="Bluish Face"
                      name="bluish_face"
                      onChange={() => setHasBluishFace(!hasBluishFace)}
                    />
                  </Form.Field>
                  <Button type="submit" color="blue">
                    Find Best Facility
                  </Button>
                  {/* <Button type="reset">Reset</Button> */}
                </Form>
              </Grid.Column>
              <Grid.Column width={8}>
                {!apiData && !errorData && (
                  <Message>
                    <p>Please fill in the form.</p>
                  </Message>
                )}
                {errorData && (
                  <Message negative>
                    <Message.Header>An Error Has Occured</Message.Header>
                    <p>
                      Be sure to enter a Massachusetts ZIP-Code, like 02139.
                    </p>
                  </Message>
                )}
                {!errorData && apiData && (
                  <Message positive>
                    <Message.Header>Our Recommendation</Message.Header>
                    <p>
                      <b>{apiData.name}</b>
                    </p>
                    <p>{apiData.facility_zipcode}</p>
                  </Message>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment vertical style={{ paddingTop: "2em", marginTop: "2em" }}>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  More Details
                </Header>
                <p>
                  View the{" "}
                  <a href="https://app.swaggerhub.com/apis-docs/covidalliance/COVID-19_routing/1.0.0#/">
                    Swagger docs
                  </a>
                  .
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    </Container>
  );
}
