import * as React from "react";
import "./SpeechBubble.css";

import { Button } from "semantic-ui-react";

export enum SpeechBubbleDirection {
  LEFT = 1,
  RIGHT
}

export interface SpeechBubbleProps {
  arrowDirection: SpeechBubbleDirection;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  arrowDirection
}) => {
  return (
    <div>
      <div
        className={`speech-bubble ${
          arrowDirection === SpeechBubbleDirection.LEFT ? "sb-left" : "sb-right"
        }`}
      >
        {children}
      </div>
      <div className="speech-bubble-container"></div>
    </div>
  );
};
