import React, { useState } from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-rendered");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}></Stage>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"></Display>
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton></StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
