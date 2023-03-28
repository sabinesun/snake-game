import React from "react";

const gameOver = (
  snakeBodyX: number[],
  snakeBodyY: number[],
  context: CanvasRenderingContext2D
) => {
  for (let i = 0; i < snakeBodyX.length; i++) {
    for (let j = i + 1; j < snakeBodyX.length; j++) {
      if (
        snakeBodyX[i] === snakeBodyX[j] &&
        snakeBodyY[i] === snakeBodyY[j] &&
        i !== j
      ) {
        context.clearRect(0, 0, 750, 500);
        return true;
      }
    }
  }
  return false;
};

export default gameOver;
