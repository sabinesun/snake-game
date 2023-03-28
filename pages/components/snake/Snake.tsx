import React from "react";

interface Snake {
  context: CanvasRenderingContext2D;
  snakeBodyX: number[];
  snakeBodyY: number[];
}

const pixel = 10;
const Snake = ({ context, snakeBodyX, snakeBodyY }: Snake) => {
  context.fillStyle = "#ffffff"; // Set fill color to red
  context.strokeStyle = "#010101";

  for (let i = 0; i < snakeBodyX.length; i++) {
    context.fillRect(snakeBodyX[i], snakeBodyY[i], pixel, pixel);
    context.strokeRect(snakeBodyX[i], snakeBodyY[i], pixel, pixel);
  }
};

export default Snake;
