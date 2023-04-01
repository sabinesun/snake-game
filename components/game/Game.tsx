import React, { useEffect, useRef, useState } from "react";
import Canvas from "@/components/canvas/Canvas";
import Snake from "@/components/snake/Snake";
import { Direction } from "@/types/type";
import { useSnakeLogic } from "@/components/snake/SnakeMovement";
import gameOver from "@/components/game/GameOver";
import Over from "@/components/game/GameOverPage";
import { useFoodPosition } from "@/components/food/FoodPosition";
import Food from "@/components/food/Food";
import Board from "@/components/board/Board";
import BoardCanvas from "@/components/canvas/BoardCanvas";
interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef1 = useRef<HTMLCanvasElement | null>(null);
  const canvasRef2 = useRef<HTMLCanvasElement | null>(null);

  const [direction, setDirection] = useState<Direction | null>(null);
  const { snakeBodyX, snakeBodyY, moveSnake } = useSnakeLogic();
  const { foodX, foodY, moveFood, point } = useFoodPosition();

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
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      Over(context);
    }
  };

  const drawBoard = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    Board({ context, point });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveFood(snakeBodyX, snakeBodyY, direction);
      moveSnake(direction);
    }, 100);
    return () => clearInterval(intervalId);
  }, [direction, moveSnake, moveFood, snakeBodyY, snakeBodyX]);

  return (
    <>
      <div className={" flex h-screen flex-col items-center justify-center"}>
        <BoardCanvas ref={canvasRef1} drawBoard={drawBoard} />
        <Canvas ref={canvasRef2} draw={draw} />
      </div>
    </>
  );
};

export default Game;
