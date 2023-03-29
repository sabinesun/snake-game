import { useFoodX, useFoodY } from "@/pages/hooks/useState";
import { Direction } from "@/pages/types/type";

export const useFoodPosition = () => {
  const { foodX, setFoodX } = useFoodX();
  const { foodY, setFoodY } = useFoodY();

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
        setFoodX(getRandomArbitrary(0, 750));
        setFoodY(getRandomArbitrary(0, 500));

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

  return { foodX, foodY, moveFood };
};
