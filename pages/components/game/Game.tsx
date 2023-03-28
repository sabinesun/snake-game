import React, { useEffect, useRef, useState } from "react";
import Canvas from "@/pages/components/canvas/Canvas";
import Snake from "@/pages/components/snake/Snake";
import { Direction } from "@/pages/types/type";
import { useSnakeLogic } from "@/pages/components/snake/SnakeMovement";
interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [direction, setDirection] = useState<Direction | null>(null);
  const { snakeBodyX, snakeBodyY, moveSnake } = useSnakeLogic();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection(Direction.Up);
          break;

        case "ArrowDown":
          setDirection(Direction.Down);
          break;

        case "ArrowLeft":
          setDirection(Direction.Left);
          break;

        case "ArrowRight":
          setDirection(Direction.Right);
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, 750, 500);
    Snake({ context, snakeBodyX, snakeBodyY });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake(direction);
    }, 100);
    // update snake position every 1 second
    return () => clearInterval(intervalId);
  }, [direction, moveSnake]);

  useEffect(() => {
    draw;
  }, [direction, snakeBodyX, snakeBodyY, draw]);

  return (
    <>
      <div className={" flex h-screen items-center justify-center"}>
        <Canvas ref={canvasRef} draw={draw} />
      </div>
    </>
  );
};

export default Game;
