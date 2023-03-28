import React, { useEffect, useRef, useState } from "react";
import Canvas from "@/pages/components/canvas/Canvas";
import Snake from "@/pages/components/snake/Snake";

interface GameProps {}

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [direction, setDirection] = useState(Direction.Right);

  const x = [30, 20, 10, 0];
  const y = [0, 0, 0, 0];
  const [snakeBodyX, setSnakeBodyX] = useState<number[]>(x);
  const [snakeBodyY, setSnakeBodyY] = useState<number[]>(y);

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, 750, 500);
    Snake({ context, snakeBodyX, snakeBodyY });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection(Direction.Up);
          setSnakeBodyY((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] - 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyX((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          console.log(snakeBodyX + " " + snakeBodyY);
          break;

        case "ArrowDown":
          setDirection(Direction.Down);
          setSnakeBodyY((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] + 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyX((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          console.log(snakeBodyX + " " + snakeBodyY);
          break;

        case "ArrowLeft":
          setDirection(Direction.Left);
          setSnakeBodyX((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] - 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyY((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          console.log(snakeBodyX + " " + snakeBodyY);

          break;
        case "ArrowRight":
          setDirection(Direction.Right);
          setSnakeBodyX((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] + 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyY((prevArray) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );

          console.log(snakeBodyX + " " + snakeBodyY);

          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snakeBodyX, snakeBodyY]);

  useEffect(() => {
    draw;
  }, [direction, snakeBodyX, snakeBodyY]);

  return (
    <>
      <div className={" flex h-screen items-center justify-center"}>
        <Canvas ref={canvasRef} draw={draw} />
      </div>
    </>
  );
};

export default Game;
