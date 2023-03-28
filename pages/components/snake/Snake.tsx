import React from "react";

interface Snake {
  context: CanvasRenderingContext2D;
  /* XHead: number;
  YHead: number;
  XBody: number;
  YBody: number;*/
  snakeBodyX: number[];
  snakeBodyY: number[];
}

const pixel = 10;
/*
const Snake = ({ context, XHead, YHead, XBody, YBody }: Snake) => {
  context.fillStyle = "#ffffff"; // Set fill color to red
  context.strokeStyle = "#010101";

  context.fillRect(XHead, YHead, pixel, pixel);
  context.strokeRect(XHead, YHead, pixel, pixel);
  context.fillRect(XBody, YBody, pixel, pixel);
  context.strokeRect(XBody, YBody, pixel, pixel);
};*/

const Snake = ({ context, snakeBodyX, snakeBodyY }: Snake) => {
  context.fillStyle = "#ffffff"; // Set fill color to red
  context.strokeStyle = "#010101";

  for (let i = 0; i < snakeBodyX.length; i++) {
    context.fillRect(snakeBodyX[i], snakeBodyY[i], pixel, pixel);
    context.strokeRect(snakeBodyX[i], snakeBodyY[i], pixel, pixel);
  }
};

export default Snake;
