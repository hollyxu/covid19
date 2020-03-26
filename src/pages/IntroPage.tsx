import * as React from "react";

import "./IntroPage.css";

import { Header } from "semantic-ui-react";
import {
  SpeechBubble,
  SpeechBubbleDirection
} from "../components/SpeechBubble";

export function IntroPage() {
  return (
    <div className="page-intro">
      <Header as="h2">Demonstration</Header>
      <div className="content-bubbles">
        <SpeechBubble arrowDirection={SpeechBubbleDirection.LEFT}>
          Where is the nearest hospital?
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          Queen Mary Hospital.
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          But they may be at full capacity.
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.LEFT}>
          Where is the nearest and <i>least crowded</i> hospital?
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
    </div>
  );
}
