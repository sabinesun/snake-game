import React, { useEffect, useRef, useState } from "react";
import Canvas from "@/pages/components/canvas/Canvas";
import Snake from "@/pages/components/snake/Snake";
import { Direction } from "@/pages/types/type";
import { useSnakeLogic } from "@/pages/components/snake/SnakeMovement";
import gameOver from "@/pages/components/game/GameOver";
import Over from "@/pages/components/game/GameOverPage";
import { useFoodPosition } from "@/pages/components/food/FoodPosition";
import Food from "@/pages/components/food/Food";
interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [direction, setDirection] = useState<Direction | null>(null);
  const { snakeBodyX, snakeBodyY, moveSnake } = useSnakeLogic();
  const { foodX, foodY, moveFood } = useFoodPosition();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          if (direction !== Direction.Down) {
            setDirection(Direction.Up);
          }
          break;
        case "ArrowDown":
          if (direction !== Direction.Up) {
            setDirection(Direction.Down);
          }
          break;
        case "ArrowLeft":
          if (direction !== Direction.Right) {
            setDirection(Direction.Left);
          }
          break;
        case "ArrowRight":
          if (direction !== Direction.Left) {
            setDirection(Direction.Right);
          }
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction]);

  const draw = (context: CanvasRenderingContext2D) => {
    if (!gameOver(snakeBodyX, snakeBodyY, context)) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      Snake({ context, snakeBodyX, snakeBodyY });
      Food({ context, foodX, foodY });
    } else {
      setDirection(null);
      Over(context);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveFood(snakeBodyX, snakeBodyY, direction);
      moveSnake(direction);
    }, 100);
    return () => clearInterval(intervalId);
  }, [direction, moveSnake, moveFood, snakeBodyY, snakeBodyX]);

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
