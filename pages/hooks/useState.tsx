import { useState } from "react";

export const useSnakePositionX = () => {
  const x = [40, 30, 20, 10, 0];
  const [snakeBodyX, setSnakeBody] = useState<number[]>(x);
  const setSnakeBodyX = (newValue: any) => {
    setSnakeBody(newValue);
  };
  return { snakeBodyX, setSnakeBodyX };
};

export const useSnakePositionY = () => {
  const y = [0, 0, 0, 0, 0];
  const [snakeBodyY, setSnakeBody] = useState<number[]>(y);
  const setSnakeBodyY = (newValue: any) => {
    setSnakeBody(newValue);
  };
  return { snakeBodyY, setSnakeBodyY };
};

export const useFoodX = () => {
  const [foodX, setFood] = useState<number>(370);
  const setFoodX = (newValue: number) => {
    setFood(newValue);
  };
  return { foodX, setFoodX };
};

export const useFoodY = () => {
  const [foodY, setFood] = useState<number>(250);
  const setFoodY = (newValue: number) => {
    setFood(newValue);
  };
  return { foodY, setFoodY };
};
