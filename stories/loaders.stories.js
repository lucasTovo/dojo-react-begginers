import React from "react";
import { storiesOf } from "@storybook/react";
import SentFeedback from "../src/SentFeedback";

storiesOf("Animações de Feedback")
  .add("Loader", () => <SentFeedback />)
  .add("Success", () => <SentFeedback success />)
  .add("Error", () => <SentFeedback error />);