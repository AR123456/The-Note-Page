import React from "react";
import { StyledStartButton } from "./styles/StylesdStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game </StyledStartButton>
);
export default StartButton;
