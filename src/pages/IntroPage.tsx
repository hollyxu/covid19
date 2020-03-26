import * as React from "react";

import Map from "../assets/map.png";
import "./IntroPage.css";

import { Header, Input } from "semantic-ui-react";
import {
  SpeechBubble,
  SpeechBubbleDirection
} from "../components/SpeechBubble";

export function IntroPage() {
  return (
    <div className="page-intro">
      <Header as="h2">Motivation</Header>
      <p>
        Balancing patient load across testing sites can cut waiting times by 90%
      </p>
      <Header as="h2">API Demonstration</Header>
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
          <Input value="02139" />
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          According to our model, we think you should go to
          <b> Spaulding Hospital for Continuing Medical Care Cambridge</b>{" "}
          02138-4308
        </SpeechBubble>
        <SpeechBubble arrowDirection={SpeechBubbleDirection.RIGHT}>
          <img src={Map} />
          (fake map. we'd need Google API access tokens to display this)
        </SpeechBubble>
      </div>
    </div>
  );
}
