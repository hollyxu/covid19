import * as React from "react";

import { Button, Header } from "semantic-ui-react";
import {
  SpeechBubble,
  SpeechBubbleDirection
} from "../components/SpeechBubble";
import Nav from "./Nav";

export function IntroPage() {
  return (
    <div>
      <Header as="h1">US Hospital Load Balance API</Header>
      <Nav />
      <Header as="h2">What's this?</Header>
      <div>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.LEFT}>
          Where is the nearest hospital?
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          Do they have the capacity to take you?
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.LEFT}>
          Ok. Where is the nearest and least crowded hospital?
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          What is your ZIP Code?
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.LEFT}>
          02491
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          Using our model, we think you should go to...
        </SpeechBubble>
      </div>
      <Button>hi</Button>;
    </div>
  );
}
