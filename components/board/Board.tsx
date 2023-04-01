import React from "react";

interface Board {
  context: CanvasRenderingContext2D;
  point: number;
}

const Board = ({ context, point }: Board) => {
  context.font = "20px Comic Sans MS";
  context.fillStyle = "White";
  context.fillText("Score : " + point.toString(), 15, 30);
};

export default Board;
