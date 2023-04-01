import React, { forwardRef, useEffect } from "react";

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (context: CanvasRenderingContext2D) => void;
};

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ draw, ...props }, canvasRef) => {
    useEffect(() => {
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

      draw(context);
    }, [draw, canvasRef]);

    return (
      <canvas
        width={400}
        height={300}
        ref={canvasRef}
        className={" border border-white"}
        {...props}
      />
    );
  }
);

Canvas.displayName = "Canvas";
export default Canvas;
