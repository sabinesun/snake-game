import React, { forwardRef, useEffect } from "react";

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  drawBoard: (context: CanvasRenderingContext2D) => void;
};

const BoardCanvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ drawBoard, ...props }, canvasRef) => {
    useEffect(() => {
      console.log("test");
      if (!canvasRef) {
        return;
      }
      const canvas = (canvasRef as React.RefObject<HTMLCanvasElement>).current;
      if (!canvas) {
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      drawBoard(context);
    }, [drawBoard, canvasRef]);

    return (
      <canvas
        width={700}
        height={100}
        ref={canvasRef}
        className={" border border-white"}
        {...props}
      />
    );
  }
);

BoardCanvas.displayName = "Canvas";
export default BoardCanvas;
