import { Direction } from "@/types/type";
import { useSnakePositionX, useSnakePositionY } from "@/hooks/useState";

export const useSnakeLogic = () => {
  const { snakeBodyX, setSnakeBodyX } = useSnakePositionX();
  const { snakeBodyY, setSnakeBodyY } = useSnakePositionY();

  const modulo = (m: number, n: number) => {
    return ((n % m) + m) % m;
  };
  const moveSnake = (direction: Direction | null) => {
    switch (direction) {
      case Direction.Up:
        setSnakeBodyY((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0
              ? modulo(300, prevArray[0] - 10)
              : modulo(300, prevArray[index - 1])
          )
        );
        setSnakeBodyX((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0 ? prevArray[0] : prevArray[index - 1]
          )
        );
        break;
      case Direction.Down:
        setSnakeBodyY((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0
              ? modulo(300, prevArray[0] + 10)
              : modulo(300, prevArray[index - 1])
          )
        );
        setSnakeBodyX((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0 ? prevArray[0] : prevArray[index - 1]
          )
        );
        break;

      case Direction.Left:
        setSnakeBodyX((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0
              ? modulo(400, prevArray[0] - 10)
              : modulo(400, prevArray[index - 1])
          )
        );
        setSnakeBodyY((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0 ? prevArray[0] : prevArray[index - 1]
          )
        );
        break;
      case Direction.Right:
        setSnakeBodyX((prevArray: number[]) =>
          prevArray.map((value, index) =>
            index === 0
              ? modulo(400, prevArray[0] + 10)
              : modulo(400, prevArray[index - 1])
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

  return { snakeBodyX, snakeBodyY, moveSnake };
};
