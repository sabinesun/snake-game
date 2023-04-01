import React from "react";

interface Food {
  context: CanvasRenderingContext2D;
  foodX: number;
  foodY: number;
}

const Food = ({ context, foodX, foodY }: Food) => {
  context.beginPath();
  context.arc(foodX + 5, foodY + 5, 5, 0, 2 * Math.PI, false);
  context.fillStyle = "red";
  context.fill();
  context.stroke();
  return { foodX, foodY };
};

export default Food;
