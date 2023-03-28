import React from "react";

const Over = (context: CanvasRenderingContext2D) => {
  context.font = "30px Comic Sans MS";
  context.fillStyle = "White";
  const text = "Game Over";
  const textWidth = context.measureText(text).width;
  const canvasCenterX = context.canvas.width / 2;
  const textStartX = canvasCenterX - textWidth / 2;
  context.fillText(text, textStartX, context.canvas.height / 2);
};

export default Over;
