import React, { useEffect, useRef, useState } from "react";
import Canvas from "@/pages/components/canvas/Canvas";
import Snake from "@/pages/components/snake/Snake";
import { Direction } from "@/pages/types/type";
import { useSnakePositionX, useSnakePositionY } from "@/pages/hooks/useState";
interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [direction, setDirection] = useState(Direction.Right);

  const { snakeBodyX, setSnakeBodyX } = useSnakePositionX();
  const { snakeBodyY, setSnakeBodyY } = useSnakePositionY();

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, 750, 500);
    Snake({ context, snakeBodyX, snakeBodyY });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection(Direction.Up);
          setSnakeBodyY((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] - 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyX((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          break;

        case "ArrowDown":
          setDirection(Direction.Down);
          setSnakeBodyY((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] + 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyX((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          break;

        case "ArrowLeft":
          setDirection(Direction.Left);
          setSnakeBodyX((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] - 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyY((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
          break;
        case "ArrowRight":
          setDirection(Direction.Right);
          setSnakeBodyX((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] + 10 : prevArray[index - 1]
            )
          );
          setSnakeBodyY((prevArray: number[]) =>
            prevArray.map((value, index) =>
              index === 0 ? prevArray[0] : prevArray[index - 1]
            )
          );
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
