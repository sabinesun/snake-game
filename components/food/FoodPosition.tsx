import { useFoodX, useFoodY } from "@/hooks/useState";
import { Direction } from "@/types/type";
import { useState } from "react";

export const useFoodPosition = () => {
  const { foodX, setFoodX } = useFoodX();
  const { foodY, setFoodY } = useFoodY();
  const [point, setPoint] = useState<number>(0);

  function getRandomArbitrary(min: number, max: number) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randomNum / 10) * 10;
  }

  const moveFood = (
    snakeBodyX: number[],
    snakeBodyY: number[],
    direction: Direction | null
  ) => {
    for (let i = 0; i < snakeBodyX.length; i++) {
      if (snakeBodyX[i] === foodX && snakeBodyY[i] === foodY) {
        setPoint(point + 100);
        setFoodX(getRandomArbitrary(0, 700));
        setFoodY(getRandomArbitrary(0, 450));

        switch (direction) {
          case Direction.Up:
            snakeBodyX.push(snakeBodyX[length]);
            snakeBodyY.push(snakeBodyY[length] + 10);
            break;
          case Direction.Down:
            snakeBodyX.push(snakeBodyX[length]);
            snakeBodyY.push(snakeBodyY[length] - 10);
            break;
          case Direction.Left:
            snakeBodyX.push(snakeBodyX[length] - 10);
            snakeBodyY.push(snakeBodyY[length]);
            break;
          case Direction.Right:
            snakeBodyX.push(snakeBodyX[length] + 10);
            snakeBodyY.push(snakeBodyY[length]);
            break;
          default:
            break;
        }
      }
    }
  };

  return { foodX, foodY, moveFood, point };
};
