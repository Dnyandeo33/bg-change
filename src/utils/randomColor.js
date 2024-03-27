export const randomColor = (num) => {
  if (num < 0 || Number.isInteger(num) !== true) {
    return 0;
  }
  return Math.floor(Math.random() * num);
};
