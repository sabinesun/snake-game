import { useFoodX, useFoodY } from "@/pages/hooks/useState";

export const useFoodPosition = () => {
  const { foodX, setFoodX } = useFoodX();
  const { foodY, setFoodY } = useFoodY();

  function getRandomArbitrary(min: number, max: number) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randomNum / 10) * 10;
  }

  const moveFood = (snakeBodyX: number[], snakeBodyY: number[]) => {
    for (let i = 0; i < snakeBodyX.length; i++) {
      if (snakeBodyX[i] === foodX && snakeBodyY[i] === foodY) {
        setFoodX(getRandomArbitrary(0, 750));
        setFoodY(getRandomArbitrary(0, 500));
      }
    }
  };

  return { foodX, foodY, moveFood };
};
